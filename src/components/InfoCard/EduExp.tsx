import React from 'react';
import styles from "@/components/InfoCard/InfoCard.less";
import {Image, Typography} from "antd";

const { Text } = Typography;

interface IProps {
  src: string,
  school: string
  date: string
}

export default class EduExp extends React.Component<IProps, any> {

  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    const { src, school, date } = this.props
    return (
      <div className={styles.customDiv}>
        <Image width={180} height={51} src={ src } />
        <Text className={styles.customText}>{ school }</Text>
        <Text className={styles.customDateText}>{ date }</Text>
      </div>
    )
  }
}
