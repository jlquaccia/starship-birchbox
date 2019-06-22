
module.exports = () => {
  // api.cache(true);
  //
  // const presets = [
  //   [
  //     '@babel/preset-env',
  //     {
  //       useBuiltIns: 'entry',
  //       corejs: 3,
  //       targets: {
  //         browsers: ['last 3 version', 'ie >= 11']
  //       }
  //     }
  //   ],
  //   '@babel/preset-react',
  //   '@babel/preset-flow'
  // ];
  // const plugins = [
  //   '@babel/transform-react-constant-elements',
  //   '@babel/transform-react-inline-elements',
  //   'transform-react-remove-prop-types',
  //   'transform-react-pure-class-to-function',
  //   '@babel/plugin-transform-runtime',
  //   'react-hot-loader/babel',
  //   'react-loadable/babel',
  //
  //   // Stage 2 https://github.com/babel/babel/tree/master/packages/babel-preset-stage-2
  //   ['@babel/plugin-proposal-decorators', { legacy: true }],
  //   '@babel/plugin-proposal-function-sent',
  //   '@babel/plugin-proposal-export-namespace-from',
  //   '@babel/plugin-proposal-numeric-separator',
  //   '@babel/plugin-proposal-throw-expressions',
  //
  //   // Stage 3
  //   '@babel/plugin-syntax-dynamic-import',
  //   '@babel/plugin-syntax-import-meta',
  //   ['@babel/plugin-proposal-class-properties', { loose: true }],
  //   '@babel/plugin-proposal-json-strings'
  // ];

  return {
    extends: '../node_modules/starforge/babel.config.js'
  };
};
