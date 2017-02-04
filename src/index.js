import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import axios from 'axios';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = process.env.API_KEY;

let params = {
  part: 'snippet',
  key: API_KEY,
  q: 'dogs'
};

axios.get('https://www.googleapis.com/youtube/v3/search', { params })
  .then((res) => { console.log(res); })
  .catch((err) => { console.log(err); })

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));