import axios from 'axios';

const api=axios.create({
    baseURL: 'http://localhost:8081',
    headers: {
        'Authorization': 'Basic ' + btoa('sumit:password123')
    }
})

export default api;