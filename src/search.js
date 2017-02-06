import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';

class Search {
  constructor(key) {
    this.key = key;
    if(!key) {
      throw new Error("Expected an API key. Received undefined instead.");
    }
  }

  search(params) {
    params.key = this.key;
    return axios.get(ROOT_URL, { params })
      .then((res) => { return res.data.items; })
      .catch((err) => { console.log(err); })
  }
}

export default Search