import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import './assets/style/common.less'
import './index.css';

// import App from './App';
// import MainLayout from './layout/main/index';
// import dashboardView from './views/dashboard/index';
// import Product from './views/product/index';
// import ProductDetail from './views/product/detail'

import { routes } from './router/index';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      { renderRoutes(routes) }
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
