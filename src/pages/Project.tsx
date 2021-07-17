import React, {useEffect, useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Space, Table, Tag} from "antd";
import {AccessPage, sendAccessInfo} from "@/services/access_data";
import {SearchProject} from "@/services/project";
import {colorList} from "@/components/NavigatorRow/CourseRow";
import {fileServer, projectPrefix} from "@/pages/consts";
import {String2Time} from "@/pages/utils";

sendAccessInfo(null, AccessPage.PageProject)
export default (): React.ReactNode => {

  const [projectList, setProjectList] = useState([]);

  useEffect(() => {
    const getProjectList = async () => {
      const projectList = await SearchProject(null);
      setProjectList(projectList)
    }
    getProjectList().then(() => {
    });
  }, [])

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'key',
      style: {display: "none"},
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.key - b.key
    },
    {
      title: '标签',
      dataIndex: 'tag',
      key: 'tag',
      render: (tags: string) => (
        <>
          {tags.split(',').map(tag => {
            let color = colorList[Math.floor(Math.random() * 6)]
            return (
              <Tag color={color} key={tag}>
                {tag}
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
      render: (text: string) => String2Time(text)
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (text: any, record: any) => (
        <Space size="middle">
          {record.github_url === "" ?
            <a disabled>Github</a>
            :
            <a href={record.github_url} target="_blank">Github</a>
          }
          {
            record.md_url === "" ?
              <a disabled>文档</a>
              :
              <a href={fileServer + projectPrefix + record.md_url} target="_blank">文档</a>
          }
          {
            record.project_url === "" ?
              <a disabled>下载</a>
              :
              <a href={fileServer + projectPrefix + record.project_url} target="_blank">下载</a>
          }
        </Space>
      )
    },
  ];

  function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <PageContainer>
      <Table dataSource={projectList} columns={columns} rowKey={(record) => record.id} onChange={onChange}/>;
    </PageContainer>
  );
};
