import axios from 'axios';

let mockData;
function __setMockData(newMockData) {
  mockData = newMockData;
}

class Youtube {
  getVideos(term) {
    return Promise.resolve(mockData.videos);
  }

  getComments(videoId) {
    return Promise.resolve(mockData.comments);
  }
}

Youtube.__setMockData = __setMockData;

module.exports = Youtube;