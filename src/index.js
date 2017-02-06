import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import Youtube from './youtube';

const API_KEY = process.env.API_KEY;
const DEFAULT_QUERY = 'dogs';
const YouTube = new Youtube(API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      currentVideo: null,
      comments: []
    };

    this.performSearch(DEFAULT_QUERY);
  }

  handleClick = (currentVideo) => {
    this.setState({currentVideo});
    this.getComments(currentVideo.id.videoId);
  }

  handleSearch = (query) => {
    this.performSearch(query);
  }

  performSearch = (query) => {
    YouTube.getVideos(query)
      .then(results => { 
        this.setState({ 
          videos: results,
          currentVideo: results[0]
        });
      });
  };

  getComments = (videoId) => {
    YouTube.getComments(videoId)
      .then(results => {
        console.log(results);
      });
  }

  render() {
    return (
      <div className="row">
        <SearchBar
          onClick={this.handleSearch}
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