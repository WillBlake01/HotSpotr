import React from 'react';
import Sidebar from '../components/Sidebar.js';
import SocialMedia from '../components/SocialMedia.js';
import Googlemaps from '../components/Googlemaps.js';
import { ThemeProvider } from '@material-ui/styles';
import { Drawer, MenuItem } from '@material-ui/core';
import { IndustryForm, LocationForm, DemographicForm, CompetitionHeatmap } from '../components/Forms';
import API from '../utils/API';
import Logo2 from '../components/Logo2.js';
import Footer from '../components/Footer.js';

class Dashboard extends React.Component {
  state = {
    open: false,
    whichForm: '',
    indistry: '',
    placesResults: []
  };

  handleClose = () => this.setState({ open: false });

  handleToggleIndustry = () => {
    this.setState({ open: !this.state.open, whichForm: 'industry' });
  };

  handleToggleLocation = () => {
    this.setState({ open: !this.state.open, whichForm: 'location' });
  };

  handleToggleDemographic = () => {
    this.setState({ open: !this.state.open, whichForm: 'demographic' });
  };

  handleToggleHeatmap = () => {
    console.log('Yolo!')
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    if (this.state.whichForm === 'industry') {
      API.sendTest({ keyword: this.state.industry })
        .then(res => {
          const locations = res.data.results.map(i => i.geometry.location);
          this.state.placesResults.push(locations);
        })
        .then(err => console.log(err));
      this.handleClose();
    }
  };

  formSelection = () => {
    switch (this.state.whichForm) {
      case 'industry':
        return (
          <IndustryForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case 'location':
        return (
          <LocationForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        );
      case 'demographic':
        return (
          <DemographicForm
            handleInputChange={this.handleInputChange}
            handleSubmit={this.handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return (
      <div className='dashboard-cont'>
        <div className='dashboard-grid-container'>
          <div className='dashboard-grid-row'>
            <Logo2 logo2Class='dashboard-logo' />
            <h1 className='main-title'>Hot Spotr</h1>
          </div>
          <div className='dashboard-grid-column-1'>
            <Sidebar
              handleToggleIndustry={this.handleToggleIndustry}
              handleToggleLocation={this.handleToggleLocation}
              handleToggleDemographic={this.handleToggleDemographic}
              handleToggleHeatmap={this.handleToggleHeatmap}
            />
            <ThemeProvider>
              <Drawer
                open={this.state.open}
                onRequestChange={open => this.setState({ open })}
              >
                <MenuItem onClick={this.handleClose}>CLOSE</MenuItem>
                {this.formSelection()}
              </Drawer>
            </ThemeProvider>
          <div className='column-1-footer'>
            <SocialMedia socialClass='dashboard-social-media' />
          </div>
          </div>
          <div className='dashboard-grid-column-2'>
            <Googlemaps mapClass='dashboard-map' placesResults={this.state.placesResults} />
            <div className='column-2-footer'>
              <Footer footerClass='footer-block' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
