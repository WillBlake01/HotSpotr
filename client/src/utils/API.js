import axios from 'axios';

export const userSignUp = user => {
  return (
    axios.post('/signup', user)
    .then(() => {
      return user;
    })
  )
}

export const userLogIn = user => {
  return (
    axios.post('/login', user)
    .then(() => {
      return user;
    })
  )
}

export const userLogOut = user => {
  axios.get('/logout', user)
  .then(() => {
    return user;
  })
}

export const sendTest = keyword => {
  axios.post('/call', keyword);
}
