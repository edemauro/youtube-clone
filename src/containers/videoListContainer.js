import { connect } from 'react-redux';
import VideoList from '../components/videoList';
import { setCurrentVideo, fetchAsyncComments } from '../actions';

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (video) => {
      dispatch(setCurrentVideo(video));
      dispatch(fetchAsyncComments(video.id.videoId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);