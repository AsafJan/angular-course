import { Action } from '@ngrx/store';

export enum LoginActionTypes {
  UserLogin = '[Login] User Login',
  UserLoginSuccess = '[Login] User Login Success',
}

export class UserLogin implements Action {
  readonly type = LoginActionTypes.UserLogin;

  constructor(public payload: string) { }
}

export class UserLoginSuccess implements Action {
  readonly type = LoginActionTypes.UserLoginSuccess;

  constructor(public payload: string) { }
}


export type LoginActions = UserLogin | UserLoginSuccess;
