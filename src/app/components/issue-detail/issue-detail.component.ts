import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Issue } from 'src/app/models/issues';
import { RootState } from 'src/app/store';
import * as fromIssue from "src/app/store/issue/issue.selector";

@Component({
  selector: 'app-issue-detail',
  templateUrl: './issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent {

  issue$: Observable<Issue>;
  constructor(
    private route: ActivatedRoute, 
    private store: Store<RootState>) 
  {
      this.issue$ = this.store.select(fromIssue.selectActive);
  }

}
