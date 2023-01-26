//The application state is a plain object constrained by static typing.
//It can contain arbitrary information, but you should avoid redundancies
//and keep it serializable.

//Not to put in state:
//Derived State: Anything you can compute from the existing state doesn’t need to be in the state - even if the computation is expensive.
//Local State: if some state is only relevant to one component, manage it locally.
//Classes and Special Objects

import { Issue } from "src/app/models/issues";

export interface Issues {
  [id: string]: Issue;
}

export interface Filter {
  text: string;
}

export interface IssueState {
  entities: Issues;
  filter: Filter;
  loaded: boolean;
  loading: boolean;
}

export const initialState: IssueState = {
  entities: {},
  filter: {
    text: '',
  },
  loaded: false,
  loading: false
};

