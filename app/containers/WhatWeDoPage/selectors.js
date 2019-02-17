import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the whatWeDoPage state domain
 */

const selectWhatWeDoPageDomain = state =>
  state.get('whatWeDoPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by WhatWeDoPage
 */

const makeSelectWhatWeDoPage = () =>
  createSelector(selectWhatWeDoPageDomain, substate => substate.toJS());

export default makeSelectWhatWeDoPage;
export { selectWhatWeDoPageDomain };
