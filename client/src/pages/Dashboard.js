import React, { useState } from 'react';
import { Sidebar } from '../components/Sidebar.js';
import { SocialMedia } from '../components/SocialMedia.js';
import { Googlemaps } from '../components/Googlemaps.js';
import { ThemeProvider } from '@material-ui/styles';
import { Drawer, MenuItem } from '@material-ui/core';
import { IndustryForm, LocationForm, DemographicForm, CompetitionHeatmap } from '../components/Forms';
import { sendTest } from '../utils/API';
import { Logo2 } from '../components/Logo2.js';
import { Footer } from '../components/Footer.js';

export const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [whichForm, setWhichForm] = useState('');
  const [industry, setIndustry] = useState('');
  const [location, setLocation] = useState('');
  const [demographic, setDemographic] = useState('');
  const [placesResults, setPlacesResults] = useState([]);

  const handleClose = () => setOpen(false);

  const handleToggleIndustry = () => {
    setOpen(!open);
    setWhichForm('industry');
  };

  const handleToggleLocation = () => {
    setOpen(!open);
    setWhichForm('location');
  };

  const handleToggleDemographic = () => {
    setOpen(!open);
    setWhichForm('demographic');
  };

  const handleToggleHeatmap = () => {
    console.log('Yolo!')
  };

  const handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    switch (name) {
      case 'industry':
        setIndustry(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'demographic':
        setDemographic(value);
        break;
      default:
        return null;
    }
  };

  const handleSubmit = () => {
    if (whichForm === 'industry') {
      sendTest({ keyword: industry })
        .then(res => {
          const locations = res.data.results.map(i => i.geometry.location);
          placesResults.push(locations);
        })
        .then(err => console.log(err));
      handleClose();
    }
  };

  const formSelection = () => {
    switch (whichForm) {
      case 'industry':
        return (
          <IndustryForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        );
      case 'location':
        return (
          <LocationForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        );
      case 'demographic':
        return (
          <DemographicForm
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='dashboard-cont'>
      <div className='dashboard-grid-container'>
        <div className='dashboard-grid-row'>
          <Logo2 logo2Class='dashboard-logo' />
          <h1 className='main-title'>Hot Spotr</h1>
        </div>
        <div className='dashboard-grid-column-1'>
          <Sidebar
            handleToggleIndustry={handleToggleIndustry}
            handleToggleLocation={handleToggleLocation}
            handleToggleDemographic={handleToggleDemographic}
            handleToggleHeatmap={handleToggleHeatmap}
          />
          <ThemeProvider>
            <Drawer
              open={open}
              onRequestChange={open => setState({ open })}
            >
              <MenuItem onClick={handleClose}>CLOSE</MenuItem>
              {formSelection()}
            </Drawer>
          </ThemeProvider>
        <div className='column-1-footer'>
          <SocialMedia socialClass='dashboard-social-media' />
        </div>
        </div>
        <div className='dashboard-grid-column-2'>
          <Googlemaps mapClass='dashboard-map' placesResults={placesResults} />
          <div className='column-2-footer'>
            <Footer footerClass='footer-block' />
          </div>
        </div>
      </div>
    </div>
  );
}
