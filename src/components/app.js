import React, { Component } from 'react';
import LoadingPage from './loadingPage';
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
    // Consider switching to inline if-else
    if( this.props.isLoading ) {
      return <LoadingPage />;
    }
    return (
      <div className="row">
        <SearchBar />
        <div className="col-sm-12">
          <VideoDetailContainer />
        </div>
        <div className="col-sm-6">
          <CommentListContainer />
        </div>
        <div className="col-sm-6">
          <VideoListContainer />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    isLoading: state.isLoading
  };
}

export default connect(mapStateToProps)(App);