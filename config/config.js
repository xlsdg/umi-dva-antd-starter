import LodashWebpackPlugin from 'lodash-webpack-plugin';

const chainWebpack = config => {
  config.plugin('lodash').use(LodashWebpackPlugin, [
    {
      collections: true,
      paths: true,
    },
  ]);
};

// https://umijs.org/plugin/umi-plugin-react.html
const plugins = [
  [
    'umi-plugin-react',
    {
      dva: {
        immer: false,
        dynamicImport: true,
        hmr: true,
      },
      antd: true,
      routes: {
        exclude: [],
        // update: () => {},
      },
      locale: {
        default: 'zh-CN',
        baseNavigator: false,
        antd: true,
      },
      library: 'react',
      dynamicImport: {
        // webpackChunkName: true,
        loadingComponent: './components/Loading/index.jsx',
        // level: ,
      },
      dll: false, // { include: , exclude: , }
      hardSource: false,
      // pwa: {
      //   manifestOptions: {
      //     srcPath: 'src/manifest.json',
      //   },
      //   workboxPluginMode: 'GenerateSW', // 'InjectManifest'
      //   workboxOptions: {
      //     swSrc: 'src/manifest.json',
      //     swDest: 'service-worker.js',
      //     importWorkboxFrom: 'local',
      //   }
      // },
      hd: false,
      fastClick: false,
      title: {
        defaultTitle: 'ANTD',
        // format: '{parent}{separator}{current}',
        // separator: ' - ',
        useLocale: true,
      },
      // chunks: ['umi'],
      // scripts: [{}],
      // headScripts: [{}],
      // metas: [{}],
      // links: [{}],
    },
  ],
];

const define = {
  'process.env.NODE_ENV': process.env.NODE_ENV,
};

// https://umijs.org/config/
export default {
  plugins,
  // routes: [],
  // disableRedirectHoist: false,
  history: 'browser', // browser、hash、memory
  outputPath: './dist',
  // base: '/',
  // publicPath: '/',
  // cssPublicPath: '/',
  runtimePublicPath: false,
  // mountElementId: 'root',
  minimizer: 'uglifyjs', // 'terserjs'
  hash: true,
  targets: { chrome: 49, firefox: 45, safari: 10, edge: 13, ios: 10 },
  // context: {},
  // exportStatic: { htmlSuffix: false, dynamicRoot: false },
  // singular: false,
  // mock: {
  //   exclude: [],
  // },

  chainWebpack,
  theme: { // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
    '@primary-color': '#0078ff',
  },
  treeShaking: true,
  define,
  // externals: {},
  // alias: {},
  // devServer: {},
  // devtool: {},
  // disableCSSModules: false,
  // disableCSSSourceMap: false,
  // extraBabelPresets: [],
  extraBabelPlugins: ['lodash'],
  // extraBabelIncludes: [],
  // extraPostCSSPlugins: [],
  // cssModulesExcludes: [],
  // copy: [],
  // proxy: {},
  // sass: {},
  // 'manifest': {
  //   "basePath": '/',
  // },
  ignoreMomentLocale: true,
  // lessLoaderOptions: {},
  // cssLoaderOptions: {},
  // autoprefixer: { browserslist, flexbox: 'no-2019' },
  // uglifyJSOptions: {},
};
