import axios from 'axios';

const KEY ='AIzaSyDyICUGHuY3UZE7FOCUzVTWtuTplV2YZ0M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});