import React from 'react';
import { LinearProgress } from '@material-ui/core';

export default class ProgressBar extends React.Component {
  render() {
    return (
      <LinearProgress variant='determinate' value={this.props.completed} />
    );
  }
}
