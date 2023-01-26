import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { IssuesComponent } from './components/issues/issues.component';
import { reducers } from './store';
import { NewIssueComponent } from './components/new-issue/new-issue.component';
import { ReactiveFormsModule } from '@angular/forms';
import { resettingMetaReducer } from './store/meta-reducer';
import { IssueListComponent } from './components/issue-list/issue-list.component';
import { IssueDetailComponent } from './components/issue-detail/issue-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DatabaseService } from './services/database.service';
import { IssueEffects } from './store/issue/issue.effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent,
    IssuesComponent,
    NewIssueComponent,
    IssueListComponent,
    IssueDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(DatabaseService),
    EffectsModule.forRoot([IssueEffects]),
    StoreModule.forRoot(reducers, { metaReducers: [resettingMetaReducer] }),
    StoreRouterConnectingModule.forRoot({
      routerState : RouterState.Minimal
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
