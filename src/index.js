import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import CommentList from './components/comment_list';
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
  }

  componentDidMount() {
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

        return results[0];
      })
      .then(result => {
        return this.getComments(result.id.videoId);
      })
  };

  getComments = (videoId) => {
    YouTube.getComments(videoId)
      .then(results => {
        this.setState({ comments: results });
      });
  }

  render() {
    return (
      <div className="row">
        <SearchBar
          onClick={this.handleSearch}
        />
        <div className="col-sm-8">
          <VideoDetail video={this.state.currentVideo} />
          <CommentList
            comments={this.state.comments}
          />
        </div>
        <div className="col-sm-4">
          <VideoList 
            videos={this.state.videos}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));