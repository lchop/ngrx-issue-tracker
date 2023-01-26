
import { createReducer, on } from "@ngrx/store"; 
import { initialState } from "./notification.state"; 
import * as NotificationActions from "./notification.actions";

export const notificationReducer = createReducer(
  initialState,
  on(NotificationActions.changePriority, (state, { priority }) => ({
    ...state,
    priority,
  }))
);