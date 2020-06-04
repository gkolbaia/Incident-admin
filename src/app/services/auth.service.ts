import { Injectable } from '@angular/core';
import { User } from '../interfaces/User.interface';
import { Observable, of, throwError, concat } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
const users: User[] = [{ email: 'g@gmail.com', password: 'password1' }];
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  login(credentials: User) {
    const loggedUser = this.checkUser(credentials);
    if (loggedUser) {
      return of(loggedUser);
    } else {
      return throwError({status: 400, message: 'bad request'});
    }
  }
  checkSession() {
    const userEmail = localStorage.getItem('token');
    if (!userEmail){
      return false;
    }
    const loggedUser = users.find(user => user.email === userEmail);
    return loggedUser.email;
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);

  }
  checkUser(credentials: User) {
    return users.find(
      (user: User) =>
        user.email === credentials.email &&
        user.password === credentials.password
    );
  }
}
