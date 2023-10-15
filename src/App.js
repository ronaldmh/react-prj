import React, { useState, useEffect }  from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Carto from './components/Carto/Carto';
import './App.css';


function App() {
  return (
    <div className="App">

      <CssBaseline></CssBaseline>
      <Header></Header>
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List></List>
        </Grid>
        <Grid item xs={12} md={8}>
          <Carto></Carto>
        </Grid>        
      </Grid>     
      
    </div>
  );
}

export default App;
