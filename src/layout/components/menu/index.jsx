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
    console.log(e)
    this.props.history.push({
      pathname: e.key
    })
  };

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

        <SubMenu icon={<AppstoreOutlined />} title="商品管理">
          <Menu.Item key="product">商品管理</Menu.Item>
          <Menu.Item key="categery">分类管理</Menu.Item>
        </SubMenu>
      
        <Menu.Item key="order" icon={<AppstoreOutlined />}>
          订单管理
        </Menu.Item>
        <Menu.Item key="shipping" icon={<AppstoreOutlined />}>
          地址管理
        </Menu.Item>

        <Menu.Item key="permisson" icon={<AppstoreOutlined />}>
          权限管理
        </Menu.Item>
      </Menu>
    );
  }
}

export default withRouter(LayoutMenu)