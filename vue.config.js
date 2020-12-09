module.exports = {
  publicPath: './',
  productionSourceMap: process.env.NODE_ENV === 'production' ? false : true,
  pluginOptions: {
    //build時にwebpackBundleAnalyzerのreport.htmlを自動で開かないようにする
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
