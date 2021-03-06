import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import VisualCard1 from "@/components/VisualCard/VisualCard1";
import VisualCard2 from "@/components/VisualCard/VisualCard2";
import {AccessPage, sendAccessInfo} from "@/services/access_data";

sendAccessInfo(null, AccessPage.PageStatistics)
export default (): React.ReactNode => {
  return (
    <PageHeaderWrapper>
      <VisualCard1 />
      <VisualCard2 />
    </PageHeaderWrapper>
  );
};
