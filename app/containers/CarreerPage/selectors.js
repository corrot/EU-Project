import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the carreerPage state domain
 */

const selectCarreerPageDomain = state => state.get('carreerPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by CarreerPage
 */

const makeSelectCarreerPage = () =>
  createSelector(selectCarreerPageDomain, substate => substate.toJS());

export default makeSelectCarreerPage;
export { selectCarreerPageDomain };
