import React from 'react';
import {Line} from '@ant-design/charts';

interface IProp {
  data: any
}

export default class LeetcodeLine extends React.Component<IProp, any> {

  constructor(props: IProp) {
    super(props);
  }

  render() {
    var config = {
      height: 172,
      data: this.props.data,
      xField: 'date',
      yField: 'ac_number',
      annotations: [
        {
          type: 'text',
          position: ['1%', '2%'],
          content: '近期数据',
          style: {
            fontSize: 16,
            fontWeight: "bold",
          }
        },
      ],
      point: {
        size: 5,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: {showMarkers: false},
      state: {
        active: {
          style: {
            shadowBlur: 4,
            stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [{type: 'marker-active'}],
    };
    return (
      <Line {...config} />
    )
  }
};

