import { ActionReducerMap, createFeatureSelector } from "@ngrx/store";
import { NotificationState } from "./notification/notification.state";
import { ProfileState } from "./profile/profile.state";
import { notificationReducer } from "./notification/notification.reducer";
import { profileReducer } from "./profile/profile.reducer";
import { RootState } from "src/app/store";

export interface SettingsState {
    notification: NotificationState;
    profile: ProfileState;
  }
  
export const settingsReducers: ActionReducerMap<SettingsState> = {
    notification: notificationReducer,
    profile: profileReducer,
};
  
export const settingsFeatureKey = 'settings';
  
export interface SettingsRootState extends RootState {
    [settingsFeatureKey]: SettingsState;
}
  
  export const selectFeature = createFeatureSelector<SettingsState>(settingsFeatureKey);