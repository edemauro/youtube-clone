import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import CommentList from './comment_list';
import Youtube from '../youtube';

const API_KEY = process.env.API_KEY;
const DEFAULT_QUERY = 'dogs';
const YouTube = new Youtube(API_KEY);

export default class App extends Component {
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
          handleSearch={this.handleSearch}
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