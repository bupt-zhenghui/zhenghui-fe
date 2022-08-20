import {useEffect, useState} from 'react';
import {Form, Input, message, Modal, Space, Table, Tag} from "antd";
import {PostUpdateProject, SearchProject, GetDeleteProject} from '@/services/project';
import {colorList} from "@/components/NavigatorRow/CourseRow";
import {String2Time} from '@/pages/utils';


const EditProjectTable = () => {

  const [projectList, setProjectList] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    const getProjectList = async () => {
      const projectList = await SearchProject(null);
      setProjectList(projectList)
    }
    getProjectList().then(() => {
    });
  }, [])

  const editSingleProject = (project: any) => {
    console.log(project)
    form.setFieldsValue(project)
    showModal()
    return true
  }

  const DeleteProject = async (project: any) => {
    GetDeleteProject(null, project.id)
    const projectList = await SearchProject(null);
    setProjectList(projectList)
  }


  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'key',
      fixed: 'left',
      width: 50,
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => a.key - b.key,
      fixed: 'left',
      width: 200,
    },
    {
      title: '标签',
      dataIndex: 'tag',
      key: 'tag',
      width: 300,
      render: (tags: string) => (
        <>
          {
            tags.split(',').map(tag => {
              let color = colorList[Math.floor(Math.random() * 6)]
              return (
                <Tag color={color} key={tag}>
                  {tag}
                </Tag>
              );
            })}
        </>
      ),
    },
    {
      title: '文档链接',
      dataIndex: 'md_url',
      key: 'md_url',
      width: 300,
    },
    {
      title: 'github链接',
      dataIndex: 'github_url',
      key: 'github_url',
      width: 400,
    },
    {
      title: '下载链接',
      dataIndex: 'project_url',
      key: 'project_url',
      width: 300,
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
      defaultSortOrder: 'descend',
      width: 200,
      sorter: (a: any, b: any) => {
        let t1 = new Date(a.create_time).getTime()
        let t2 = new Date(b.create_time).getTime()
        return t2 - t1
      },
      render: (text: string) => String2Time(text)
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 120,
      render: (text: any, record: any) => (
        <Space size="middle">
          <a onClick={(e) => editSingleProject(record)}>编辑</a>
          <a onClick={(e) => DeleteProject(record)}>删除</a>
        </Space>
      )
    },
  ];

  function onChange(pagination: any, filters: any, sorter: any, extra: any) {
    console.log('params', pagination, filters, sorter, extra);
  }

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };


  const handleOk = async () => {
    // 点击对话框OK按钮触发的事件
    console.log(form.getFieldsValue())
    PostUpdateProject(form.getFieldsValue())
    const projectList = await SearchProject(null);
    setProjectList(projectList)
    setIsModalVisible(false)
    message.success('Update project information successfully.')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Table columns={columns} dataSource={projectList} rowKey={(record) => record.id} onChange={onChange}
             scroll={{x: 1500}}/>
      <Modal
        title="新建项目"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
      >
        <Form
          form={form}
          name="新建项目"
          labelCol={{span: 7}}
          wrapperCol={{span: 12}}
          initialValues={{remember: false}}
        >
          <Form.Item
            label="id"
            name="id"
            hidden={true}
          />
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
    </>
  )
};

export default EditProjectTable
