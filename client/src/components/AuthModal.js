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
        this.props.toggleModal();
        API.userSignUp({
          email: this.state.email,
          password: this.state.password
        })
        this.setState({
          email: '',
          password: ''
        });
      } else if (this.props.clickedBtn === 'Login') {
        this.props.toggleModal();
        API.userLogIn({
            email: this.state.email,
            password: this.state.password
        })
        this.setState({
          email: '',
          password: ''
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
            onClick={this.props.toggleModal}
          />
          <form>
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
