import Product from '../views/product/index';
import ProductDetail from '../views/product/detail';
import Category from '../views/category/index';
import Brand from '../views/brand/index';

import Login from '../views/login/index';
import Dashboard from '../views/dashboard/index';
import Order from '../views/order/index';
import Permission from '../views/permission/index';

import Layout from '../layout/main';

/**
 * 1. 若某个路由未设置 title 则不需要显示在导航菜单中
 * 2. 若某个路由设置 hidden = true 则不需要显示在导航菜单中
 */
export const routes = [
  {
    path: '/login',
    component: Login,
    exact: true,
    hidden: true
  },
  {
    path: '/dashboard',
    component: Layout,
    exact: true,
    title: '工作台',
    routes: [
      {
        path: '',
        component: Dashboard,
        exact: true,
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    title: '商品管理',
    routes: [
      {
        path: '/product',
        component: Product,
        exact: true,
        title: '商品管理',
      },
      {
        path: '/product/brand',
        component: Brand,
        exact: true,
        title: '品牌管理',
      },
      {
        path: '/product/category',
        component: Category,
        exact: true,
        title: '分类管理'
      },
      {
        path: '/product/:id',
        component: ProductDetail,
        exact: true,
        hidden: true
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    title: '订单管理',
    routes: [
      {
        path: '',
        component: Order,
        exact: true
      }
    ]
  },
  {
    path: '/permission',
    component: Layout,
    title: '权限管理',
    routes: [
      {
        path: '',
        component: Permission,
        exact: true,
      }
    ]
  }
]