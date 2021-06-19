import React from 'react';
import {Card, Col, Image, Row, Typography} from "antd";
import EduExp from "@/components/InfoCard/EduExp";
import Award from "@/components/InfoCard/Award";

const { Title, Paragraph, Link } = Typography;

export default class InfoCard extends React.Component {
  public render() {
    return (
      <>
        <Card style={{marginBottom:20}}>
          <Row align={"middle"} style={{backgroundColor:"transparent"}}>
            <Col span={4.5} offset={3}>
              <Card>
                <Image
                  width={240}
                  height={320}
                  src="/icons/my_img.jpg"
                />
              </Card>
            </Col>
            <Col span={8} offset={1}>
              <Typography>
                <Title level={2} style={{textAlign: "center"}}>汪正徽 Z.H Wang</Title>
                <Title level={5} style={{marginTop: 0}}>学历：本科生 大四在读（保研）</Title>
                <Title level={5} style={{marginTop: 0}}>所在单位：北京邮电大学 国际学院</Title>
                <Title level={5} style={{marginTop: 0}}>地址：北京市西土城路10号 北京邮电大学</Title>
                <Title level={5} style={{marginTop: 0}}>电话：18055627612</Title>
                <Title level={5} style={{marginTop: 0}}>邮箱：wangzhenghui@bupt.edu.cn</Title>
                <Title level={5} style={{marginTop: 0}}>研究生单位：北邮人工智能学院 智能科学与技术系</Title>
                <Title level={5} style={{marginTop: 0}}>研究生导师：冯方向</Title>
                <Title level={5} style={{marginTop: 0}}>个人简历：<Link href="http://www.baidu.com"
                                                                   target="_blank">简历下载</Link></Title>
              </Typography>
            </Col>
          </Row>
        </Card>
        <Card style={{marginBottom:20}}>
          <Row align={"middle"} style={{backgroundColor:"transparent"}}>
            <Col span={13} offset={4}>
              <Typography>
                <Paragraph>
                  北京邮电大学国际学院本科生（大四）、北邮叶培大实验班学生，校级三好学生，校优秀毕业生。研究方向：计算机视觉，后端研发。本科三年陆续获得校级、
                  市级、国家级大学生数学竞赛奖项，三年智育排名专业前10%，大学英语六级考试572分，所学6门数学类必修课程平均分93.7分，
                  大二暑期参与MIT Machine Learning Summer Program，大三暑期在北邮网络与交换技术国家重点实验室实习。2020.10保研至
                  北京邮电大学人工智能学院智能科学与技术系。2020.11加入北京好赞移动科技有限公司算法组实习。2021.3加入字节跳动Data数据平台从事后端研发。
                </Paragraph>
              </Typography>
            </Col>
          </Row>
        </Card>
        <Card style={{marginBottom:20}}>
          <Row align={"middle"} style={{backgroundColor:"transparent"}}>
            <Col span={13} offset={4}>
              <Typography>
                <EduExp src="/icons/anyi.png" school="安庆第一中学" date="2014.09~2017.06"/>
                <EduExp src="/icons/bupt.png" school="北京邮电大学 电子商务及法律" date="2017.09~2021.06"/>
                <EduExp src="/icons/bytedance.png" school="字节跳动" date="2021.03~2021.07"/>
                <EduExp src="/icons/bupt.png" school="北京邮电大学 电子信息（大类）" date="2021.09~2024.06"/>
              </Typography>
            </Col>
          </Row>
        </Card>
        <Card style={{marginBottom:20}}>
          <Row align={"middle"} style={{backgroundColor:"transparent"}}>
            <Col span={13} offset={4}>
              <Typography>
                <Award title="北京邮电大学数学竞赛三等奖" date="2018.06"/>
                <Award title="北京邮电大学校级三好学生" date="2018.10"/>
                <Award title="入选北邮叶培大实验班" date="2018.11"/>
                <Award title="全国大学生数学竞赛三等奖" date="2018.12"/>
                <Award title="项目：MIT Summer Program -- Machine Learning" date="2019.06~2019.07"/>
                <Award title="项目：全国大学生创新创业大赛国家级项目" date="2019.08~2020.05"/>
                <Award title="保研：人工智能学院 智能科学与技术系" date="2020.10"/>
                <Award title="实习：Nice算法组" date="2020.11~2021.01"/>
                <Award title="项目：字节跳动前端训练营" date="2021.01~2021.02"/>
                <Award title="实习：字节跳动Data数据平台后端研发" date="2021.03~2021.07"/>
                <Award title="北京邮电大学优秀本科毕业生" date="2021.06"/>
              </Typography>
            </Col>
          </Row>
        </Card>
      </>
    )
  }
}
