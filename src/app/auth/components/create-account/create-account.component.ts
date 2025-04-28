import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

export const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return password && confirmPassword && password.value !== confirmPassword.value 
    ? { passwordMismatch: true }
    : null;
};

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
    // this._router.navigate(['layout/']);
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
  get password(): FormControl {
    return this.accountForm.get('password') as FormControl;
  }
  get confirmPassword(): FormControl {
    return this.accountForm.get('confirmPassword') as FormControl;
  }
  get termsAndConditions(): FormControl {
    return this.accountForm.get('termsAndConditions') as FormControl;
  }

  private initilizeForm() {
    this.accountForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    }, { validators: passwordMatchValidator })
  }

  protected checkPassword() {
    const password = this.accountForm.get('password');
    const confirmPassword = this.accountForm.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
    } else {
      confirmPassword?.setErrors(null);
    }
  }
}
