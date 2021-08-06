import {Progress} from '@ant-design/charts';
import React from 'react';

interface IProps {
  value: number,
}

export default class DemoProgress extends React.Component<IProps, any> {

  public constructor(props: IProps) {
    super(props);
  }

  render() {
    var config = {
      percent: this.props.value,
      barWidthRatio: 0.3,
      color: ['#F4664A', '#E8EDF3'],
    };
    return (
      <>
        <Progress style={{width: "40%", height: 50, float: "left", marginBottom: 20}} {...config} />
        <text style={{marginTop: 50}}>{(this.props.value * 100).toFixed(2)}%</text>
      </>
    )

  }
}
