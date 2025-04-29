import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public accountForm!: FormGroup;
  private _authService = inject(AuthService);

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.initilizeForm();
  }

  protected onLogin() {
    this._router.navigate(['layout/']);
    if (this.accountForm.valid) {
      this._authService.login(this.email.value, this.password.value);
    } else {
      Object.keys(this.accountForm.controls).forEach(key => {
        const control = this.accountForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  protected navigateToCreateAccount() {
    this._router.navigate(['create-account']);
  }

  get email(): FormControl {
    return this.accountForm.get('email') as FormControl;
  }
  get password(): FormControl {
    return this.accountForm.get('password') as FormControl;
  }
  get termsAndConditions(): FormControl {
    return this.accountForm.get('termsAndConditions') as FormControl;
  }

  private initilizeForm() {
    this.accountForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      termsAndConditions: [false, Validators.requiredTrue],
    })
  }
}
