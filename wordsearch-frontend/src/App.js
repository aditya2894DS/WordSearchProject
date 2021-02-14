import React, { Component } from 'react';
import { Provider } from 'react-redux'
import appStore from './redux_components/store/appStore';

import './scss/base_styles.scss';
import './scss/article_styles.scss';

import Routes from './routes';


class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <Routes /></Provider>)}}
        

export default App;
