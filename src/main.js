import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat';
import Geohash from 'latlon-geohash'

document.addEventListener('DOMContentLoaded', function() {
  navigator.geolocation.watchPosition(function(pos){
    let posprops = {
      lat: pos.coords.latitude,
      lon: pos.coords.longitude,
      hash: Geohash.encode(pos.coords.latitude, pos.coords.longitude, 6)
    }

    ReactDOM.render(
      <Chat pos={posprops}/>,
      document.getElementById('mount')
    );
  });
});
