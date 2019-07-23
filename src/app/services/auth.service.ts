import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _userEmail: BehaviorSubject<String> = new BehaviorSubject<string>(null);

  constructor(private router: Router) { }

  getUserEmail() {
    return this._userEmail.asObservable();
  }

  setUserEmail(userEmail: string) {
    this._userEmail.next(userEmail);
  }

  login(userEmail: string) {
    this.setUserEmail(userEmail);
    this.router.navigateByUrl('/feed');
  }

  logout() {
    this.setUserEmail(null);
    this.router.navigateByUrl('/');
  }
}
