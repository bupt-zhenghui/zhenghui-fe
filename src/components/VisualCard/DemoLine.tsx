import React from 'react';
import {Line} from '@ant-design/charts';

interface IProps {
  daily_list: Array<{ date: string, number: number }>
}

export default class DemoLine extends React.Component<IProps, any> {

  constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {daily_list} = this.props
    const config = {
      data: daily_list,
      padding: 'auto',
      xField: 'date',
      yField: 'number',
      xAxis: {
        type: 'timeCat',
        tickCount: 5,
      },
    };
    // @ts-ignore
    return <Line {...config} />;
  }
};
