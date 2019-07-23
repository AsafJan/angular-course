import { Action } from '@ngrx/store';
import { LoginActions, LoginActionTypes } from './login.actions';


export interface State {
  user: string;
  loading: boolean;
}

export const initialState: State = {
  user: null,
  loading: false
};

export function reducer(state = initialState, action: LoginActions): State {
  switch (action.type) {

    case (LoginActionTypes.UserLogin):
      return { ...state, loading: true };

    case (LoginActionTypes.UserLoginSuccess):
      return { ...state, loading: false, user: action.payload }

    default:
      return state;
  }
}
