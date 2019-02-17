import { fromJS } from 'immutable';
import whatWeDoPageReducer from '../reducer';

describe('whatWeDoPageReducer', () => {
  it('returns the initial state', () => {
    expect(whatWeDoPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
