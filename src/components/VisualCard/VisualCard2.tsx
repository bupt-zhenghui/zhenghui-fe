import {Card, Col, Row} from "antd";
import DemoLine from "@/components/VisualCard/DemoLine";
import DemoBar from "@/components/VisualCard/DemoBar";
import {useEffect, useState} from "react";
import {getAccessStatisticsMid} from "@/services/access_data";

let VisualCard2 = () => {

  const [statistics, setStatistics] = useState({
    daily_access_list: [],
    page_access_list: [],
  });
  useEffect(() => {
    const getStatistics = async () => {
      const statistics = await getAccessStatisticsMid(null);
      setStatistics(statistics)
    }
    getStatistics();
  }, [])

  return (
    <Row gutter={16} style={{marginBottom: 20}}>
      <Col span={16}>
        <Card title="访问量走势">
          <DemoLine daily_list={statistics.daily_access_list}/>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="单页面访问量">
          <DemoBar page_list={statistics.page_access_list}/>
        </Card>
      </Col>
    </Row>
  )
}

export default VisualCard2
