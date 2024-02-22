import axios from 'axios';
import applyCaseMiddleware from 'axios-case-converter';

// Function to get the CSRF token from a cookie
function getCsrfToken() {
  const csrfToken = document.cookie
    .split('; ')
    .find(row => row.startsWith('XSRF-TOKEN='))
    ?.split('=')[1];
  return csrfToken;
}

// Create an axios instance
const axiosInstance = axios.create();

// Apply case middleware to the axios instance
const axiosClient = applyCaseMiddleware(axiosInstance);

// Add request interceptor for CSRF token
axiosClient.interceptors.request.use(request => {
  const csrfToken = getCsrfToken();
  if (csrfToken) {
    // Ensure the header name matches what your server expects ('X-CSRF-TOKEN' is common)
    request.headers['X-CSRF-TOKEN'] = csrfToken;
  }
  return request;
});

// Existing request interceptor for logging
axiosClient.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2));
  return request;
});

export default axiosClient;
