import React, { useState } from 'react';
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import useStyles from './styles';
import Details from '../Details/Details';

const List = ({ places }) => {
  const classes = useStyles();
  //Create uses state hook
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');


  return(
    <div className={classes.container}>            
      <Typography variant="h4" className={classes.title}> Let's Discover the World!</Typography>
      <br></br>
      <Typography variant="h6" className={classes.title}> Select your Prefered Activity</Typography>
            
      <FormControl className={classes.formControl}>
        <InputLabel>Type </InputLabel>
        <Select value = {rating} onChange = {(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>

      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value = {type} onChange = {(e) => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <Details place={place}/>
          </Grid>
        ))}
      </Grid>

    </div>
  );
}

export default List;


  