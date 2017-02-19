import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoListContainer from '../containers/VideoListContainer';
import VideoDetailContainer from '../containers/videoDetailContainer';
import CommentList from './comment_list';
import Youtube from '../youtube';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';

const API_KEY = process.env.API_KEY;
const DEFAULT_QUERY = 'dogs';
const YouTube = new Youtube(API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      comments: []
    };
  }

  componentDidMount() {
    const { dispatch, searchTerm } = this.props;
    dispatch(fetchVideos(searchTerm));
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
          <VideoDetailContainer />
          <CommentList
            comments={this.state.comments}
          />
        </div>
        <div className="col-sm-4">
          <VideoListContainer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(App);