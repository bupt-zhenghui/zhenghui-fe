import React from 'react';
import {Bar} from '@ant-design/charts';

interface IProp {
  page_list: Array<{ page: string, number: number }>
}

export default class DemoBar extends React.Component<IProp, any> {

  constructor(props: IProp) {
    super(props);
  }

  public render() {
    let config = {
      data: this.props.page_list,
      xField: 'number',
      yField: 'page',
      seriesField: 'page',
      legend: {position: 'top-left'},
    };
    // @ts-ignore
    return <Bar {...config} />;
  }

};

