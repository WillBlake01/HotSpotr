import React from 'react';
import ProgressBar from '../components/ProgressBar';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import API from '../utils/API';

class Sidebar extends React.Component {
  state = {
    completed: 0
  };

  render() {
    return (
      <div className='sidebar-wrapper'>
        <div className='welcome-space'>
          <div className='welcome-message'>
            <h3>Welcome, </h3>
            <h3>Profile Progress</h3>
            <ThemeProvider>
              <ProgressBar completed={this.state.completed} />
            </ThemeProvider>
          </div>
        </div>
        <div className='menu-space'>
          <a
            className='sidebar-link'
            onClick={() => this.props.handleToggleIndustry()}
          >
            <span className='icon has-text-success'>
              <i className='fas fa-building' />
            </span>{' '}
            TARGET INDUSTRY
          </a>
          <a
            className='sidebar-link'
            onClick={() => this.props.handleToggleLocation()}
          >
            <span className='icon has-text-success'>
              <i className='fas fa-map-marker-alt' />
            </span>{' '}
            TARGET LOCATION
          </a>
          <a
            className='sidebar-link'
            onClick={() => this.props.handleToggleDemographic()}
          >
            <span className='icon has-text-success'>
              <i className='fas fa-users' />
            </span>{' '}
            TARGET DEMOGRAPHICS
          </a>
          <a
            className='sidebar-link'
            onClick={() => this.props.handleToggleHeatmap()}
          >
            <span className='icon has-text-success'>
              <i className='fas fa-map' />
            </span>{' '}
            COMPETITION HEATMAP
          </a>
          <a className='sidebar-link' onClick={() => {API.userLogOut()}}>
            <span className='icon has-text-success'>
              <i className='fas fa-arrow-circle-left' />
            </span>{' '}
            LOGOUT
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
