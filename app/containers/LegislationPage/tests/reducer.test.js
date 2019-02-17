import { fromJS } from 'immutable';
import legislationPageReducer from '../reducer';

describe('legislationPageReducer', () => {
  it('returns the initial state', () => {
    expect(legislationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
