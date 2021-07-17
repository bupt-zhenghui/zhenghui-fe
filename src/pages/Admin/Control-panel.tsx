import React, {useState} from 'react';
import {PageHeaderWrapper} from '@ant-design/pro-layout';
import {Card, Input} from "antd";
import UploadReport from "@/components/VisualCard/UploadReport";
import InsertProject from "@/components/VisualCard/InsertProject";


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
          <UploadReport/>
          <InsertProject/>
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
}
export default reactNode
