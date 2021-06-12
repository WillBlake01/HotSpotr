import React, { useState } from 'react';
import { ProgressBar } from '../components/ProgressBar';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { userLogOut } from '../utils/API';
import { useSelector } from 'react-redux';

export const Sidebar = ({handleToggleIndustry, handleToggleLocation, handleToggleDemographic, handleToggleHeatmap}) => {
  const [completed, setCompleted] = useState(0);
  const user = useSelector(state => state.user);

  return (
    <div className='sidebar-wrapper'>
      <div className='welcome-space'>
        <div className='welcome-message'>
          <h3>{`Welcome, ${user.email}`}</h3>
          <h3>Profile Progress</h3>
          <ThemeProvider>
            <ProgressBar completed={completed} />
          </ThemeProvider>
        </div>
      </div>
      <div className='menu-space'>
        <a
          className='sidebar-link'
          onClick={() => handleToggleIndustry()}
        >
          <span className='icon has-text-success'>
            <i className='fas fa-building' />
          </span>{' '}
          TARGET INDUSTRY
        </a>
        <a
          className='sidebar-link'
          onClick={() => handleToggleLocation()}
        >
          <span className='icon has-text-success'>
            <i className='fas fa-map-marker-alt' />
          </span>{' '}
          TARGET LOCATION
        </a>
        <a
          className='sidebar-link'
          onClick={() => handleToggleDemographic()}
        >
          <span className='icon has-text-success'>
            <i className='fas fa-users' />
          </span>{' '}
          TARGET DEMOGRAPHICS
        </a>
        <a
          className='sidebar-link'
          onClick={() => handleToggleHeatmap()}
        >
          <span className='icon has-text-success'>
            <i className='fas fa-map' />
          </span>{' '}
          COMPETITION HEATMAP
        </a>
        <a className='sidebar-link' onClick={() => {userLogOut()}}>
          <span className='icon has-text-success'>
            <i className='fas fa-arrow-circle-left' />
          </span>{' '}
          LOGOUT
        </a>
      </div>
    </div>
  );
}
