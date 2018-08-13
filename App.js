import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Home from './src/home';
import configureStore from './src/redux/store/configure-store';

const store = configureStore();
export default class reduxApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}


