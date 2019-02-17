import { fromJS } from 'immutable';
import cooperationPageReducer from '../reducer';

describe('cooperationPageReducer', () => {
  it('returns the initial state', () => {
    expect(cooperationPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
