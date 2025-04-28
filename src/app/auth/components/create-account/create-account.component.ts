import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.scss'
})
export class CreateAccountComponent implements OnInit {

  public accountForm!: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  protected onSubmit() {
    this._router.navigate(['layout/']);
    if (this.accountForm.valid) {
      console.log('Form submitted:', this.accountForm.value);
      // Add your form submission logic here
    } else {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.accountForm.controls).forEach(key => {
        const control = this.accountForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  protected navigateToLogin() {
    this._router.navigate(['login']);
  }

  get name(): FormControl {
    return this.accountForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.accountForm.get('email') as FormControl;
  }
  get termsAndConditions(): FormControl {
    return this.accountForm.get('termsAndConditions') as FormControl;
  }

  private initilizeForm() {
    this.accountForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      termsAndConditions: [false, Validators.requiredTrue],
    })
  }

}
