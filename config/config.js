import LodashWebpackPlugin from 'lodash-webpack-plugin';

const chainWebpack = config => {
  config.plugin('lodash').use(LodashWebpackPlugin, [{
    collections: true,
    paths: true,
  }]);
};

const plugins = [
  // ref: https://umijs.org/plugin/umi-plugin-react.html
  ['umi-plugin-react', {
    antd: true,
    dll: false,
    dva: false,
    dynamicImport: {
      loadingComponent: './components/Loading/index',
    },
    fastClick: false,
    hardSource: false,
    hd: false,
    locale: {
      antd: true,
      baseNavigator: true,
      default: 'zh-CN',
    },
    routes: {
      exclude: []
    },
  }],
];

// ref: https://umijs.org/config/
export default {
  chainWebpack,
  extraBabelPlugins: ['lodash'],
  hash: true,
  ignoreMomentLocale: true,
  plugins,
  // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
  theme: {
    '@brand-primary': '#0078ff',
  },
  targets: {
    ie: 11,
  },
};
