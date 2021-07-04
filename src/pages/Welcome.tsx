import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import InfoCard from "@/components/InfoCard/InfoCard";
import {AccessPage, sendAccessInfo} from "@/services/access_data";

sendAccessInfo(null, AccessPage.PageInfo)
export default (): React.ReactNode => {

  return (
    <PageContainer>
      <InfoCard />
    </PageContainer>
  );
};
