import axios from 'axios';

let mockData;
function __setMockData(newMockData) {
  mockData = newMockData;
}

class Youtube {
  getVideos(term) {
    return Promise.resolve([
      {
        id: {
          videoId: "2J5GzHoKl1Q"
        }
      }
    ]);
  }

  getComments(videoId) {
    return Promise.resolve([
      {
        id: "z12hd1sx3yikw5kvn22ce1erikb1vvbx004",
        kind: "youtube#commentThread"
      }
    ]);
  }
}

Youtube.__setMockData = __setMockData;

module.exports = Youtube;