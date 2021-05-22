import React from 'react';

class Error500 extends React.Component {
  render() {
    return (
      <div className="rails-default-error-page">
        <div className="dialog">
          <div>
            <h1>We're sorry, but something went wrong.</h1>
          </div>
          <p>If you are the application owner check the logs for more information.</p>
        </div>
      </div>
    );
  }
}

export default Error500;
