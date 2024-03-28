import axios from 'axios';

const journalApi = axios.create({
  baseURL: 'https://vue-demos-416c6-default-rtdb.firebaseio.com',
})

export default journalApi