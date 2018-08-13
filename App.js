import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './src/home';
import { store } from './src/redux';

export default class reduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}


