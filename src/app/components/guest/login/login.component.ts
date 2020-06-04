import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interfaces/User.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  errorMessage: string;
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.initLoginForm();
  }

  ngOnInit(): void {
    if (!!this.authService.checkSession) {
      this.router.navigate(['/member']);
    }
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        (res: User) => {
          localStorage.setItem('token', res.email);
          this.router.navigate(['/member']);
        },
        (err) => {
          this.errorMessage = err.status === 400 ? 'Incorect Credentials' : 'Something went wrong';
          setTimeout(() => {
            this.errorMessage = null;
          }, 2000);
        }
      );
    }
  }

  private initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required, Validators.pattern(/^\D(?=.*\d).{7,15}$/)]),
    });
  }
}
