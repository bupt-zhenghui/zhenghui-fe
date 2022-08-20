import React from "react";
import {Alert} from "antd";

interface IProps {
  text: string,
}

export default class CustomAlert extends React.Component<IProps, any> {

  public constructor(props: IProps) {
    super(props);
  }

  public render() {
    const {text} = this.props
    return (
      <Alert
        message={text}
        type="info"
        showIcon
        style={{marginBottom: 12}}
      />
    )
  }
}


