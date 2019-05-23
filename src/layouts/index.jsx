import React from 'react';
import PropTypes from 'prop-types';
import withRouter from 'umi/withRouter';
import { Layout } from 'antd';

import styles from './index.less';

class BasicLayout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {};

  constructor() {
    super(...arguments);
    // console.log('constructor', arguments);
    this.state = {};
  }

  componentDidUpdate(prevProps) {
    const that = this;
    const { location } = that.props;

    if (location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  renderHeader = () => {
    return <Layout.Header className={styles.header}>Header</Layout.Header>;
  };

  renderContent = () => {
    const that = this;
    const { children } = that.props;

    return <Layout.Content className={styles.content}>{children}</Layout.Content>;
  };

  renderFooter = () => {
    return <Layout.Footer className={styles.footer}>Footer</Layout.Footer>;
  };

  render() {
    const that = this;

    return (
      <Layout className={styles.container}>
        {that.renderHeader()}
        {that.renderContent()}
        {that.renderFooter()}
      </Layout>
    );
  }
}

export default withRouter(BasicLayout);
