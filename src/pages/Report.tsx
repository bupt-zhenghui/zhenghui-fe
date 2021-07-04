import React, {useEffect, useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Space, Table, Tag} from "antd";
import {getMonthlyReport} from "@/services/leetcode";
import {colorList} from "@/components/NavigatorRow/CourseRow";
import {AccessPage, sendAccessInfo} from "@/services/access_data";

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
        </>
      ),
    },
    {
      title: '最后修改时间',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a href={`http://123.57.66.63:8001/monthly_report/${record.url}`}>预览</a>
          <a>下载</a>
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
