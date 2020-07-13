import React, { useState, useEffect } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { routes } from '../../../router/index';
// import 

const { SubMenu } = Menu;

export default function LayoutMenu() {
  const [current, setCurrent] = useState('');
  const history = useHistory();

  const renderMenuItem = (route) => {
    return (
      <Menu.Item key={route.path} icon={<MailOutlined />}>
        { route.title }
      </Menu.Item>
    )
  }

  const renderMenu = (list) => {
    return list
      .filter(route => !route.hidden)
      .map(route => {
        if (!route.routes || !route.routes.length || (route.routes.length === 1)) {
          return renderMenuItem(route)
        } else {
          return (
            <SubMenu icon={<AppstoreOutlined />} title={route.title}>
              { renderMenu(route.routes) }
            </SubMenu>
          )
        }
      })
  }

  const handleClick = (e) => {
    setCurrent(e.key);
    history.push(e.key);
  }

  useEffect(() => {
    setCurrent(history.location.pathname);
  })

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
      { renderMenu(routes) }
    </Menu>
  )
}
