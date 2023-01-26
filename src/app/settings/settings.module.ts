import { StoreModule } from "@ngrx/store";
import { notificationReducer } from "./store/notification/notification.reducer"; 
import { NgModule } from "@angular/core";
import { SettingsComponent } from './components/settings.component';
import { CommonModule } from "@angular/common";
import { SettingsRoutingModule } from "./settings-routing.module";
import { settingsFeatureKey } from "./store";

@NgModule({ 
    imports: [
        CommonModule,
        SettingsRoutingModule,
        StoreModule.forFeature(settingsFeatureKey, notificationReducer), 
    ], declarations: [SettingsComponent],
})

export class SettingsModule {}