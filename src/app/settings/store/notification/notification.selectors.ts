import { createFeatureSelector, createSelector } from "@ngrx/store"; 
  import * as fromSettings from '../index';

  
  export const selectFeature = createSelector(
    fromSettings.selectFeature,
    ({ notification }) => notification
  );
  
  export const selectPriority = createSelector(
    selectFeature,
    (settings) => settings.priority
  );