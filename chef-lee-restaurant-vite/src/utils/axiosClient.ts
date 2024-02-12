import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

// Create an axios instance
const axiosInstance = axios.create();

// Apply case middleware to the axios instance
const axiosClient = applyCaseMiddleware(axiosInstance);

// Add request interceptor for logging
axiosClient.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

export default axiosClient;
