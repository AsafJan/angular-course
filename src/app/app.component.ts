import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Store } from '@ngrx/store';
import { getUser } from './login.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shs-course-project';
  userEmail: String = null;

  constructor(private router: Router,
    private auth: AuthService,
    private store: Store<any>) { }

  ngOnInit(): void {
    // this.auth.getUserEmail().subscribe(email => this.userEmail = email);
    this.store.select(getUser).subscribe(email => this.userEmail = email);
  }

  GetUserEmail() {
    return (this.userEmail) ? this.userEmail : 'Unknown User';
  }

  goToLogin() {
    this.router.navigateByUrl('/');
  }

  goToFeed() {
    this.router.navigateByUrl('/feed');
  }

  goToProduct(id: string) {
    this.router.navigateByUrl('/product/' + id);
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  goToCart() {
    this.router.navigateByUrl('/cart');
  }
}