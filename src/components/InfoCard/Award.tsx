import React from 'react';
import styles from "@/components/InfoCard/InfoCard.less";
import { Typography } from "antd";

const { Text } = Typography;

interface IProps {
  title: string,
  date: string
}

export default class Award extends React.Component<IProps, any> {

  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { title, date } = this.props
    return (
      <div style={{marginBottom:15}}>
        <Text className={ styles.customAwardText }>{ title }</Text>
        <Text className={ styles.customDateText }>{ date }</Text>
      </div>
    )
  }
}
