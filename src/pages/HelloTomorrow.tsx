import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import TomorrowTop from "@/components/Tomorrow/TomorrowTop";
import TomorrowMid from "@/components/Tomorrow/TomorrowMid";
import TomorrowBottom from "@/components/Tomorrow/TomorrowBottom";


export default class extends React.Component {

  render(): React.ReactNode {

    return (
      <PageContainer>
        <TomorrowTop />
        <TomorrowMid />
        <TomorrowBottom />
      </PageContainer>
    );
  }
};
