import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './login.reducer';

export const getAuthState = createFeatureSelector<AuthState>('authState');

export const getUser = createSelector(getAuthState,
    (state: AuthState) => state.user);