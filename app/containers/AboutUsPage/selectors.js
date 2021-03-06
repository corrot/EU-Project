import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the aboutUsPage state domain
 */

const selectAboutUsPageDomain = state => state.get('aboutUsPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AboutUsPage
 */

const makeSelectAboutUsPage = () =>
  createSelector(selectAboutUsPageDomain, substate => substate.toJS());

export default makeSelectAboutUsPage;
export { selectAboutUsPageDomain };
