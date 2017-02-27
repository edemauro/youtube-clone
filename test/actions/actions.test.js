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
  const MOCK_DATA = {
    mockVideos: [
      {
        id: {
          videoId: "2J5GzHoKl1Q"
        }
      }
    ],
    mockComments: [
      {
        id: "z12hd1sx3yikw5kvn22ce1erikb1vvbx004",
        kind: "youtube#commentThread"
      }
    ]
  };

  beforeEach(() => {
    require('../../src/youtube').__setMockData(MOCK_DATA);
  });

  it('creates SET_VIDEOS when fetching videos has been done', () => {
    const term = 'dog';

    const expectedActions = [
      { type: actions.SET_SEARCH_TERM, term },
      { type: actions.SET_LOADING, isLoading: true },
      { type: actions.SET_VIDEOS, videos: MOCK_DATA.mockVideos },
      { type: actions.SET_CURRENT_VIDEO, video: MOCK_DATA.mockVideos[0] },
      { type: actions.SET_COMMENTS, comments: MOCK_DATA.mockComments }
    ];
    const store = mockStore({});

    return store.dispatch(actions.fetchVideos(term))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});