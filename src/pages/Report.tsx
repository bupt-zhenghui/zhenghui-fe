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
  ];

  const columns = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
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
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => (
        <Space size="middle">
          <a>预览</a>
          <a>下载</a>
        </Space>
      )
    },
  ];

  return (
    <PageContainer>
      <Table dataSource={dataSource} columns={columns} />;
    </PageContainer>
  );
};
