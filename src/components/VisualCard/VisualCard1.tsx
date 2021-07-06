import {useEffect, useState} from 'react';
import {Card, Col, Row} from "antd";
import styles from './VisualCard.less'
import {getAccessStatistics,} from "@/services/access_data";

let VisualCard1 = () => {

  const [statistics, setStatistics] = useState({
    total_number: 0,
    recent_week_number: 0,
    recent_month_number: 0,
    total_ip_number: 0,
    recent_month_ip_number: 0,
  });
  useEffect(() => {
    const getStatistics = async () => {
      const statistics = await getAccessStatistics(null);
      setStatistics(statistics)
      console.log("statistics: ", statistics)
    }
    getStatistics();
  }, [])

  return (
    <Card title="核心指标" bordered={false} style={{marginBottom: 20}}>
      <Row>
        <Col span={4}>
          <strong>总浏览量</strong><br/>
          <div className={styles.customNumber}>{statistics.total_number}</div>
        </Col>
        <Col span={5} className={styles.customCol}>
          <strong>近7日浏览量</strong><br/>
          <div className={styles.customNumber}>{statistics.recent_week_number}</div>
        </Col>
        <Col span={5} className={styles.customCol}>
          <strong>近30日浏览量</strong><br/>
          <div className={styles.customNumber}>{statistics.recent_month_number}</div>
        </Col>
        <Col span={5} className={styles.customCol}>
          <strong>总访客数量</strong><br/>
          <div className={styles.customNumber}>{statistics.total_ip_number}</div>
        </Col>
        <Col span={5} className={styles.customCol}>
          <strong>近30日访客数量</strong><br/>
          <div className={styles.customNumber}>{statistics.recent_month_ip_number}</div>
        </Col>
      </Row>
    </Card>
  )
}

export default VisualCard1
