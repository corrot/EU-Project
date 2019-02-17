import { fromJS } from 'immutable';
import aboutUsPageReducer from '../reducer';

describe('aboutUsPageReducer', () => {
  it('returns the initial state', () => {
    expect(aboutUsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
