import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Issue } from 'src/app/models/issues';
import { RootState } from 'src/app/store';

import * as fromIssue from 'src/app/store/issue/issue.selector'
import * as IssueActions from 'src/app/store/issue/issue.action';


@Component({
  selector: 'app-issue-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent {

  @Input()
  issues!: Issue[];

  @Output()
  search = new EventEmitter<string>();

  @Output()
  resolve = new EventEmitter<Issue>();

  constructor() {}

  onSearch(text: string): void { 
    this.search.emit(text);
  }

  onResolve(issue: Issue): void { 
    this.resolve.emit(issue);
  }

  trackByIssues(index: number, issue: Issue): string {
    return issue.id;
  }

}
