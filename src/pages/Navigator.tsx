import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import {Alert, Card} from "antd";
import NavigatorRow from "@/components/NavigatorRow";
// import CustomAlert from "@/components/NavigatorRow/CustomAlert"

import CourseRow from "@/components/NavigatorRow/CourseRow";
import {AccessPage, sendAccessInfo} from "@/services/access_data";

sendAccessInfo(null, AccessPage.PageNavigation)
export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Alert
        message={
          "路漫漫其修远兮，吾将上下而求索"
        }
        type="info"
        // showIcon
        style={{marginBottom: 12}}
        action={
          <a href="http://123.57.66.63:8001/html/2022-06.html" target="_blank">
            2022年六月月报
          </a>
        }
      />
      {/*<Card title="3月OKR" extra={<a href="http://123.57.66.63:8001/html/2022-03.html">3月月报</a>} style={{marginBottom: 20}}>*/}
      {/*  <CustomAlert text="Leetcode daily question & weekly competition" />*/}
      {/*  <CustomAlert text="图像和谐化3篇论文阅读和复现" />*/}
      {/*</Card>*/}
      <Card style={{marginBottom: 20}}>
        <NavigatorRow id={0} title="谷歌搜索" src="/icons/google.png" href="https://www.google.com.hk/"/>
        <NavigatorRow id={1} title="百度搜索" src="/icons/baidu.png" href="https://www.baidu.com"/>
        <NavigatorRow id={2} title="谷歌学术" src="/icons/google.png" href="https://scholar.google.com/"/>
        <NavigatorRow id={3} title="Bilibili搜索" src="/icons/bili.png" href="https://www.bilibili.com"/>
        <NavigatorRow id={4} title="Youtube" src="/icons/youtube.svg" href="https://www.youtube.com"/>
        <NavigatorRow id={5} title="内网搜索" src="/icons/bytedance.png" href="https://bytedance.net/"/>
        <NavigatorRow id={6} title="北邮人bt搜索" src="/icons/bupt.png" href="https://bt.byr.cn/torrents.php"/>
        <NavigatorRow id={7} title="豆瓣搜索" src="/icons/douban.png" href="https://www.douban.com/"/>
        <NavigatorRow id={8} title="Leetcode搜索" src="/icons/leetcode.svg"
                      href="https://leetcode-cn.com/problemset/all/"/>
      </Card>
      <Card title="必看的CS神课">
        <CourseRow />
      </Card>
    </PageContainer>
  );
}
