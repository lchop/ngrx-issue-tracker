import { createSelector, select } from '@ngrx/store';
import { RootState } from '..';
import { Filter, Issues } from './issue.state';
import { Issue } from 'src/app/models/issues';
import { pipe, skipWhile } from 'rxjs';
import * as fromRouter from "../router.selector";


export const selectFeature = (state: RootState) => state.issue;

export const selectEntities = createSelector(
  selectFeature,
  ({ entities }) => entities
);

export const selectAll = createSelector(selectEntities, (entities) =>
  Object.values(entities)
);



export const selectOne = createSelector(
    selectEntities,
    (entities: Issues, id: string) => entities[id]
);
  
export const createSelectOne = () =>
createSelector(
    selectEntities,
    (entities: Issues, id: string) => entities[id]
);
  
export const selectFilter = createSelector(
  selectFeature,
  ({ filter }) => filter
);

export const selectFiltered = createSelector(
  selectAll,
  selectFilter,
  (issues: Issue[], { text }: Filter) => {
    if (text) {
      const lowercased = text.toLowerCase();
      return issues.filter(
        ({ title, description }) =>
          title.toLowerCase().includes(lowercased) ||
          description.toLowerCase().includes(lowercased)
      );
    } else {
      return issues;
    }
  }
);

export interface IssueStats {
  total: number;
  resolved: number;
}

export const selectStats = createSelector(
  selectAll,
  (issues): IssueStats => {
    const resolved = issues.filter((issue) => issue.resolved);
    return {
      total: issues.length,
      resolved: resolved.length,
    };
  }
);


export const selectLoaded = createSelector(
    selectFeature,
    ({ loaded }) => loaded
);
  
export const selectAllLoaded = () =>
    pipe(
        skipWhile((state: RootState) => !selectLoaded(state)),
        select(selectAll)
    );

export const selectActiveId = fromRouter.selectRouteParam("id");

export const selectActive = createSelector( 
  selectEntities,
  selectActiveId,
  (entities, id) => {
    if (id){
      return entities[id];
    }
    else
    {
      return entities[0];
    }
  }
  
);