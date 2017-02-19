import React, { Component } from 'react';
import SearchBar from './searchBar';
import VideoListContainer from '../containers/VideoListContainer';
import VideoDetailContainer from '../containers/videoDetailContainer';
import CommentListContainer from '../containers/commentListContainer';
import { connect } from 'react-redux';
import { fetchVideos } from '../actions';

class App extends Component {
  componentDidMount() {
    const { dispatch, searchTerm } = this.props;
    dispatch(fetchVideos(searchTerm));
  }

  render() {
    return (
      <div className="row">
        <SearchBar />
        <div className="col-sm-8">
          <VideoDetailContainer />
          <CommentListContainer />
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