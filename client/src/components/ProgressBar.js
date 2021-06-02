import React from 'react';
import { LinearProgress } from '@material-ui/core';

const ProgressBar = ({completed}) => (
  <LinearProgress variant='determinate' value={completed} />
)

export default ProgressBar;
