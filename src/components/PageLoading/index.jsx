import React from 'react';
// import PropTypes from 'prop-types';
import { Col, Row, Spin } from 'antd';

import styles from './index.less';

function PageLoading() {
  return (
    <Row className={styles.loading} type="flex" align="middle" justify="center">
      <Col className={styles.loadingContainer}>
        <Spin />
      </Col>
    </Row>
  );
}

// PageLoading.propTypes = {};

// PageLoading.defaultProps = {};

export default PageLoading;
