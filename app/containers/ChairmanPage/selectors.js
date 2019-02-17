import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the chairmanPage state domain
 */

const selectChairmanPageDomain = state =>
  state.get('chairmanPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ChairmanPage
 */

const makeSelectChairmanPage = () =>
  createSelector(selectChairmanPageDomain, substate => substate.toJS());

export default makeSelectChairmanPage;
export { selectChairmanPageDomain };
