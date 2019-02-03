import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './redux/store';


import 'bootstrap/dist/css/bootstrap.min.css';

import OrdersIndex from './Orders/Index.js';
import OrdersHistory from './Orders/History.js';


class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Router>
          <div>
            <Route path="/" exact component={ OrdersIndex } />
            <Route path="/orders-history" component={ OrdersHistory } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
