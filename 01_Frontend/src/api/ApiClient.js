import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const ApiClient = axios.create({
     baseURL :apiKey,
     headers : {
          'Content-Type' : 'application/json',
     }
})

export default ApiClient;