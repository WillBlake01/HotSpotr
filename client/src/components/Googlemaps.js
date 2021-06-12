import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export const Googlemaps = ({mapClass, center, zoom, onChildMouseEnter, onChildMouseLeave, placesResults}) => {

  return (
    // Important! Always set the container height explicitly
    <div className={mapClass} style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_API_KEY,
          language: 'en'
        }}
        defaultCenter={center}
        defaultZoom={zoom}
        onChildMouseEnter={onChildMouseEnter}
        onChildMouseLeave={onChildMouseLeave}
        heatmapLibrary={true}
        heatmap={{
          positions: placesResults[0],
          options: {
            radius: 20,
            opacity: 0.7,
            gradient: [
              'rgba(0, 255, 255, 0)',
              'rgba(0, 255, 255, 1)',
              'rgba(0, 191, 255, 1)',
              'rgba(0, 127, 255, 1)',
              'rgba(0, 63, 255, 1)',
              'rgba(0, 0, 255, 1)',
              'rgba(0, 0, 223, 1)',
              'rgba(0, 0, 191, 1)',
              'rgba(0, 0, 159, 1)',
              'rgba(0, 0, 127, 1)',
              'rgba(63, 0, 91, 1)',
              'rgba(127, 0, 63, 1)',
              'rgba(191, 0, 31, 1)',
              'rgba(255, 0, 0, 1)'
            ]
          }
        }}
      >
        <AnyReactComponent
          lat={30.2672}
          lng={-97.7431}
          text={'Austin Texas'}
        />
      </GoogleMapReact>
    </div>
  );
}

Googlemaps.defaultProps = {
  center: {
    lat: 30.27,
    lng: -97.74
  },
  zoom: 11
};
