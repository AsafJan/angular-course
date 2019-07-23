import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { FeedState, reducer } from '../feed.reducer';

export interface State {
  feedState: FeedState
}

export const reducers: ActionReducerMap<State> = {
  feedState: reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
