import {Card, Col, Row} from "antd";
import DemoProgress from "@/components/VisualCard/DemoProgress";
import {useEffect, useState} from "react";
import {getLeetcodeStatistics} from "@/services/leetcode";
import {String2Time} from "@/pages/utils";
import LeetcodeLine from "@/components/VisualCard/LeetcodeLine";


let LeetcodeCard = () => {

  const [statistics, setStatistics] = useState({
    statistics: {},
    history_ac_data: [],
  });
  const [datetime, setDatetime] = useState("")

  useEffect(() => {
    const getStatistics = async () => {
      const stat = await getLeetcodeStatistics(null);
      setStatistics(stat)
      setDatetime(String2Time(stat.statistics.update_time))
    }
    getStatistics();
  }, [])
  return (
    <Row gutter={8} style={{marginBottom: 20}}>
      <Col span={8}>
        <Card title="数据统计" extra={datetime}>
          <div style={{width: "40%", float: "left", marginBottom: 10}}>
            <div>解决问题</div>
            <div style={{fontSize: 24, color: "red"}}>{statistics.statistics.ac_number}</div>
          </div>
          <DemoProgress value={statistics.statistics.ac_number / statistics.statistics.total_number}/>
          <div style={{width: "35%", float: "left", color: "#00AF9B"}}>
            <div>简单</div>
            <div>{statistics.statistics.ac_easy_number}/{statistics.statistics.easy_number}</div>
          </div>
          <div style={{width: "35%", float: "left", color: "#FFB800"}}>
            <div>中等</div>
            <div>{statistics.statistics.ac_medium_number}/{statistics.statistics.medium_number}</div>
          </div>
          <div style={{width: "30%", float: "left", color: "#FF2D55"}}>
            <div>困难</div>
            <div>{statistics.statistics.ac_hard_number}/{statistics.statistics.hard_number} </div>
          </div>
        </Card>
      </Col>
      <Col span={16}>
        <Card>
          <LeetcodeLine data={statistics.history_ac_data}/>
        </Card>
      </Col>
    </Row>
  )
}

export default LeetcodeCard
