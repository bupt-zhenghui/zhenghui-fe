import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {Space, Table, Tag} from "antd";

export default (): React.ReactNode => {

  const dataSource = [
    {
      key: '1',
      title: '2021六月月报',
      tags: ['test', 'training'],
      create_time: '2021-06-15 06:21:21'
    },
    {
      key: '2',
      title: '2021五月月报',
      tags: ['training', 'test'],
      create_time: '2021-05-15 06:21:21'
    },
    {
      key: '3',
      title: '2021四月月报',
      tags: ['test', 'training'],
      create_time: '2021-05-18 06:21:21'
    },
  ];

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      sorter: (a: any, b: any) => a.key - b.key
    },
    {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags: any[]) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
      defaultSortOrder: 'descend',
      sorter: (a: any, b: any) => {
        let t1 = new Date(a.create_time).getTime()
        let t2 = new Date(b.create_time).getTime()
        return t2 - t1
      },
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="middle">
          <a>源码</a>
          <a>文档</a>
        </Space>
      )
    },
  ];

  function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <PageContainer>
      <Table dataSource={dataSource} columns={columns} onChange={ onChange }/>;
    </PageContainer>
  );
};
