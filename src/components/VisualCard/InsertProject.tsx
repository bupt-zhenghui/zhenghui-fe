import {Button, Card, Form, Input, Modal} from "antd";
import {useState} from "react";
import {PostInsertProject} from '@/services/project';
import EditProject from "./EditProject";

let InsertProject = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const [form] = Form.useForm();
  const handleOk = async () => {//点击对话框OK按钮触发的事件
    await PostInsertProject(form.getFieldsValue())
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card title="新建项目">
      <Button type="primary" onClick={showModal} style={{marginBottom: 20}}>新建</Button>
      <Modal
        title="新建项目"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          form={form}
          name="新建项目"
          labelCol={{span: 7}}
          wrapperCol={{span: 12}}
          initialValues={{remember: true}}
        >
          <Form.Item
            label="type"
            name="type"
            initialValue={0}
            hidden={true}
          />
          <Form.Item
            label="项目名称"
            name="name"
            rules={[{required: true, message: 'Please input project name!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="项目标签"
            name="tag"
            rules={[{required: true, message: 'Please input project tag'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="文档地址"
            name="md_url"
            rules={[{required: false}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="github地址"
            name="github_url"
            rules={[{required: false}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="下载地址"
            name="project_url"
            rules={[{required: false}]}
          >
            <Input/>
          </Form.Item>
        </Form>
      </Modal>
      <EditProject/>
    </Card>
  )
}

export default InsertProject
