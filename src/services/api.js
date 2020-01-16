import axios from 'axios';

const api = axios.create({
  baseURL: 'https://farmly-app.herokuapp.com',

});

export default api;
