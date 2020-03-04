import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import { withRouter } from 'umi';
import { ConfigProvider } from 'antd';

import HomeLayout from './Home';

import { useDeepCompareEffect } from '@/utils/hook';

// import styles from './index.less';

const BasicLayout = React.memo(props => {
  const { children, location } = props;

  const locationRef = React.useRef(location);
  useDeepCompareEffect(() => {
    if (!_.isEqual(locationRef.current, location)) {
      locationRef.current = location;
      window.scrollTo(0, 0);
    }
  }, [location]);

  let layout = <HomeLayout>{children}</HomeLayout>;

  const config = React.useMemo(
    () => ({
      autoInsertSpaceInButton: false,
      // componentSize: ,
      // csp: { nonce: '' },
      // form: {},
      // renderEmpty,
      // getPopupContainer: () => document.body,
      // locale: ,
      // prefixCls: '',
      // pageHeader: { ghost: true },
      // direction: 'ltr',
    }),
    []
  );

  return <ConfigProvider {...config}>{layout}</ConfigProvider>;
});

export default withRouter(BasicLayout);
