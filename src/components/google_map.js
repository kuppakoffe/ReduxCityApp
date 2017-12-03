import React, { Component } from 'react';
const API = 'AIzaSyBb9MKVMF1lYhUYA8LuZo74b9iq_lMh0vY';
class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // this.refs.map
    return <div ref="map" />;
  }
}

export default GoogleMap;
