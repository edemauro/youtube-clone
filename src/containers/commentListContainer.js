import { connect } from 'react-redux';
import CommentList from '../components/CommentList';

const mapStateToProps = (state) => {
  return {
    comments: state.currentVideo.comments
  };
}

export default connect(mapStateToProps)(CommentList);