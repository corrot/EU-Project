import { fromJS } from 'immutable';
import carreerPageReducer from '../reducer';

describe('carreerPageReducer', () => {
  it('returns the initial state', () => {
    expect(carreerPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
