import { connect } from 'react-redux';
import VideoList from '../components/videoList';
import { setCurrentVideo, fetchComments } from '../actions';

const mapStateToProps = (state) => {
  return {
    videos: state.videos
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (video) => {
      dispatch(setCurrentVideo(video));
      dispatch(fetchComments(video.id.videoId));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);