import React from 'react';
import {Space, Table, Tag} from "antd";

export const colorList = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

export default class CourseRow extends React.Component {

  public render() {

    const dataSource = [
      {
        key: '1',
        title: 'Data Structure and Algorithm',
        affiliation: 'Tsinghua University',
        tags: ['C++', 'Data Structure', 'Algorithm'],
        course_link: 'https://www.xuetangx.com/learn/THU08091000384/THU08091000384/5883586/article/9215515',
        video_link: 'https://www.xuetangx.com/learn/THU08091000384/THU08091000384/5883586/article/9215515',
      },
      {
        key: '2',
        title: 'CS61A SICP',
        affiliation: 'UC Berkeley',
        tags: ['DS', 'Python', 'OOP'],
        course_link: 'https://www-inst.eecs.berkeley.edu//~cs61a/archives.html',
        video_link: 'https://www.bilibili.com/video/BV1nJ41157p6?from=search&seid=5097790262387752593',
      },
      {
        key: '3',
        title: 'CS61B Data Structures',
        affiliation: 'UC Berkeley',
        tags: ['Java', 'OOP', 'DS'],
        course_link: 'https://www-inst.eecs.berkeley.edu//~cs61b/archives.html',
        video_link: 'https://www.bilibili.com/video/BV1EJ411n72e?from=search&seid=13000460787911995305',
      },
      {
        key: '4',
        title: 'CS61C Machine Structures',
        affiliation: 'UC Berkeley',
        tags: ['Hardware', 'Architecture', 'OS'],
        course_link: 'https://www-inst.eecs.berkeley.edu//~cs61c/archives.html',
        video_link: 'https://www.bilibili.com/video/BV1fC4y147iZ?from=search&seid=17057399799068967609',
      },
      {
        key: '5',
        title: 'CS:APP',
        affiliation: 'Carnegie Mellon University',
        tags: ['C', 'Computer System', 'OS'],
        course_link: 'https://www.cs.cmu.edu/~213/',
        video_link: 'https://www.bilibili.com/video/BV1iW411d7hd?from=search&seid=18057712269057339246&spm_id_from=333.337.0.0',
      },
      {
        key: '6',
        title: '6.S081 (6.828)',
        affiliation: 'Massachusetts Institute of Technology',
        tags: ['C', 'OS'],
        course_link: 'https://www.bilibili.com/video/BV19k4y1C7kA?from=search&seid=7373883336650495786&spm_id_from=333.337.0.0',
        video_link: 'https://www.bilibili.com/video/BV19k4y1C7kA?from=search&seid=7373883336650495786&spm_id_from=333.337.0.0',
      },
      {
        key: '7',
        title: '6.824',
        affiliation: 'Massachusetts Institute of Technology',
        tags: ['Distributed System'],
        course_link: 'https://www.bilibili.com/video/BV1R7411t71W?from=search&seid=2395721526941067788&spm_id_from=333.337.0.0',
        video_link: 'https://www.bilibili.com/video/BV1R7411t71W?from=search&seid=2395721526941067788&spm_id_from=333.337.0.0',
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
                  {tag}
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
