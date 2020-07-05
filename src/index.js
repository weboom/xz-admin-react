import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './assets/style/common.less'
import './index.css';
import App from './App';

import MainLayout from './layout/main/index';

import dashboardView from './views/dashboard/index';
import ProductView from './views/product/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/"
          component={() => {
            return (
              <MainLayout history={BrowserRouter}>
                <Route exact path="/" component={dashboardView}/>
                <Route exact path="/product" component={ProductView}/>
              </MainLayout>
            )
          }}
        />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
