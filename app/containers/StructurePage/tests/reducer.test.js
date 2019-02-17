import { fromJS } from 'immutable';
import structurePageReducer from '../reducer';

describe('structurePageReducer', () => {
  it('returns the initial state', () => {
    expect(structurePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
