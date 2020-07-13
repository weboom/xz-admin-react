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

// import Ren

console.log(renderRoutes(routes))

ReactDOM.render(
  <React.StrictMode>
    <Router>
    { renderRoutes(routes)}
      {/* <Switch>
        <Route path="/"
          component={() => {
            return (
              <MainLayout history={BrowserRouter}>
                <Route exact path="/" component={dashboardView}/>
                <Route exact path="/product" component={Product}/>
                <Route exact path="/product/:id" component={ProductDetail} />
              </MainLayout>
            )
          }}
        />
      </Switch> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
