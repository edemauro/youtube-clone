import { combineReducers } from 'redux';
import {
  SET_SEARCH_TERM, SET_VIDEOS,
  SET_CURRENT_VIDEO, SET_LOADING
} from '../actions';

function searchTerm(state = 'dogs', action) {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return action.term;
    default:
      return state;
  }
}

function videos(state = [], action) {
  switch (action.type) {
    case SET_VIDEOS:
      return action.videos;
    default:
      return state;
  }
}

function currentVideo(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_VIDEO:
      return Object.assign({}, state, {
        video: action.video,
        comments: action.comments
      });
    default:
      return state;
  }
}

function isLoading(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  searchTerm,
  videos,
  currentVideo,
  isLoading
});

export default rootReducer;

/*
{
  searchTerm: 'dog',
  currentVideo: {
    video: {

    },
    comments: [

    ]
  },
  videos: [
  ],
  isLoading
} */