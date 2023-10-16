import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

const Carto = ({ setCoordinates, setBounds, coordinates }) => {

  const mobileDevice = useMediaQuery('(min-width:600px)');
  const classes = useStyles();
  
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={9}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e => { 
          setCoordinates ({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        })}
        onChildClick={''}
      >
      </GoogleMapReact>
    </div>
  );
}
export default Carto;


  