import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ac061-default-rtdb.firebaseio.com/'
});

export default instance;