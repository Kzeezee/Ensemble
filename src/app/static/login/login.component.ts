import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/ensembleapp/shared/security/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required]);
  loginForm: FormGroup = new FormGroup({
    email: this.email,
    password: this.password
  });

  public pendingFormSubmit: boolean = false;
  public registrationSuccess: boolean = false;
  
  private emailString: string = "";
  private passwordString: string = "";


  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(params => {
      this.registrationSuccess = params['registrationSuccess'];
      if (this.registrationSuccess) {
        this.toastr.success("Account has been successfully registered. Please login to start the experience.", undefined, {
          positionClass: 'toast-top-center'
        });
      }
    });
  }

  onLogin() {
    this.pendingFormSubmit = true;
    if (this.loginForm.valid) {
      this.emailString = this.email.value.trim();
      this.passwordString = this.password.value;
      this.authService.login(this.emailString, this.passwordString).subscribe(
        res => {
          this.router.navigate(['content/dashboard']);
          this.pendingFormSubmit = false;
        }, err => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 403) {
              this.password.setValue("");
              this.passwordString = "";
              this.toastr.error("Invalid credentials");
            }
          }
          this.pendingFormSubmit = false;
        }
      )
    } else {
      this.loginForm.markAllAsTouched();
      this.pendingFormSubmit = false;
    }
  }

}
