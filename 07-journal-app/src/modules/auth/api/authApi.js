import axios from 'axios';

const authApi = axios.create({
  baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
  params: {
    key: 'AIzaSyBqwIIUvvv1fZDrOCw8QKU_IuymgbKUdbc'
  }
})

export default authApi