import React from 'react';
import {Card, Typography} from "antd";
import styles from './Tomorrow.less'

const { Title, Paragraph } = Typography

export default class TomorrowBottom extends React.Component {
  render() {
    return (
      <Card className={ styles.customCard }>
        <Title level={5}>毕业感言</Title>
        <Paragraph>挺难受的，非常、非常、非常难过。</Paragraph>
        <Paragraph>那天拍完毕业照以后，回到工位上久久无法平静。直到那时我才意识到，马上就要和大学时光说再见了。</Paragraph>
        <Paragraph>如果可以的话，我真的希望大学能再来四年，我还没过瘾。</Paragraph>
        <Paragraph>但很遗憾，时光机并不存在，我们总是要面临离别，总要成长，总要向前看。</Paragraph>
        <Paragraph>“曾经并肩往前的伙伴，在举杯祝福后都走散”，我第一次和一首歌产生如此强烈的共鸣。</Paragraph>
        <Title level={5}>毕业反思</Title>
        <Paragraph>我们终会一步步地从稚嫩走向成熟。</Paragraph>
        <Paragraph>大学四年，犯过很多次错误。有些错误睡一觉就忘了，有些错误直到现在还历历在目。曾经的轻狂和傲慢可能伤害了周围的朋友，我感到抱歉；一些不经过思考，脱口而出的话和不恰当的行为可能破坏了同学一整天的好心情，我感到抱歉；因为我的原因对大家带来的任何负面的影响，我都深感抱歉。</Paragraph>
        <Paragraph>大概从高中那会儿开始，自己的性格慢慢地变得孤僻，也不知道是课业压力重了还是什么其他的原因，潜移默化。一直以来，不管做什么事情都更喜欢一个人单打独斗。喜欢羽毛球、乒乓球这种强调个人能力的运动；打游戏喜欢玩单人线，对线能力可以，支援能力很差；大学里很擅长考试（理科），但只要是小组作业，我大概率拖后腿。大学四年，身边的同学纷纷“脱单”，课余生活五彩斑斓，几乎只有我四年的生活极其平淡，毫无波澜，大一到大四都是一个节奏。不过这种极致的独立也并非一无是处：我慢慢地开始对事物有了自己的理解，不会轻易的随波逐流，有勇气质疑权威；自律性明显提高，我可以坚持三年早起，坚持泡三年的图书馆，甚至现在每周周末公司休假我都得去图书馆，空闲的一天不去图书馆真的是浑身难受；我变得更有主见，大二下学期往后，一些我提不起一丝兴趣的课，我会选择性放弃，多出来的时间用来学我自己感兴趣的东西......但不管之前如何，研究生阶段不能再维持现状了，我需要在人际交往中做出突破。</Paragraph>
      </Card>
    )
  }
}
