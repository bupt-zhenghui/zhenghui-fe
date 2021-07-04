import React, {useState} from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import VisualCard1 from "@/components/VisualCard/VisualCard1";
import VisualCard2 from "@/components/VisualCard/VisualCard2";
import {AccessPage, sendAccessInfo} from "@/services/access_data";
import {Card, Input} from "antd";
import VisualCard3 from "@/components/VisualCard/VisualCard3";

sendAccessInfo(null, AccessPage.PageStatistics)

let reactNode = (): React.ReactNode => {

  const [loginStatus, setLoginStatus] = useState(false)

  function checkValidation(event: any) {
    if (event.target.value === "131114") {
      setLoginStatus(true)
    }
  }

  return (
    <PageHeaderWrapper>
      {loginStatus ?
        <>
          <VisualCard1/>
          <VisualCard2/>
          <VisualCard3/>
        </>
        :
        <>
          <Card style={{textAlign: "center"}}>
            请输入管理员密码：<Input.Password id="password" placeholder="input password" style={{maxWidth: 400}}
                                     onChange={checkValidation}/>
          </Card>
        </>
      }
    </PageHeaderWrapper>
  );
};
export default reactNode
