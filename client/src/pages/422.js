import React from 'react';

export const Error422 = () => (
  <div className="default-error-page">
    <div className="dialog">
      <div>
        <h1>The change you wanted was rejected.</h1>
        <p>Maybe you tried to change something you didn't have access to.</p>
      </div>
      <p>If you are the application owner check the logs for more information.</p>
    </div>
  </div>
)
