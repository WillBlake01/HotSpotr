import React from 'react';

export const Logo = ({logoClass, unique}) => (
    <img className={`${logoClass} ${unique}`} src='https://res.cloudinary.com/willblake01/image/upload/v1538510016/hotspotr/logo.png' alt='Hot Spotr' />
);
