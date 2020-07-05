import React, { useEffect } from 'react';
import style from './index.module.less';
import Menu from '../components/menu/index';

const mainLayout = (props) => {
  console.log(props)
  // useEffect(() => {
  //   console.log(props)
  // })
  return (
    <div className='main-layout'>
      <div className={style.sidebar}>
        <Menu history={props.history}/>
      </div>
      <div className={style.main}>
        <div className={style.header}></div>
        <div className={style.navbar}></div>
        <div className={style.content}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default mainLayout;
