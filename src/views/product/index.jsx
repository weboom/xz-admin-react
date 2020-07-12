import React, { Fragment, useEffect, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Table, Tag, Space, Form, Input, Button, DatePicker } from 'antd';
import * as api from '../../apis/index';
import style from './index.module.less';
import { NavLink } from 'react-router-dom';

const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log('Selected Time: ', value);
  console.log('Formatted Selected Time: ', dateString);
}

function onOk(value) {
  console.log('onOk: ', value);
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    render: (text, record) => {
      return (
      <NavLink to={`/product/${record.id}`}>{text}</NavLink>
      )
    }
  },
  {
    title: '描述',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    render: (text, record) => (
      <Space size="middle">
        { text / 100 }
      </Space>
    )
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button size="small">删除</Button>
      </Space>
    ),
  },
]

const Product = () => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('inline');
  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;
  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    api.getProductList().then(res => {
      if (res && res.success) {
        setProductList(() => {
          return res.data.list
        })
      }
    })
  }, [])

  return (
    <div>
      <div className={[style['table-header'], 'mb-20'].join(' ')}>
        <Form
          className={style['table-form']}
          {...formItemLayout}
          layout='inline'
          form={form}
          onValuesChange={onFormLayoutChange}
        >
          <Form.Item label="">
            <Input placeholder="输入商品名称" suffix={<SearchOutlined />} />
          </Form.Item>
          <Form.Item label="创建时间">
            <RangePicker
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
            />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary">搜索</Button>
          </Form.Item>
        </Form>
        <Button type="primary">创建商品</Button>
      </div>
      <Table columns={columns} dataSource={productList} size="middle"/>
    </div>
  )
}

export default Product