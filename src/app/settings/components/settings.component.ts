import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Priority } from 'src/app/models/priority';
import * as fromSettings from '../store/notification/notification.selectors';
import * as SettingsActions from '../store/notification/notification.actions';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  notificationPriority$: Observable<Priority>;
  
  constructor(private store: Store) { 
    this.notificationPriority$ = this.store.select(
      fromSettings.selectPriority
    );
  }

  changeNotificationPriority(notificationPriority: string): void {
    const priority : Priority = notificationPriority as Priority
    this.store.dispatch(
      SettingsActions.changePriority({ priority: priority }) 
    );
  }
}
