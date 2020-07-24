import React from 'react'
import {useRouteMatch, useLocation, matchPath, Link} from "react-router-dom";
import {matchRoutes} from '../../../utils/react-router-config'
import {routes} from '../../../router/index';
import { Breadcrumb } from 'antd';

export default function Navbar(props) {
  const matchedRoutes = matchRoutes(routes, useLocation().pathname)

  return (
    <Breadcrumb>
      {matchedRoutes.map(route => {
        return (
          <Breadcrumb.Item key={route.route.name}>
            <Link to={route.route.redirect || route.match.url}>
              <span>{route.route.title}</span>
            </Link>
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}