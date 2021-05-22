import React from 'react';

const Footer = ({footerClass}) => (
        <footer className={footerClass}>
            <a className='footer-link' href='https://github.com/willblake01/hotspotr' target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github-alt"></i>
                <p>Created by: Will Blake 2018 &copy;</p>
            </a>
        </footer>
)

export default Footer;
