import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LoginActionTypes, UserLoginSuccess } from './login.actions';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class LoginEffects {

  constructor(private actions$: Actions,
    private router: Router) { }

  @Effect()
  userLogin$ = this.actions$.pipe(
    ofType(LoginActionTypes.UserLogin),
    map((action: any) => new UserLoginSuccess(action.payload))
  )

  @Effect({ dispatch: false })
  userLoginSuccess$ = this.actions$.pipe(
    ofType(LoginActionTypes.UserLoginSuccess),
    tap(() => this.router.navigateByUrl('/feed'))
  )
}
