
import { Component, OnInit } from "@angular/core"; 
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Issue } from "src/app/models/issues";
import { RootState } from "src/app/store";
import * as fromIssue from "src/app/store/issue/issue.selector";
import * as IssueActions from 'src/app/store/issue/issue.action';


@Component({
selector: "app-issues",
templateUrl: "./issues.component.html", 
styleUrls: ["./issues.component.css"],
})
export class IssuesComponent  {
    issues$!: Observable<Issue[]>;

    constructor(private store: Store<RootState>) {
    }

    ngOnInit(): void {
        this.issues$ = this.store.pipe(fromIssue.selectAllLoaded());
      }
    
    onSearch(text: string): void { 
        this.store.dispatch(IssueActions.search({ text }));
    }

    onResolve(issue: Issue): void { 
        this.store.dispatch(IssueActions.resolve({ issueId: issue.id }));
    }

    onSubmit(issue: Issue): void { 
        this.store.dispatch(IssueActions.submit({ issue }));
    } 
}