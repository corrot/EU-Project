import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the structurePage state domain
 */

const selectStructurePageDomain = state =>
  state.get('structurePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by StructurePage
 */

const makeSelectStructurePage = () =>
  createSelector(selectStructurePageDomain, substate => substate.toJS());

export default makeSelectStructurePage;
export { selectStructurePageDomain };
