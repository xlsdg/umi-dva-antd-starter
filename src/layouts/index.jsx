import _ from 'lodash';
import React from 'react';
// import PropTypes from 'prop-types';
import { useLocation } from 'umi';
import { ConfigProvider } from 'antd';

import UserLayout from '@/components/Layout/User';

import { useDeepCompareEffect } from '@/utils/hook';
import { isEqual } from '@/utils/helper';

function BasicLayout(props) {
  const { children } = props;

  const location = useLocation();
  const locationRef = React.useRef(location);
  useDeepCompareEffect(() => {
    if (!isEqual(locationRef.current, location)) {
      locationRef.current = location;
      window.scrollTo(0, 0);
    }
  }, [location]);

  let layout = children;

  const { pathname } = location;
  const path = pathname !== '/' ? _.trimEnd(pathname, '/') : pathname;
  if (_.startsWith(path, '/user/')) {
    layout = <UserLayout>{children}</UserLayout>;
  }

  const config = {
    autoInsertSpaceInButton: false,
    // componentSize: ,
    // csp: { nonce: '' },
    // direction: 'ltr',
    // dropdownMatchSelectWidth: ,
    // form: {},
    // getPopupContainer: () => document.body,
    // getTargetContainer: () => window,
    // input: ,
    // locale: ,
    // pageHeader: { ghost: true },
    // prefixCls: '',
    // renderEmpty: ,
    // space: ,
    // virtual: ,  };

  return <ConfigProvider {...config}>{layout}</ConfigProvider>;
}

BasicLayout.propTypes = {};

BasicLayout.defaultProps = {};

export default React.memo(BasicLayout);
