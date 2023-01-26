import { HttpClient } from "@angular/common/http";
import { Issue } from "../models/issues";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" }) 
export class IssueService {
    constructor(private http: HttpClient) {}

    save(issue: Issue): Observable<Issue> {
        return this.http.post<Issue>(`/api/issues`, issue);
    }

    resolve(issueId: string): Observable<void> {
        return this.http.patch<void>(`/api/issues/${issueId}`, null);
    }

    getAll(): Observable<Issue[]> {
        return this.http.get<Issue[]>(`/api/issues`);
    }
}