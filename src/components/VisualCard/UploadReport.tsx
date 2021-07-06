import {Upload, message, Button, Card} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {backendAPI, fileType, uploadPrefix} from "@/pages/consts";

const props = {
  name: 'file',
  action: `${backendAPI + uploadPrefix + fileType.fileReport}`,
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

let UploadReport = () => {
  return (
    <Card title="上传月报或文档">
      <Upload {...props} style={{textAlign: "center"}}>
        <Button icon={<UploadOutlined/>}>Click to Upload</Button>
      </Upload>
    </Card>
  )
}

export default UploadReport
