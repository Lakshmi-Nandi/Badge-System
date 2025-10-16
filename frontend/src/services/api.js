import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // Change if your backend uses a different port
  headers: {
    'Content-Type': 'application/json'
  }
});

export default API;
