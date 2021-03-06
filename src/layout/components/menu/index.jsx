import React, { useState, useEffect } from 'react';
import { withRouter, useHistory, useRouteMatch, matchPath } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { routes } from '../../../router/index';
import { matchRoutes } from '../../../utils/react-router-config'

const { SubMenu } = Menu;

export default  class LayoutMenu extends React.Component {
  state = {
    current: [],
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
    this.props.history.push(currentRoute.path);
    this.setState({
      current: e.key,
      openKeys: e.keyPath
    })
  }

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    this.setState({
      openKeys: [latestOpenKey]
    })
  }

  componentWillMount() {
    const matchedRoutes = matchRoutes(routes, this.props.history.location.pathname);
    const keyPath = matchedRoutes.reduce((acc, el) => {
      acc.push(el.route.activeMenu || el.route.name)
      return acc
    }, [])
    this.setState(() => ({
      current: keyPath,
      openKeys: keyPath
    }))
  }

  render() {
    console.log(this.state.current)
    console.log(this.state.openKeys)
    return (
      <Menu
        mode="inline"
        onClick={this.handleClick}
        selectedKeys={this.state.current}
        openKeys={ this.state.openKeys }
        onOpenChange={this.onOpenChange}
      >
        { this.renderMenu(routes) }
      </Menu>
    )
  }
}
