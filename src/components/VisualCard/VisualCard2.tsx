import React from 'react';
import {Card, Col, Row} from "antd";
import DemoLine from "@/components/VisualCard/DemoLine";
import DemoBar from "@/components/VisualCard/DemoBar";

export default class VisualCard2 extends React.Component {

  public render() {
    return (
      <Row gutter={16} style={{marginBottom:20}}>
        <Col span={16}>
          <Card title="访问量走势">
            <DemoLine />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="单页面访问量">
            <DemoBar />
          </Card>
        </Col>
      </Row>
    )
  }
}
