import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LogicService } from '../services/logic-service.service';
import { FeedActionTypes, LoadFeedSuccess } from './feed.actions';
import { switchMap, map } from 'rxjs/operators';



@Injectable()
export class FeedEffects {



  constructor(private actions$: Actions,
    private logicService: LogicService) { }

  @Effect()
  loadFeed$ = this.actions$.pipe(
    ofType(FeedActionTypes.LoadFeed),
    switchMap(() => this.logicService.getItems(0)),
    map(items => new LoadFeedSuccess(items))
  );

}
