import React from 'react';

class Error404 extends React.Component {
  render() {
    return (
      <div className="react-default-error-page">
        <div className="dialog">
          <div>
            <h1>The page you were looking for doesn't exist.</h1>
            <p>You may have mistyped the address or the page may have moved.</p>
          </div>
          <p>If you are the application owner check the logs for more information.</p>
        </div>
      </div>
    );
  }
}

export default Error404;
