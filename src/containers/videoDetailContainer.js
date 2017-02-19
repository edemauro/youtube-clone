import { connect } from 'react-redux';
import VideoDetail from '../components/videoDetail';

const mapStateToProps = (state) => {
  return {
    video: state.currentVideo.video
  };
}

export default connect(mapStateToProps)(VideoDetail);