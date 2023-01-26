//Reducer files should always export a single reducer function, 
//preferably prefixed with the state property

import { createReducer, on, Action } from "@ngrx/store"; 
import { IssueState, Issues, initialState } from "./issue.state";
import produce from 'immer';
import * as IssueActions from 'src/app/store/issue/issue.action'

//While you can use the same state change function for multiple action
//types you shouldn’t handle the same action type with multiple state 
//change functions - otherwise you’ll have to look in multiple places 
//in order to understand what an action is doing to a
// single slice of state.

export const reducer = createReducer(
    initialState,
    on(IssueActions.submit, (state) => {
      return { 
        ...state, 
        loading: true,
      }
    }),
    on(IssueActions.submitSuccess, (state, { issue }) => {
      return { 
        ...state, 
        entities: {
          ...state.entities,
          [issue.id]: issue, 
        },
        loading: false, 
      };
    }),
    on(IssueActions.submitFailure, (state) => ({ 
      ...state,
      loading: false,
      }
    )),
    on(IssueActions.search, (state, { text }) => ({
      ...state,
      filter: {
        ...state.filter,
        text,
      },
    })),
    on(IssueActions.resolve, (state, { issueId }) => {
      const issue = state.entities[issueId];
      return {
        ...state,
        entities: {
          ...state.entities,
          [issueId]: {
            ...issue,
            resolved: true,
          },
        },
      };
    }),
    on(IssueActions.resolveFailure, (state, { issueId }) => { 
      const issue = state.entities[issueId];
      return {
        ...state, entities: {
          ...state.entities, 
          [issueId]: {
            ...issue,
            resolved: false, 
          },
        }
      }
    }),
    on(IssueActions.loadSuccess, (state, { issues }) => {
      const entities: Issues = {};
      issues.forEach((issue) => (entities[issue.id] = issue));
      return {
        ...state,
        entities,
        loaded: true,
      };
    })

  );
  
  export const issueReducer = (state: IssueState, action: Action): IssueState => {
    try {
      return reducer(state, action);
    } catch (error) {
      console.error(error);
      return state;
    }
  };