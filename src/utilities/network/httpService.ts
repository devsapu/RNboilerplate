import axios from 'axios';

// Create a custom axios instance
const api = axios.create({
  baseURL: 'http://localhost:3001', // replace with your local server's port
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // e.g., add authorization header
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    console.log('error',error)
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
