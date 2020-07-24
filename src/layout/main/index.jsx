import React, { useEffect, useRouteMatch } from 'react';
import style from './index.module.less';
// import {renderRoutes} from 'react-router-config';
import { renderRoutes } from '../../utils/react-router-config';

import Menu from '../components/menu/index';
import Navbar from '../components/navbar/index'

export default function MainLayout(props)  {
  const { route } = props;

  return (
    <div className='main-layout'>
      <div className={style.sidebar}>
        <Menu {...props} />
      </div>
      <div className={style.header}></div>
      <div className={style.main}>
        <div className={style.navbar}>
          <Navbar {...props} />
        </div>
        <div className={style.content}>
          { renderRoutes (route.routes) }
        </div>
      </div>
    </div>
  );
}
