export default function({ $axios, app }) {


  // Set the baseURL to the API URL
  $axios.defaults.baseURL = 'http://localhost:3333';

  // Include credentials (cookies) with every request
  $axios.defaults.withCredentials = true;

  // Add CSRF token to the request headers
  $axios.onRequest(config => {
    const token = app.$cookies.get('XSRF-TOKEN');
    if (token) {
      config.headers.common['X-XSRF-TOKEN'] = token;
    }
    return config;
  });

  // Handle response errors
  $axios.onError(error => {
    if (error.response.status === 401) {
      // Redirect to login or handle unauthorized error
      console.log('Unauthorized, logging out ...');
    }
  });
}
