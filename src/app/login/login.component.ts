import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Store } from '@ngrx/store';
import { UserLogin } from '../login.actions';
import { getUser } from '../login.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService,
    private store: Store<any>) { }

  ngOnInit() {
    this.store.select(getUser);
  }

  submit(form) {
    // use regular rxjs
    //this.auth.login(form.value['email']);

    // use ngrx
    this.store.dispatch(new UserLogin(form.value['email']));
  }

}
