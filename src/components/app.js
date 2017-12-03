import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />

        <WeatherList />
      </div>
    );
  }
}
