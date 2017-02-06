import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/';
const SEARCH_URI = 'search';
const COMMENT_THREAD_URI = 'commentThreads';
const DEFAULT_PART = 'snippet';

class Youtube {
  constructor(key) {
    this.key = key;
    if(!key) {
      throw new Error("Expected an API key. Received undefined instead.");
    }
  }

  getVideos(query) {
    let params = {};
    params.key = this.key;
    params.part = DEFAULT_PART;
    params.q = query;

    const url = ROOT_URL + SEARCH_URI;

    return axios.get(url, { params })
      .then((res) => { return res.data.items; })
      .catch((err) => { console.log(err); })
  }

  getComments(videoId) {
    let params = {};
    params.key = this.key;
    params.part = DEFAULT_PART;
    params.videoId = videoId;

    const url = ROOT_URL + COMMENT_THREAD_URI;

    return axios.get(url, { params })
      .then((res) => { return res.data.items; })
      .catch((err) => { console.log(err); })
  }
}

export default Youtube