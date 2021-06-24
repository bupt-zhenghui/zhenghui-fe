import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import {Alert, Card} from "antd";
import NavigatorRow from "@/components/NavigatorRow";
import CourseRow from "@/components/NavigatorRow/CourseRow";

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Alert message="主页正在重构中，预计会在9月正式上线，敬请期待～！" type="info" showIcon closable style={{marginBottom:12}}/>
      <Card style={{marginBottom:20}}>
        <NavigatorRow id={0} title="谷歌搜索" src="/icons/google.png" href="https://www.google.com.hk/"/>
        <NavigatorRow id={1} title="百度搜索" src="/icons/baidu.png" href="https://www.baidu.com" />
        <NavigatorRow id={2} title="谷歌学术" src="/icons/google.png" href="https://scholar.google.com/" />
        <NavigatorRow id={3} title="Bilibili搜索" src="/icons/bili.png" href="https://www.bilibili.com" />
        <NavigatorRow id={4} title="Youtube" src="/icons/youtube.svg" href="https://www.youtube.com" />
        <NavigatorRow id={5} title="内网搜索" src="/icons/bytedance.png" href="https://bytedance.net/" />
        <NavigatorRow id={6} title="北邮人bt搜索" src="/icons/bupt.png" href="https://bt.byr.cn/torrents.php" />
        <NavigatorRow id={7} title="豆瓣搜索" src="/icons/douban.png" href="https://www.douban.com/" />
        <NavigatorRow id={8} title="Leetcode搜索" src="/icons/leetcode.svg" href="https://leetcode-cn.com/problemset/all/" />
      </Card>
      <Card title="必看的CS神课">
        <CourseRow />
      </Card>
    </PageContainer>
  );
};
