jest.mock('../../src/youtube');

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/index';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

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

describe('async actions', () => {
  it('creates SET_VIDEOS when fetching videos has been done', () => {
    const term = 'dog';
    const mockVideo = {
      id: {
          videoId: "2J5GzHoKl1Q"
        }
    };
    const mockComment = {
      id: "z12hd1sx3yikw5kvn22ce1erikb1vvbx004",
      kind: "youtube#commentThread"
    };

    const mockVideos = [ mockVideo ];
    const mockComments = [ mockComment ];

    const expectedActions = [
      { type: actions.SET_SEARCH_TERM, term },
      { type: actions.SET_LOADING, isLoading: true },
      { type: actions.SET_VIDEOS, videos: mockVideos },
      { type: actions.SET_CURRENT_VIDEO, video: mockVideo },
      { type: actions.SET_COMMENTS, comments: mockComments }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchVideos(term))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});