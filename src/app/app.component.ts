import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { reset } from './store/meta-reducer';
import { IssueStats, selectStats } from './store/issue/issue.selector';
import { RootState } from './store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  stats$: Observable<IssueStats>;

  constructor(private store: Store<RootState>) {
    this.stats$ = this.store.select(selectStats);
  }

  reset(): void {
    this.store.dispatch(reset());
  }
}