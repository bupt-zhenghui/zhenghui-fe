import {useEffect, useState} from 'react';
import {Card, Table} from "antd";
import {getAccessInfo} from "@/services/access_data";
import {String2Date, String2Time} from "@/pages/utils";

let VisualCard3 = () => {

  const [accessList, setAccessList] = useState([]);
  useEffect(() => {
    const getAccessList = async () => {
      const accessList = await getAccessInfo(null);
      setAccessList(accessList)
    }
    getAccessList();
    console.log("access list: ", accessList)
  }, [])

  const columns = [
    {
      title: 'ip地址',
      dataIndex: 'ip',
      key: 'ip',
    },
    {
      title: '访问次数',
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: '运营商',
      dataIndex: 'isp',
      key: 'isp',
    },
    {
      title: '最后访问时间',
      dataIndex: 'last_access_time',
      key: 'last_access_time',
      render: (text: string) => String2Time(text)
    },
  ];

  return (
    <Card title="近期访问记录">
      <Table dataSource={accessList} columns={columns} rowKey={(record) => record.ip}/>
    </Card>
  )
}

export default VisualCard3
