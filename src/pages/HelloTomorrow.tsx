import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import TomorrowTop from "@/components/Tomorrow/TomorrowTop";
import TomorrowMid from "@/components/Tomorrow/TomorrowMid";
import TomorrowBottom from "@/components/Tomorrow/TomorrowBottom";
import {Alert} from "antd";
import {AccessPage, sendAccessInfo} from "@/services/access_data";

sendAccessInfo(null, AccessPage.PageTomorrow)
export default class extends React.Component {

  render(): React.ReactNode {
    return (
      <PageContainer>
        <Alert message="北邮校训：厚德 博学 敬业 乐群" type="info" showIcon closable style={{marginBottom:12}}/>
        <Alert message="毕业在即，向所有在我的本科阶段帮助过我的朋友说声感谢，谢谢大家" type="info" showIcon closable style={{marginBottom:12}}/>
        <TomorrowTop />
        <TomorrowMid />
        <TomorrowBottom />
      </PageContainer>
    );
  }
};
