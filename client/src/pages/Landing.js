import React, { useState } from 'react';
import Logo from '../components/Logo.js';
import LargeButton from '../components/LargeButton.js';
import AuthModal from '../components/AuthModal.js';
import Footer from '../components/Footer.js';
import SocialMedia from '../components/SocialMedia.js';

const Landing = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [clickedButton, setClickedButton] = useState('');

  const toggleModal = () => {
    const currentModalState = activeModal;
    setActiveModal(!currentModalState);
  }

  const toggleSignUp = () => {
    const currentModalState = activeModal;
    setActiveModal(!currentModalState);
    setClickedButton('Sign Up');
  };

  const toggleLogIn = () => {
    const currentModalState = activeModal;
    setActiveModal(!currentModalState);
    setClickedButton('Login');
  };

  return (
    <div className='landing-cont'>
      <div className='landing-grid-container'>
        <div className='landing-grid-column-1'>
          <div className='landing-content-grid-container'>
            <div className='content-grid-column-1'>
              <Logo logoClass='logo-image' />
            </div>
            <div className='content-grid-column-2'>
              <h1 className='main-title'>HotSpotr</h1>
              <p className='sub-title'>Locate the low hanging fruit</p>
              <div className='button-group'>
                <LargeButton
                  buttonClass='large-button'
                  buttonClick={toggleSignUp}
                  buttonText='Sign Up'
                />
                <LargeButton
                  buttonClass='large-button'
                  buttonClick={toggleLogIn}
                  buttonText='Login'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='landing-grid-column-2'></div>
        <AuthModal
          activeModal={activeModal}
          clickedButton={clickedButton}
          toggleModal={toggleModal}
        />
        <div className='landing-grid-row'>
          <SocialMedia socialClass='landing-social-media' />
          <Footer footerClass='footer-block' />
        </div>
      </div>
    </div>
  );
}

export default Landing;
