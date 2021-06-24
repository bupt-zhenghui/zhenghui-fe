import React from 'react';
import {Card, Image} from "antd";
import styles from './Tomorrow.less'

export default class TomorrowMid extends React.Component {
  render() {
    return (
      <Card className={ styles.customCard }>
        <div style={{marginBottom:16}}>
          <Image width={240} height={320} src="http://123.57.66.63:8888/images/freshroom.jpg"/>
          <br/>2017 大学开学的第一天<br/>我记得那天也挺难受的，后面四年就在北京了。我带着一些遗憾来到这里，希望用四年努力还自己一份满意的答卷。
        </div>
        <div style={{marginBottom:16}}>
          <Image width={360} height={240} src="http://123.57.66.63:8888/images/freshman.jpg"/>
          <br/>2017 大一入学合照<br/>大一的时候好多同学名字都对不上，哈哈。但是后面慢慢的就都认识了。
        </div>
        <div style={{marginBottom:16}}>
          <Image width={240} height={320} src="http://123.57.66.63:8888/images/sophomoreroom.jpg"/>
          <br/>2018 下学期搬到了沙河校区
        </div>
        <div style={{marginBottom:16}}>
          <Image width={360} height={240} src="http://123.57.66.63:8888/images/beizi.jpg"/>
          <br/>2018 我的床铺<br/>被子叠的不错吧～这种豆腐块我叠了三年。别问最后为啥不叠了，老子懒！
        </div>
        <div style={{marginBottom:16}}>
          <Image width={240} height={320} src="http://123.57.66.63:8888/images/charlesriver.jpg"/>
          <br/>2019 暑期于波士顿查尔斯河<br/>大二侥幸混入叶培大院，暑假一起去MIT溜达了一圈。现在看来这个院虽然很水，但进去的
          大多数学生，真的是又低调又强。不过里面也不乏一些滥竽充数的，比如我。
        </div>
        <div style={{marginBottom:16}}>
          <Image width={360} height={240} src="http://123.57.66.63:8888/images/my_family.jpg"/>
          <br/>2021 字节跳动家庭开放日<br/>大四能进入字节实习还是挺让我自豪的。学到很多新知识，拿到一份大厂实习经历，对互联网行业有了一个大体上的认知，
          同时还享受了几个月自给自足（随便花钱）的生活，真的挺爽的，哈哈～
        </div>
        <div style={{marginBottom:16}}>
          <Image width={360} height={240} src="http://123.57.66.63:8888/images/undergraduate.jpg"/>
          <br/>2021 班级毕业照<br/>说实话，我真的不想放这张照片，tmd那个帽子太难戴了😭😭，严重影响了我的发型。
        </div>
      </Card>
    )
  }
}
