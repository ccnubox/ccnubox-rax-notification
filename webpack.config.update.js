// webpack.config.update.js
const path = require('path');

module.exports = function update(webpackConfig) {
  webpackConfig.entry["com.muxistudio.noti.list"] = [
    path.resolve(__dirname, "./src/index.js")
  ];
  webpackConfig.entry["com.muxistudio.noti.detail"] = [
    path.resolve(__dirname, "./src/second.js")
  ];
  console.log("here", webpackConfig);
  return webpackConfig;
};