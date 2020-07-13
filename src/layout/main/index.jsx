import React, { useEffect } from 'react';
import style from './index.module.less';
import Menu from '../components/menu/index';
import {renderRoutes} from 'react-router-config';

const mainLayout = (props) => {
  const { route } = props;
  console.log(route)
  return (
    <div className='main-layout'>
      <div className={style.sidebar}>
        <Menu history={props.history}/>
      </div>
      <div className={style.header}></div>
      <div className={style.main}>
        <div className={style.navbar}></div>
        <div className={style.content}>
          { renderRoutes (route.routes) }
        </div>
      </div>
    </div>
  );
}

export default mainLayout;
