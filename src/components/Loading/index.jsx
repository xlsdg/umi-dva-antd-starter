import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Spin } from 'antd';

import styles from './index.less';

const Loading = React.memo(props => {
  const { className, children, ...others } = props;

  return (
    <div className={ClassNames(styles.container, className)}>
      <Spin className={styles.loading} {...others}>
        {children}
      </Spin>
    </div>
  );
});

Loading.propTypes = {};

Loading.defaultProps = {};

export default Loading;
