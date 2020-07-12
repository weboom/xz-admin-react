import React, { useEffect, useState } from 'react';
import style from './detail.module.less';
import * as api from '../../apis/index';
import { Spin } from 'antd';

function ProductDetail(props) {
  const [detailInfo, setDetailInfo] = useState(null);
  const [initLoading, setInitLoading] = useState(true);

  useEffect(() => {
    api.getProductDetail(props.match.params.id).then(res => {
      if (res && res.success) {
        setDetailInfo(res.data)
      }
      setInitLoading(false)
    })
  }, [props.match.params.id])

  if (initLoading) {
    return (
      <div className={style['full-loading']}>
        <Spin></Spin>
      </div>
    )
  }

    return (
      <div className={style['full-loading']}>
        <div></div>
        {JSON.stringify(detailInfo)}
      </div>
    )
}

export default ProductDetail