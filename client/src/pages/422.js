import React from 'react';

class Error422 extends React.Component {
  render() {
    return (
      <div className="rails-default-error-page">
        <div className="dialog">
          <div>
            <h1>The change you wanted was rejected.</h1>
            <p>Maybe you tried to change something you didn't have access to.</p>
          </div>
          <p>If you are the application owner check the logs for more information.</p>
        </div>
      </div>
    );
  }
}

export default Error422;
