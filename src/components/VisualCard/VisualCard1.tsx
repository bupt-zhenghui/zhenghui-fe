import React from 'react';
import {Card, Col, Row} from "antd";
import styles from './VisualCard.less'

export default class VisualCard1 extends React.Component {

  public render() {
    return (
      <Card title="核心指标" bordered={false} style={{marginBottom:20}}>
        <Row>
          <Col span={4}>
            <strong>总浏览量</strong><br/>
            <text className={ styles.customNumber }>1001</text>
          </Col>
          <Col span={5} className={ styles.customCol }>
            <strong>近7日浏览量</strong><br/>
            <text className={ styles.customNumber }>31</text>
          </Col>
          <Col span={5} className={ styles.customCol }>
            <strong>近30日浏览量</strong><br/>
            <text className={ styles.customNumber }>31</text>
          </Col>
          <Col span={5} className={ styles.customCol }>
            <strong>近7日新用户</strong><br/>
            <text className={ styles.customNumber }>31</text>
          </Col>
          <Col span={5} className={ styles.customCol }>
            <strong>近30日新用户</strong><br/>
            <text className={ styles.customNumber }>31</text>
          </Col>
        </Row>
      </Card>

    )
  }
}
