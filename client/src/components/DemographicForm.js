import React from 'react';

export const DemographicForm = ({handleInputChange, handleSubmit}) => (
    <div className='field'>
        <label className='label'>What demographic would you like to research?</label>
        <div className='control'>
            <input className='input' type='text' name='location' onChange={handleInputChange} placeholder='Ex. Age' />
        </div>
        <div className='control'>
            <button type='submit' className='large-button' onClick={() => handleSubmit()}>Submit</button>
        </div>
    </div>
);
