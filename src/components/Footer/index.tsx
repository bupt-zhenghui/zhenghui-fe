import { useIntl } from 'umi';
import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: '蚂蚁集团体验技术部出品',
  });

  return (
    <DefaultFooter
      copyright={`2021 ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: 'zhenghui-backend',
          href: 'https://github.com/bupt-zhenghui/zhenghui-backend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined/>,
          href: 'https://github.com/bupt-zhenghui',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: 'zhenghui-fe',
          href: 'https://github.com/bupt-zhenghui/zhenghui-fe',
          blankTarget: true,
        },
      ]}
    />
  );
};
