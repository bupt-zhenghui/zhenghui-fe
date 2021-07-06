import React, {useEffect, useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Space, Table, Tag} from "antd";
import {getMonthlyReport} from "@/services/leetcode";
import {colorList} from "@/components/NavigatorRow/CourseRow";
import {AccessPage, sendAccessInfo} from "@/services/access_data";
import {fileServer, reportPrefix} from "@/pages/consts";

const getAllReport = getMonthlyReport;
sendAccessInfo(null, AccessPage.PageReport)

export default (): React.ReactNode => {

  const [reportList, setReportList] = useState([]);

  useEffect(() => {
    const getReportList = async () => {
      const reportList = await getAllReport(null);
      setReportList(reportList)
    }
    getReportList();
    console.log("report list: ", reportList)
  }, [])

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
            let color = colorList[Math.floor(Math.random() * 6)]
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
      title: '最后修改时间',
      dataIndex: 'update_time',
      key: 'update_time',
      defaultSortOrder: 'ascend',
      sorter: (a: any, b: any) => {
        let t1 = new Date(a.update_time).getTime()
        let t2 = new Date(b.update_time).getTime()
        return t2 - t1
      },
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a href={fileServer + reportPrefix + record.url}>预览</a>
          <a href={fileServer + reportPrefix + record.url}>下载</a>
        </Space>
      )
    },
  ];

  return (
    <PageContainer>
      <Table dataSource={reportList} columns={columns}/>;
    </PageContainer>
  );
};
