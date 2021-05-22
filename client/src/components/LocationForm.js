import React from 'react';

const LocationForm = ({handleInputChange, handleSubmit}) => (
    <div className='field'>
        <label className='label'>What location would you like to research?</label>
        <div className='control'>
            <input className='input' type='text' name='location' onChange={handleInputChange} placeholder='Ex. Travis Co' />
        </div>
        <div className='control'>
            <button type='submit' className='large-button' onClick={() => handleSubmit()}>Submit</button>
        </div>
    </div>
);

export default LocationForm;
