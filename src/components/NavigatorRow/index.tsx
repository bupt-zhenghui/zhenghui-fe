import React from 'react';
import {Col, Image, Row, Typography, Input} from "antd";
import styles from './index.less'
import {Link} from "@umijs/preset-dumi/lib/theme";

const { Search } = Input
const { Text } = Typography

interface IProp {
  id: number,
  title: string,
  src: string,
  href: string,
}


export default class NavigatorRow extends React.Component<IProp, any> {

  public constructor(props: IProp) {
    super(props);
    this.state = {
      funcList: [this.onGoogleSearch, this.onBaiduSearch, this.onScholarSearch, this.onBiliSearch, this.onYoutubeSearch,
      this.onByteSearch, this.onByrbtSearch, this.onDoubanSearch, this.onLeetcodeSearch]
    }
  }


  public onGoogleSearch = (value: string) => {
    const val = value.replace(" ", "+")
    window.open(`https://www.google.com.hk/search?q=${ val }`)
  }

  public onBaiduSearch = (value: string) => {
    const val = value.replace(" ", "%20")
    window.open(`https://www.baidu.com/s?wd=${ val }`)
  }

  public onScholarSearch = (value: string) => {
    const val = value.replace(" ", "+")
    window.open(`https://scholar.google.com/scholar?q=${ val }`)
  }

  public onBiliSearch = (value: string) => {
    const val = value.replace(" ", "%20")
    window.open(`https://search.bilibili.com/all?keyword=${ val }`)
  }

  public onYoutubeSearch = (value: string) => {
    const val = value.replace(" ", "+")
    window.open(`https://www.youtube.com/results?search_query=${ val }`)
  }

  public onByteSearch = (value: string) => {
    window.open(`https://bytedance.net/search?query=${ value }`)
  }

  public onByrbtSearch = (value: string) => {
    const val = value.replace(" ", "+")
    window.open(`https://bt.byr.cn/torrents.php?search=${ val }`)
  }

  public onDoubanSearch = (value: string) => {
    const val = value.replace(" ", "+")
    window.open(`https://www.douban.com/search?q=${ val }`)
  }

  public onLeetcodeSearch = (value: string) => {
    const val = value.replace(" ", "%20")
    window.open(`https://leetcode-cn.com/problemset/all/?search=${ val }`)
  }

  public render() {
    const { src, title, id, href } = this.props
    return (
      <Row align={"middle"} style={{backgroundColor:"transparent", marginBottom:20}}>
        <Col span={4} offset={4} style={{display:"flex", alignItems:"center"}}>
          <Link to={ href }><Image width={120} height={34} src={ src } preview={ false } /></Link>
          <Text className={ styles.customText }>{ title }</Text>
        </Col>
        <Col span={6} offset={1}>
          <Search placeholder="input search text" onSearch={ this.state.funcList[id] } enterButton />
        </Col>
      </Row>
    )
  }
}
