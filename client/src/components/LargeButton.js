import React from 'react';

const LargeButton = ({buttonClass, buttonClick, buttonText}) => (
    <button className={buttonClass} onClick={buttonClick}>
        {buttonText}
    </button>
);

export default LargeButton;
