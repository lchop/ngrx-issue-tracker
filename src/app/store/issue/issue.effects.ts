import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, filter, map, mergeMap, of, switchMap, tap, withLatestFrom } from 'rxjs';
import * as fromIssue from "./issue.selector";
import * as IssueActions from "./issue.action";
import { IssueService } from 'src/app/services/issue.service';
import { Action, Store } from '@ngrx/store';
import { RootState } from '..';
import { OnInitEffects } from "@ngrx/effects";
import { NotificationService } from 'src/app/services/notifications.service';



@Injectable()
export class IssueEffects implements OnInitEffects {

  constructor(private action$: Actions, 
              private issues: IssueService,
              private store: Store<RootState>,
              private notifications: NotificationService) {}

  ngrxOnInitEffects(): Action { 
    return IssueActions.load();
  }

  submit$ = createEffect(() => this.action$.pipe(
    ofType(IssueActions.submit), 
    withLatestFrom(this.store.select(fromIssue.selectAll)), 
    filter(([action, issues]) =>
      issues.every(({ title }) => title !== action.issue.title) 
    ),
    mergeMap(([action, issues]) =>
     this.issues.save(action.issue).pipe(
        map((issue) => IssueActions.submitSuccess({ issue })),
        catchError(() => of(IssueActions.submitFailure()))
     )
    )
  ));

  resolve$ = createEffect(() =>
    this.action$.pipe(
    ofType(IssueActions.resolve),
    mergeMap(({ issueId }) =>
      this.issues.resolve(issueId).pipe(
        map(() => IssueActions.resolveSuccess()),
        catchError(() => of(IssueActions.resolveFailure({ issueId })))
      )
    )
  ));

  load$ = createEffect(() =>
    this.action$.pipe(
      ofType(IssueActions.load),
      switchMap(() => this.issues.getAll()),
      map((issues) => IssueActions.loadSuccess({ issues }))
    )
  );

  notification$ = createEffect( () =>
    this.action$.pipe( ofType(IssueActions.submitSuccess), 
      tap(({ issue }) => {
        this.notifications.info(`Issue submitted: ${issue.title}`); 
      })
    ),
    { dispatch: false }
  );

}

