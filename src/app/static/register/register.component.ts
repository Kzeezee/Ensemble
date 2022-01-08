import { TitleCasePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/ensembleapp/shared/security/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private titlecasePipe: TitleCasePipe
  ) { }

  firstName: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  lastName: FormControl = new FormControl('', [Validators.required, Validators.minLength(2)]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  confirmPassword: FormControl = new FormControl('', [Validators.required]);
  registerForm: FormGroup = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
    confirmPassword: this.confirmPassword
  });

  public pendingFormSubmit: boolean = false;

  ngOnInit(): void {
  }

  onRegister() {
    this.pendingFormSubmit = true;
    if (this.registerForm.valid && (this.password.value == this.confirmPassword.value)) {
      this.trimRegistrationForm();
      this.authService.register(this.registerForm.value).subscribe(
        (data: number) => {
          console.log("Registration success of id: " + data);
          this.pendingFormSubmit = false;
          this.router.navigate(['content/login'], {queryParams: { registrationSuccess: true}});
        }, (err: any) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 400 && err.error == "Email already exists!") {
              this.email.setErrors({server: "Email already exists!"});
            }
          }
          this.pendingFormSubmit = false;
        }
      )
    } else {
      this.registerForm.markAllAsTouched();
      this.pendingFormSubmit = false;
    }
  }

  trimRegistrationForm() {
    this.firstName.setValue(this.firstName.value.trim());
    this.lastName.setValue(this.lastName.value.trim());
    this.email.setValue(this.email.value.trim());
  }

  titlecase(event: any) {
    event.target.value = this.titlecasePipe.transform(event.target.value.trim());
  }
}
