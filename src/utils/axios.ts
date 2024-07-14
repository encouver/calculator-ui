
import axios from 'axios';

const baseURL = import.meta.env.PROD
  ? import.meta.env.VITE_APP_API_URL
  : 'localhost:8088/api/v1';

const axiosServices = axios.create({ baseURL });

// interceptor for http
axiosServices.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.error('Error Response:', error.response);
        if (error.response.status === 401) {
          alert('Unauthorized: ' + error.response.data);
        }
        return Promise.reject(error.response.data || 'Unknown Error');
      } else if (error.request) {
        console.error('Error Request:', error.request);
        return Promise.reject('No response received from the server');
      } else {
        console.error('Error Message:', error.message);
        return Promise.reject(error.message);
      }
    }
  );

export default axiosServices;
