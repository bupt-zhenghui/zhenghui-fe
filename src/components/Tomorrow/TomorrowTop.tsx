import React from 'react';
import {Card} from "antd";
import ReactAudioPlayer from "react-audio-player";
import styles from './Tomorrow.less'

export default class TomorrowTop extends React.Component {

  public render() {
    return (
      <Card className={ styles.customCard }>
        <ReactAudioPlayer
          src="http://123.57.66.63:8888/music/%E6%98%8E%E5%A4%A9%2C%E4%BD%A0%E5%A5%BD.mp3"
          autoPlay
          controls
          style={{marginBottom:"12"}}
        />
        <div style={{overflowY:"auto", height: 180}}>
          <p className={ styles.customP }>看昨天的我们走远了</p>
          <p className={ styles.customP }>在命运广场中央等待</p>
          <p className={ styles.customP }>那模糊的肩膀</p>
          <p className={ styles.customP }>越奔跑 越渺小</p>
          <br/>
          <p className={ styles.customP }>曾经并肩往前的伙伴</p>
          <p className={ styles.customP }>在举杯祝福后都走散</p>
          <p className={ styles.customP }>只是那个夜晚</p>
          <p className={ styles.customP }>我深深的都留藏在心坎</p>
          <br/>
          <p className={ styles.customP }>长大以后 我只能奔跑</p>
          <p className={ styles.customP }>我多害怕 黑暗中跌倒</p>
          <p className={ styles.customP }>明天你好 含着泪微笑</p>
          <p className={ styles.customP }>越美好 越害怕得到</p>
          <br/>
          <p className={ styles.customP }>每一次哭 都笑着奔跑</p>
          <p className={ styles.customP }>一边失去 一边在寻找</p>
          <p className={ styles.customP }>明天你好 声音多渺小</p>
          <p className={ styles.customP }>却提醒我 勇敢是什么</p>
        </div>
      </Card>
    )
  }
}
