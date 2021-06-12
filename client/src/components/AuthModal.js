import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { userSignUp, userLogIn } from '../utils/API';
import { signup, login } from '../actions/actionCreators';

export const AuthModal = ({clickedButton, activeModal, toggleModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  
  const handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;

  if (name === 'email') setEmail(value);
  if (name === 'password') setPassword(value);
};

const handleSignup = async () => {
  await userSignUp({email, password})
  .then(res => {
    dispatch(signup(res));
    if (res) setIsLoggedIn(true);
  })
}

const handleLogin = async () => {
  await userLogIn({email, password})
  .then(res => {
    dispatch(login(res));
    if (res) setIsLoggedIn(true);
  })
}

const handleFormSubmit = event => {
  event.preventDefault();
  if (!email || !password) {
    alert('Please enter a valid email and password');
  } else {
    if (clickedButton === 'Sign Up') {
      handleSignup();
      setEmail('');
      setPassword('');
      toggleModal();
    } else if (clickedButton === 'Login') {
      handleLogin();
      setEmail('');
      setPassword('');
      toggleModal();
    }
  }
};

  if (isLoggedIn) {
    return <Redirect to='/dashboard' />
  }
  return (
    <div className={`modal ${activeModal ? 'is-active' : null}`}>
      <div className='modal-background' />
      <div className='modal-content'>
        <button
          className='modal-close is-large'
          aria-label='close'
          onClick={toggleModal}
        />
        <form>
          <label>
            <h3>Email</h3>
            <input
              type='text'
              name='email'
              value={email}
              onChange={handleInputChange}
            />
          </label>
          <br/>
          <label>
            <h3>Password</h3>
            <input
              type='password'
              name='password'
              value={password}
              onChange={handleInputChange}
            />
          </label>
          <br/>
          <input
            className='submit-button'
            type='submit'
            value={clickedButton}
            onClick={handleFormSubmit}
          />
        </form>
      </div>
    </div>
  );
}
