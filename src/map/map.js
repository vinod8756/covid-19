import React, { Component, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import classes from './map.module.css'


mapboxgl.accessToken = 'pk.eyJ1Ijoidmlub2RzZW5hcGF0aGkiLCJhIjoiY2toMGt0MGN3MDV0ajJ4c2lpY2djdmY4NCJ9.6rndTOn_2sOGOj4GafPOdg';
let map = null ;
class Map extends Component {
   state = {
    long  : 3,
    lat : 2,
    zoom : 2 
   }

        
      componentDidMount() {
           map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.long, this.state.lat],
            zoom: this.state.zoom
          });
          map.on('move', () => {
            this.setState({
            lng: map.getCenter().lng.toFixed(4),
            lat: map.getCenter().lat.toFixed(4),
            zoom: map.getZoom().toFixed(2)
            });
            });

        map.flyTo({
          center : [
              this.props.long , this.props.lat
          ]
        })
              
      }
    render() {
      
      return (
        <div> 
         <div ref={el =>  this.mapContainer = el} className = {classes.mapContainer}  > </div>
         
        </div> 
               )
    }


 }
export default Map;