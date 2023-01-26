
import { ActionReducerMap } from "@ngrx/store";
import { IssueState } from "./issue/issue.state";
import { issueReducer } from "./issue/issue.reducer";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";


//when you find yourself in a position where an action should be 
//handled by multiple reducers, you might exempt the action file
// from being named like a corresponding reducer. 
//Instead you can name it after the page on which the actions 
//occur and place it accordingly. The same applies for selectors 
//that stretch over various parts of the state.

export interface RootState { 
    issue: IssueState;
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<RootState> = { 
    issue: issueReducer as any,
    router: routerReducer,
};