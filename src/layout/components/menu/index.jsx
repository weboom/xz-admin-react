import React from 'react';
import { withRouter } from "react-router-dom";
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class LayoutMenu extends React.Component {
  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({ current: e.key });
    this.props.history.push({
      pathname: e.key
    })
  };

  swicthMenu = (routePath) => {
    this.props.history.push({
      pathname: routePath
    })
  }

  render() {
    const { current } = this.state;
    return (
      <Menu onClick={this.handleClick} selectedKeys={[current]} mode="inline">
        <Menu.Item key="dashboard" icon={<MailOutlined />}>
          工作台
        </Menu.Item>
        <Menu.Item key="user" icon={<AppstoreOutlined />}>
          用户管理
        </Menu.Item>
        <Menu.Item key="product" icon={<AppstoreOutlined />}>
          商品管理
        </Menu.Item>
        <Menu.Item key="order" icon={<AppstoreOutlined />}>
          订单管理
        </Menu.Item>
        <Menu.Item key="shipping" icon={<AppstoreOutlined />}>
          地址管理
        </Menu.Item>
        <Menu.Item key="permisson" icon={<AppstoreOutlined />}>
          权限管理
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="商品管理">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(LayoutMenu)