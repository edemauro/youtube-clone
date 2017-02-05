import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import { Search } from './search';

const API_KEY = process.env.API_KEY;

const youTube = new Search(API_KEY);

let params = {
  part: 'snippet',
  q: 'dogs'
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: []
    };

    youTube.search(params)
      .then(results => { this.setState({ videos: results }); });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));