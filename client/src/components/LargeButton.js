import React from 'react';

export const LargeButton = ({buttonClass, buttonClick, buttonText}) => (
    <button className={buttonClass} onClick={buttonClick}>
        {buttonText}
    </button>
);
