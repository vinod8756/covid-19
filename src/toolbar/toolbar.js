import React, { useState } from 'react';
import classes from './toolbar.module.css'
import AppBar from '@material-ui/core/AppBar';
import { MenuItem, TextField, Toolbar } from '@material-ui/core';
import Map from '../map/map';


const Appbar = (props) => {

const [value , setvalue] = useState("")
const [ lat , setlat] = useState(2)
const [ long , setlong] = useState(3)
    

    const handelchange = (event) => {
      setvalue(event.target.value)
      setlat(event.target.value.countryInfo.lat)
      setlong(event.target.value.countryInfo.long)
    }
  return (
    <div className={classes.root}>
      
      <AppBar position="static" className = {classes.Appbar}>
        <Toolbar>
        <TextField
          id="select"
          select
          label="Select your country"
          value = {value}
          onChange = {handelchange}
          className = {classes.dropdown}
          variant = "outlined"
          
        >
        {props.data.map((data) => (
        <MenuItem value = {data} key = {data.country} >
         <img src = {data.countryInfo.flag} alt = "error" className = {classes.flag} />
          {data.country}      
        </MenuItem>
        )) 
        }  
        </TextField>
        </Toolbar>
      </AppBar>
      <Map  lat = {lat} long = {long} /> 
    </div>
  );
}

export default Appbar;