import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const ApiClient = axios.create({
     baseURL :"http://localhost:3232/api/v1",
     headers : {
          'Content-Type' : 'application/json',
     }
})

export default ApiClient;