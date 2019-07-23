import { Action } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from './login.actions';


export interface AuthState {
  user: string;
  loading: boolean;
}

export const initialState: AuthState = {
  user: null,
  loading: false
};

export function reducer(state = initialState, action: LoginActions): AuthState {
  switch (action.type) {

    case (LoginActionTypes.UserLogin):
      return { ...state, loading: true };

    case (LoginActionTypes.UserLoginSuccess):
      return { ...state, loading: false, user: action.payload }

    default:
      return state;
  }
}
