import React from 'react';
import {Space, Table, Tag} from "antd";

export const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

export default class CourseRow extends React.Component {

  public render() {

    const dataSource = [
      {
        key: '1',
        title: 'CS61A The Structure and Interpretation of Computer Programs',
        affiliation: 'UC Berkeley',
        tags: ['数据结构', 'python', 'OOP'],
        course_link: 'https://www-inst.eecs.berkeley.edu//~cs61a/archives.html',
        video_link: 'https://www.bilibili.com/video/BV1nJ41157p6?from=search&seid=5097790262387752593',
      },
      {
        key: '2',
        title: 'Data Structure and Algorithm',
        affiliation: 'Tsinghua University',
        tags: ['C++', '数据结构', '算法'],
        course_link: 'https://www.xuetangx.com/learn/THU08091000384/THU08091000384/5883586/article/9215515',
        video_link: 'https://www.xuetangx.com/learn/THU08091000384/THU08091000384/5883586/article/9215515',
      },
      {
        key: '3',
        title: 'CS61B Data Structures',
        affiliation: 'UC Berkeley',
        tags: ['Java', 'OOP', '数据结构', '一门课进硅谷'],
        course_link: 'https://www-inst.eecs.berkeley.edu//~cs61b/archives.html',
        video_link: 'https://www.bilibili.com/video/BV1EJ411n72e?from=search&seid=13000460787911995305',
      },
      {
        key: '4',
        title: 'CS61C Machine Structures',
        affiliation: 'UC Berkeley',
        tags: ['数电', '体系结构', '嵌入式', '操作系统'],
        course_link: 'https://www-inst.eecs.berkeley.edu//~cs61c/archives.html',
        video_link: 'https://www.bilibili.com/video/BV1fC4y147iZ?from=search&seid=17057399799068967609',
      },
    ];

    const columns = [
      {
        title: '课程名称',
        dataIndex: 'title',
        key: 'title',
      },
      {
        title: '所属单位',
        dataIndex: 'affiliation',
        key: 'affiliation',
      },
      {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags',
        render: (tags: any[]) => (
          <>
            {tags.map(tag => {
              let color = colorList[Math.floor(Math.random()*6)]
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
        title: '操作',
        dataIndex: '',
        key: 'x',
        render: (text: any, record: any) => (
          <Space size="middle">
            <a href={ record.course_link } target="_blank" >课程主页</a>
            <a href={ record.video_link } target="_blank" >视频链接</a>
          </Space>
        )
      },
    ];

    return (
        <Table dataSource={dataSource} columns={columns} />
    );
  }
}
