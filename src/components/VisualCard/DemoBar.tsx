import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/charts';

const DemoBar: React.FC = () => {
  var data = [
    {
      page: '导航栏',
      value: 38,
    },
    {
      page: '个人信息',
      value: 52,
    },
    {
      page: '数据统计',
      value: 61,
    },
    {
      page: 'Leetcode数据',
      value: 145,
    },
    {
      page: '其他页面',
      value: 48,
    },
  ];
  var config = {
    data: data,
    xField: 'value',
    yField: 'page',
    seriesField: 'page',
    legend: { position: 'top-left' },
  };
  return <Bar {...config} />;
};

export default DemoBar;
