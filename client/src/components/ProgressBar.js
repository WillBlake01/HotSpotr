import React from 'react';
import { LinearProgress } from '@material-ui/core';

export const ProgressBar = ({completed}) => (
  <LinearProgress variant='determinate' value={completed} />
)
