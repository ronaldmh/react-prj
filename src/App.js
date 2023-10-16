import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Carto from './components/Carto/Carto';
import './App.css';
import { getPlacesData } from './api';


function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  // use efect at the start
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);
  

  // use effect to update map
  useEffect(() => {
    getPlacesData()
      .then((data) => {        
        setPlaces(data);
      })
  }, [coordinates, bounds]);


  return (
    <div className="App">

      <CssBaseline></CssBaseline>
      <Header></Header>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List></List>
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Carto
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={Coordinates}>
          </Carto>
        </Grid>        
      </Grid>     
      
    </div>
  );
}

export default App;
