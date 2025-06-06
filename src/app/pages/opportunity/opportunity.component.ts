import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { CustomSelectComponent } from '../../shared/components/custom-select/custom-select.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opportunity',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgSelectModule, CustomSelectComponent],
  templateUrl: './opportunity.component.html',
  styleUrl: './opportunity.component.scss'
})
export class OpportunityComponent implements OnInit {
  @ViewChildren('titleInput, descriptionInput')
  public formElements!: QueryList<ElementRef>;

  public opportunityForm!: FormGroup;
  public maxCheckboxSelection = 2;
  public minEndDate: string | null = null;

  public primaryCategoryOptions = ['Men', 'Woman'];
  public regionOptions = ['Europe', 'USA'];
  public formatTypeOptions = ['Inserts', 'Email Inserts', 'Packaging', 'Outside print', 'Stamp'];

  constructor(private fb: FormBuilder,private _router: Router) { }

  ngOnInit(): void {
    this.opportunityForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10)]],
      status: ['Active', Validators.required],
      type: ['', Validators.required],
      payment: ['', Validators.required],
      customerType: ['', Validators.required],
      primaryCategories: this.fb.array([], [this.minSelectedCheckboxes(1)]),
      targetRegions: ['', Validators.required],
      productType: ['', Validators.required],
      subProductType: ['', Validators.required],
      price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      volume: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      comments: [''],
      notes: [''],
      link: ['', [Validators.pattern(/https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=.]+/)]],
      extraLinks: this.fb.array([]),
      formatTypes: this.fb.array([], [this.minSelectedCheckboxes(1)])
    }, {
      validators: this.dateRangeValidator // attach the date logic
    });

  }

  protected minSelectedCheckboxes(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const formArray = control as FormArray;
      const selectedCount = formArray.controls.length;
      return selectedCount >= min ? null : { minCheckboxes: true };
    };
  }


  protected dateRangeValidator(formGroup: FormGroup) {
    const start = formGroup.get('startDate')?.value;
    const end = formGroup.get('endDate')?.value;

    if (start && end && new Date(start) > new Date(end)) {
      return { invalidDateRange: true };
    }
    return null;
  }

  get extraLinks(): FormArray {
    return this.opportunityForm.get('extraLinks') as FormArray;
  }
  get extraLinkControls(): FormControl[] {
    return this.extraLinks.controls as FormControl[];
  }

  protected addExtraLink(): void {
    this.extraLinks.push(this.fb.control(''));
  }
  protected removeExtraLink(index: number): void {
    this.extraLinks.removeAt(index);
  }


  get primaryCategories(): FormArray {
    return this.opportunityForm.get('primaryCategories') as FormArray;
  }

  // get targetRegions(): FormArray {
  //   return this.opportunityForm.get('targetRegions') as FormArray;
  // }

  get formatTypes(): FormArray {
    return this.opportunityForm.get('formatTypes') as FormArray;
  }
  get statusControl(): FormControl {
    return this.opportunityForm.get('status') as FormControl;
  }
  get typeControl(): FormControl {
    return this.opportunityForm.get('type') as FormControl;
  }
  get paymentControl(): FormControl {
    return this.opportunityForm.get('payment') as FormControl;
  }
  get customerTypeControl(): FormControl {
    return this.opportunityForm.get('customerType') as FormControl;
  }

  get productTypeControl(): FormControl {
    return this.opportunityForm.get('productType') as FormControl;
  }

  get subProductTypeControl(): FormControl {
    return this.opportunityForm.get('subProductType') as FormControl;
  }

  get targetRegionControl(): FormControl {
    return this.opportunityForm.get('targetRegions') as FormControl;
  }

  protected updateEndDateMin(): void {
    const startDate = this.opportunityForm.get('startDate')?.value;
    if (startDate) {
      // Format to yyyy-MM-dd for the input
      this.minEndDate = new Date(startDate).toISOString().split('T')[0];
    } else {
      this.minEndDate = null;
    }
  }

  protected toggleCheckbox(controlArray: FormArray, value: string, maxSelection?: number): void {
    const index = controlArray.value.indexOf(value);
    if (index !== -1) {
      // If already selected, remove it
      const controlIndex = controlArray.controls.findIndex(ctrl => ctrl.value === value);
      controlArray.removeAt(controlIndex);
    } else if (!maxSelection || controlArray.length < maxSelection) {
      // If not already selected and within limit (if any)
      controlArray.push(new FormControl(value));
    }
  }

  protected isCheckboxDisabled(controlArray: FormArray, value: string): boolean {
    return controlArray.length >= this.maxCheckboxSelection && !controlArray.value.includes(value);
  }

  protected onSubmit(): void {
    this._router.navigate(['layout/review-opportunity']);
    if (this.opportunityForm.invalid) {
      this.primaryCategories.markAsTouched();
      this.formatTypes.markAsTouched();
      this.opportunityForm.markAllAsTouched();

      // Find all invalid fields
      setTimeout(() => {
        for (const el of this.formElements.toArray()) {
          const controlName = el.nativeElement.getAttribute('formControlName');
          const control = this.opportunityForm.get(controlName);
          if (control?.invalid) {
            el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            el.nativeElement.focus();
            break;
          }
        }
      });

      return;
    }

    console.log(this.opportunityForm.value);
  }
}
