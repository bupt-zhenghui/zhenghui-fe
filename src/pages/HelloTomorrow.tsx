import React from 'react';
import {PageContainer} from '@ant-design/pro-layout';
import TomorrowTop from "@/components/Tomorrow/TomorrowTop";


export default class extends React.Component {
  render(): React.ReactNode {
    return (
      <PageContainer>
        <TomorrowTop />
      </PageContainer>
    );
  }
};
