import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const DEFAULT_PART = 'snippet';

class Search {
  constructor(key) {
    this.key = key;
    if(!key) {
      throw new Error("Expected an API key. Received undefined instead.");
    }
  }

  search(query) {
    let params = {};
    params.key = this.key;
    params.part = DEFAULT_PART;
    params.q = query;
    return axios.get(ROOT_URL, { params })
      .then((res) => { return res.data.items; })
      .catch((err) => { console.log(err); })
  }
}

export default Search