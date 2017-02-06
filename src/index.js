import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Search from './search';

const API_KEY = process.env.API_KEY;
const DEFAULT_PART = 'snippet';
const DEFAULT_QUERY = 'dogs';
const YouTube = new Search(API_KEY);

let params = {
  part: DEFAULT_PART,
  q: DEFAULT_QUERY
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      currentVideo: null
    };

    this.performSearch(params);
  }

  handleClick = (currentVideo) => {
    this.setState({currentVideo});
  }

  handleSearch = (query) => {
    params.q = query;
    this.performSearch(params);
  }

  performSearch = (params) => {
    YouTube.search(params)
      .then(results => { 
        this.setState({ 
          videos: results,
          currentVideo: results[0]
        }); 
      });
  };

  render() {
    return (
      <div>
        <SearchBar
          onChange={this.handleSearch}
        />
        <VideoDetail video={this.state.currentVideo} />
        <VideoList 
          videos={this.state.videos}
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));