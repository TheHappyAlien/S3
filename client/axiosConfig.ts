import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Change this to your API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
