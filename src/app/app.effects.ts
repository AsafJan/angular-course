import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { LoginActionTypes, UserLoginSuccess } from './login.actions';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class AppEffects {
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
    tap(() => {
      console.log('aaa');
      this.router.navigateByUrl('/feed');
      // this.router.navigateByUrl('/register');
    })
  )
}