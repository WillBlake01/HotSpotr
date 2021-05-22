import axios from 'axios';

export default {
  userSignUp: (user) => {
    return axios.post('/signup', user);
  },
  userLogIn: (user) => {
    return axios.post('/login', user);
  },
  userLogOut: () => {
    return axios.get('/logout');
  },
  sendTest: (keyword) => {
    return axios.post('/call', keyword);
  }
};
