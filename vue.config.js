const webpack = require('webpack');
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  devServer: {
    compress: true,
    allowedHosts: 'all'
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_OPTIONS_API__: true,
        __VUE_PROD_DEVTOOLS__: false,
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
      })
    ]
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          ...options.compilerOptions,
          isCustomElement: tag => ['field', 'block', 'category', 'xml', 'mutation', 'value', 'sep'].includes(tag)
        };
        return options;
      });
  }
});