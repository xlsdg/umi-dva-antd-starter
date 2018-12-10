import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import styles from './index.less';

function renderHeader(props) {
  return <Layout.Header className={styles.header}>Header</Layout.Header>;
}

function renderContent(props) {
  const { children } = props;

  return <Layout.Content className={styles.content}>{children}</Layout.Content>;
}

function renderFooter(props) {
  return <Layout.Footer className={styles.footer}>Footer</Layout.Footer>;
}

function BasicLayout(props) {
  return (
    <Layout className={styles.main}>
      {renderHeader(props)}
      {renderContent(props)}
      {renderFooter(props)}
    </Layout>
  );
}

BasicLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

// BasicLayout.defaultProps = {};

export default BasicLayout;
