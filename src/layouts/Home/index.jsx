// import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
// import ClassNames from 'classnames';
// import Link from 'umi/link';
// import Router from 'umi/router';
// import Redirect from 'umi/redirect';
import { Layout } from 'antd';
// import { formatMessage } from 'umi-plugin-react/locale';

import styles from './index.less';

const HomeLayout = React.memo(props => {
  const { children } = props;

  return (
    <Layout className={styles.container}>
      <Layout.Content className={styles.content}>{children}</Layout.Content>
    </Layout>
  );
});

HomeLayout.propTypes = {};

HomeLayout.defaultProps = {};

export default HomeLayout;
