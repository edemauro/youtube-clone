import Youtube from '../youtube';

const API_KEY = process.env.API_KEY;
const DEFAULT_QUERY = 'dogs';
const YouTube = new Youtube(API_KEY);

export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_LOADING = 'SET_LOADING';
export const SET_VIDEOS = 'SET_VIDEOS';
export const SET_CURRENT_VIDEO = 'SET_CURRENT_VIDEO';

export function setSearchTerm(term) {
  return {
    type: SET_SEARCH_TERM,
    term
  };
}

function setIsLoading(isLoading) {
  return {
    type: SET_LOADING,
    isLoading
  };
}

function setVideos(videos) {
  return {
    type: SET_VIDEOS,
    videos
  };
}

export function fetchVideos(term) {
  return dispatch => {
    dispatch(setSearchTerm(term));
    dispatch(setIsLoading(true));

    return YouTube.getVideos(term)
      .then(results => dispatch(setVideos(results)));
  }
}