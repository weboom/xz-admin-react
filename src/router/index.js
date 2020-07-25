import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import Product from '../views/product/index';
import ProductDetail from '../views/product/detail';
import Category from '../views/category/index';
import Brand from '../views/brand/index';

import Login from '../views/login/index';
import Dashboard from '../views/dashboard/index';
import Order from '../views/order/index';
import Permission from '../views/permission/index';
import PermissionAdmin from '../views/permission/admin/index';

import Me from '../views/me/index';

import Layout from '../layout/main';

/**
 * 1. 若某个路由未设置 title 则不需要显示在导航菜单中
 * 2. 若某个路由设置 hidden = true 则不需要显示在导航菜单中
 * 3. requireAuth = true 表示该路由需要登录权限
 * 4. roles: ['admin'] 表示该路由需要管理员访问访问, 当前前提是先登录
 */
export const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    hidden: true
  },
  {
    path: '/me',
    component: Me,
    exact: true,
    hidden: true,
    requireAuth: true
  },
  {
    path: '/dashboard',
    exact: true,
    title: '工作台',
    name: "DashboardLayout",
    isLayout: true,
    render: (props) => {
      return (
        <Layout {...props}>
          <Dashboard />
        </Layout>
      )
    }
  },
  {
    path: '/product',
    component: Layout,
    title: '商品管理',
    name: 'ProductLayout',
    isLayout: true, 
    routes: [
      {
        path: '/product/index',
        exact: true,
        component: Product,
        title: '商品管理',
        name: 'ProductList',
      },
      {
        path: '/product/brand',
        exact: true,
        component: Brand,
        title: '品牌管理',
        name: 'ProductBrand',
      },
      {
        path: '/product/category',
        component: Category,
        exact: true,
        title: '分类管理',
        name: 'ProductCategory',
      },
      {
        path: '/product/:id',
        component: ProductDetail,
        exact: true,
        hidden: true,
        title: '商品详情',
        name: 'ProductDetail',
        activeMenu: 'ProductList',
        prevNav: "ProductList"
      }
    ]
  },
  {
    path: '/order',
    title: '订单管理',
    name: "OrderLayout",
    isLayout: true, 
    render: (props) => {
      return (
        <Layout {...props}>
          <Dashboard />
        </Layout>
      )
    }
  },
  {
    path: '/permission',
    component: Layout,
    title: '权限管理',
    roles: ['admin'],
    name: "PermissionLayout",
    alwaysShow: true,
    redirect: '/permission/admin',
    isLayout: true,
    routes: [
      {
        path: '/permission/admin',
        component: PermissionAdmin,
        exact: true,
        name: 'PermissionAdmin',
        title: '登录权限'
      }
    ]
  }
]