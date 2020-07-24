import React, { useState, useEffect } from 'react';
import { withRouter, useHistory, useRouteMatch, matchPath } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { routes } from '../../../router/index';
import { matchRoutes } from '../../../utils/react-router-config'

const { SubMenu } = Menu;

export default  class LayoutMenu extends React.Component (props) {
  state = {
    current: '',
    openKeys: []
  }

  renderMenuItem = (route) => {
    return (
      <Menu.Item key={route.name} icon={<MailOutlined />}>
        { route.title }
      </Menu.Item>
    )
  }

  renderMenu = (list) => {
    return list
      .filter(route => !route.hidden)
      .map(route => {
        if (!route.routes || !route.routes.length || (route.routes.length === 1 && !route.alwaysShow)) {
          return this.renderMenuItem(route)
        } else {
          return (
            <SubMenu key={route.name} icon={<AppstoreOutlined />} title={route.title}>
              { this.renderMenu(route.routes) }
            </SubMenu>
          )
        }
      })
  }

  handleClick = (e) => {
    const findRoute = (list) => {
      let res = null;
      const find = (list) => {
        list.forEach(el => {
          if(el.name === e.key) {
            res = el;
          } else {
            el.routes && el.routes.length && find(el.routes)
          }
        })
      }
      find(list)
      return res
    }
    let currentRoute = findRoute(routes);
    history.push(currentRoute.path);
    this.setState({
      current: currentRoute.path,
      openKeys: e.keyPath
    })
  }

  componentDidMount() {
    const matchedRoutes = matchRoutes(routes, history.location.pathname);
    const keyPath = matchedRoutes.map(el => el.route.name)
    // setCurrent(matchedRoutes[matchedRoutes.length - 1].route.name);
    // setOpenKeys(keyPath)
    this.setState({
      current: matchedRoutes[matchedRoutes.length - 1].route.name,
      openKeys: keyPath
    })
  }

  render() {
    return (
      <Menu
        mode="inline"
        onClick={this.handleClick}
        selectedKeys={[this.current]}
        defaultOpenKeys={ this.thisopenKeys }
      >
        { renderMenu(routes) }
      </Menu>
    )
  }
}
