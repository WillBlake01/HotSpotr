import axios from 'axios';

export default {
  userSignUp: (user) => {
    axios.post('/signup', user).then(res => {
      window.location = res.data.redirectUrl;
    });
  },
  userLogIn: (user) => {
    axios.post('/login', user).then(res => {
      window.location = res.data.redirectUrl;
    });
  },
  userLogOut: (user) => {
    axios.get('/logout', user).then(res => {
      console.log('res:', res)
      window.location = res.data.redirectUrl;
    });
  },
  sendTest: (keyword) => {
    axios.post('/call', keyword);
  }
};
