import React, {useState} from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {AccessPage, sendAccessInfo} from "@/services/access_data";
import {Card, Input} from "antd";

sendAccessInfo(null, AccessPage.PageStatistics)
export default (): React.ReactNode => {
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
