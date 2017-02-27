jest.mock('../../src/youtube');

import * as actions from '../../src/actions/index';

describe('actions', () => {
  it('should create an action to set the search term', () => {
    const term = 'marshmallow';
    const expectedAction = {
      type: actions.SET_SEARCH_TERM,
      term
    };
    expect(actions.setSearchTerm(term)).toEqual(expectedAction);
  });
});