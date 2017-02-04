import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import { Search } from './search';

const API_KEY = process.env.API_KEY;

let youTube = new Search (API_KEY);

let params = {
  part: 'snippet',
  q: 'dogs'
};

youTube.search(params)
  .then(results => { console.log(results); });

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: []
    };
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));