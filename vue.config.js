module.exports = {
  lintOnSave: false,

  devServer: {
    disableHostCheck: true,
    port: 8080,
    host: '0.0.0.0',
    hot: true,
    public: '192.168.86.52:8080'

  },

  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        args.compilerOptions.whitespace = 'preserve';
      })
  }
}
