import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cooperationPage state domain
 */

const selectCooperationPageDomain = state =>
  state.get('cooperationPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CooperationPage
 */

const makeSelectCooperationPage = () =>
  createSelector(selectCooperationPageDomain, substate => substate.toJS());

export default makeSelectCooperationPage;
export { selectCooperationPageDomain };
