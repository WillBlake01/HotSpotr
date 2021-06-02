import React, { useState } from 'react';
import API from '../utils/API';

const AuthModal = ({clickedButton, activeModal, toggleModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
  let value = event.target.value;
  const name = event.target.name;

  if (name === 'email') setEmail(value);
  if (name === 'password') setPassword(value);
};

const handleFormSubmit = event => {
  event.preventDefault();
  if (!email || !password) {
    alert('Please enter a valid email and password');
  } else {
    if (clickedButton === 'Sign Up') {
      toggleModal();
      API.userSignUp({
        email: email,
        password: password
      })
      setEmail('');
      setPassword('');
    } else if (clickedButton === 'Login') {
      toggleModal();
      API.userLogIn({
          email: email,
          password: password
      })
      setEmail('');
      setPassword('');
    }
  }
};

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

export default AuthModal;
