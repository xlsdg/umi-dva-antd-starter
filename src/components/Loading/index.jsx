import React from 'react';
// import PropTypes from 'prop-types';
import { Col, Row } from 'antd';
import ReactLoading from 'react-loading';

import styles from './index.less';

function ILoading() {
  return (
    <Row className={styles.loading} type="flex" align="middle" justify="center">
      <Col className={styles.loadingIcon}>
        <ReactLoading type="cylon" color="#0078ff" width="100%" height="100%" />
      </Col>
    </Row>
  );
}

// ILoading.propTypes = {};

// ILoading.defaultProps = {};

export default ILoading;
