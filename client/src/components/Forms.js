import React from 'react';

export const IndustryForm = ({handleInputChange, handleSubmit}) => (
  <div className='field'>
    <label className='label'>
      <h3>What industry are you competing in?</h3>
    </label>
    <div className='control'>
      <input className='input' type='text' name='industry' onChange={handleInputChange} placeholder='Ex. Real Estate' />
    </div>
    <div className='control'>
      <button type='submit' className='large-button' onClick={()=>handleSubmit()}>Submit</button>
    </div>
  </div>
);

export const LocationForm = ({handleInputChange, handleSubmit}) => (
    <div className='field'>
        <label className='label'>
          <h3>What location would you like to research?</h3>
        </label>
        <div className='control'>
            <input className='input' type='text' name='location' onChange={handleInputChange} placeholder='Ex. Travis Co' />
        </div>
        <div className='control'>
            <button type='submit' className='large-button' onClick={() => handleSubmit()}>Submit</button>
        </div>
    </div>
);

export const DemographicForm = ({handleInputChange, handleSubmit}) => (
    <div className='field'>
        <label className='label'>
          <h3>What demographic would you like to research?</h3>
        </label>
        <div className='control'>
            <input className='input' type='text' name='location' onChange={handleInputChange} placeholder='Ex. Age' />
        </div>
        <div className='control'>
            <button type='submit' className='large-button' onClick={() => handleSubmit()}>Submit</button>
        </div>
    </div>
);

export const CompetitionHeatmap = () => (
  <div></div>
);
