import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { Spin } from 'antd';

import styles from './index.less';

function Loading(props) {
  const { className, children, ...others } = props;

  const spinProps = _.pick(others, ['delay', 'indicator', 'size', 'spinning', 'tip', 'wrapperClassName']);
  return (
    <div className={ClassNames(styles.container, className)}>
      <Spin className={styles.loading} {...spinProps}>
        {children}
      </Spin>
    </div>
  );
}

Loading.propTypes = {};

Loading.defaultProps = {};

export default React.memo(Loading);
