import React, {useEffect, useState} from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Space} from "antd";
import {getLeetcodeList} from "@/services/leetcode";
import ProTable from '@ant-design/pro-table';
import {AccessPage, sendAccessInfo} from "@/services/access_data";
import LeetcodeCard from "@/components/VisualCard/LeetcodeCard";

const getAllLeetcode = getLeetcodeList;
sendAccessInfo(null, AccessPage.PageLeetcode)

export default (): React.ReactNode => {

  const [leetcodeList, setLeetcodeList] = useState([]);
  const difficultyList = ['异常', '简单', '中等', '困难'];
  const difficultyColor = ['black', '#00AF9B', '#FFB800', '#FF2D55']
  const envList = {
    "ac": {text: '已通过', status: 'Success'},
    "notac": {text: '未通过', status: 'Error'},
    "": {text: '未做', status: 'Default'},
  };

  useEffect(() => {
    const getLeetcodeList = async () => {
      const leetcodeList = await getAllLeetcode(null);
      setLeetcodeList(leetcodeList)
    }
    getLeetcodeList();
    // console.log("leetcode list: ", leetcodeList)
  }, [])

  const columns = [
    {
      title: '题目编号',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '描述',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: '难度',
      dataIndex: 'difficulty',
      key: 'difficulty',
      render: (text: any, record: any) => (
        <div style={{color: difficultyColor[record.difficulty]}}>
          {difficultyList[record.difficulty]}
        </div>
      ),
    },
    {
      title: '状态',
      dataIndex: 'status',
      valueEnum: envList,
      key: 'status',
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (text: any, record: any) => (
        <Space size="middle">
          <a href={`http://${record.url}`}>笔记</a>
          <a>下载</a>
        </Space>
      )
    },
  ];

  return (
    <PageContainer>
      <LeetcodeCard/>
      <ProTable dataSource={leetcodeList} columns={columns}/>;
    </PageContainer>
  );
};
