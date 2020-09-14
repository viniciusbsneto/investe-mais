import axios from 'axios';

const api = axios.create({
  baseURL: 'https://wlrfkvp3g5.execute-api.us-east-1.amazonaws.com/production',
});

export default api;