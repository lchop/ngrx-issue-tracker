import { createAction, props } from '@ngrx/store';
import { Priority } from 'src/app/models/priority';

export const changePriority = createAction(
  '[Notification] Change Priority',
  props<{ priority: Priority }>()
);