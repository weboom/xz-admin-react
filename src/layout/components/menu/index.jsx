import React, { useState } from 'react';
import { withRouter, useHistory } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { routes } from '../../../router/index';
// import 

const { SubMenu } = Menu;

export default function LayoutMenu() {
  const [current, setCurrent] = useState('');
  const history = useHistory();

  const handleClick = (e) => {
    setCurrent(e.key);
    console.log(history)
    history.push(e.key);
  }
  return(
    <Menu onClick={handleClick} selectedKeys={[current]} mode="inline">
      <Menu.Item key="/dashboard" icon={<MailOutlined />}>
        工作台
      </Menu.Item>

      <SubMenu icon={<AppstoreOutlined />} title="商品管理">
        <Menu.Item key="/product">商品管理</Menu.Item>
        <Menu.Item key="/product/brand">品牌管理</Menu.Item>
        <Menu.Item key="/product/category">分类管理</Menu.Item>
      </SubMenu>
    
      <Menu.Item key="/order" icon={<AppstoreOutlined />}>
        订单管理
      </Menu.Item>

      <Menu.Item key="/permission" icon={<AppstoreOutlined />}>
        权限管理
      </Menu.Item>
    </Menu>
  )
}
