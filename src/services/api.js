import axios from 'axios';

const API_URL = 'http://ec2-18-117-78-200.us-east-2.compute.amazonaws.com:3000';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
