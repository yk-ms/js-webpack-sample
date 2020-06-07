const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';

  return {
    entry: {
      bundle: './src/index.js'
    },
    output: {
      //出力先のフォルダ
      path: path.resolve(__dirname, 'dist'),
      //出力先のファイル名
      filename: '[name].js'
    },
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    optimization: {
      minimizer: IS_DEVELOPMENT ? [] : [
        new TerserPlugin({
          terserOptions: {
            compress: { drop_console: true }
          }
        })
      ]
    }
  }
};
