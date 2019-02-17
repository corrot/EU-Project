import { fromJS } from 'immutable';
import chairmanPageReducer from '../reducer';

describe('chairmanPageReducer', () => {
  it('returns the initial state', () => {
    expect(chairmanPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
