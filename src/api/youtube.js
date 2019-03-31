import axios from 'axios';

const KEY ='AIzaSyD4CMsD98_i9KoKa8qGEOSPEfipsMT9keE';

export default axios.create({

   baseURL: 'https://www.googleapis.com/youtube/v3' ,
   params: {
      part: 'snippet',
      maxResult: 5,
      key: KEY
   }
});