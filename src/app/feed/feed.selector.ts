import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FeedState } from './feed.reducer';

export const getFeedState = createFeatureSelector<FeedState>('feedState');

export const getItems = createSelector(getFeedState,
    (state: FeedState) => state.items);