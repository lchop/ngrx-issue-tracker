import { getSelectors } from "@ngrx/router-store"; 
import { RootState } from "./index";

export const selectFeature = (state: RootState) => state.router;

export const { 
    selectCurrentRoute, 
    selectFragment, 
    selectQueryParams,
    selectQueryParam, 
    selectRouteParams, 
    selectRouteParam, 
    selectRouteData, 
    selectUrl,
} = getSelectors(selectFeature);