import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the legislationPage state domain
 */

const selectLegislationPageDomain = state =>
  state.get('legislationPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LegislationPage
 */

const makeSelectLegislationPage = () =>
  createSelector(selectLegislationPageDomain, substate => substate.toJS());

export default makeSelectLegislationPage;
export { selectLegislationPageDomain };
