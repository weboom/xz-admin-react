import Product from '../views/product/index';
import ProductDetail from '../views/product/detail';
import Dashboard from '../views/dashboard/index';
import Order from '../views/order/index';

import Layout from '../layout/main';

export const routes = [
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/dashboard',
        component: Dashboard,
        exact: true
      },
      {
        path: '/product',
        component: Product,
        exact: true
      },
      {
        path: '/product/:id',
        component: ProductDetail,
        exact: true
      },
      {
        path: 'order',
        component: Order,
        exact: true
      }
    ]
  }
]