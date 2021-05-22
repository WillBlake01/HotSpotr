import React, { Component } from 'react';
import API from '../utils/API';

class AuthModal extends Component {
  state = {
    email: '',
    password: ''
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert('Please enter a valid email and password');
    } else {
      if (this.props.clickedBtn === 'Sign Up') {
        API.userSignUp({
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          console.log(res);
          window.location.replace('/dashboard');
        })
        .catch(err => {
          console.log(err);
        });
      } else if (this.props.clickedBtn === 'Login') {
        API.userLogIn({
            email: this.state.email,
            password: this.state.password
        })
        .then(res => {
          console.log(res);
          if (res) {
            window.location.replace('/dashboard');
          }
        })
        .catch(err => {
          console.log(err);
        });
      }
    }
  };

  render() {
    return (
      <div className={`modal ${this.props.activeModal ? 'is-active' : null}`}>
        <div className='modal-background' />
        <div className='modal-content'>
          <button
            className='modal-close is-large'
            aria-label='close'
            onClick={() => this.props.toggleModal()}
          />
          <form onSubmit={this.handleSubmit}>
            <label>
              <p>Email</p>
              <input
                type='text'
                name='email'
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
            <br/>
            <label>
              <p>Password</p>
              <input
                type='password'
                name='password'
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <br/>
            <input
              className='submit-button'
              type='submit'
              value={this.props.clickedBtn}
              onClick={this.handleFormSubmit}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default AuthModal;
