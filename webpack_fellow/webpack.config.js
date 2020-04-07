const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
  mode:"development",
  //入口
  entry:{
    index:"./src/index.js"
  },
  //出口
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].js"
  },
  //插件
  plugins:[
    new HtmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:"./src/index.html"
    })
  ],
  //服务
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),
    host:"127.0.0.1",
    compress:true,
    port:"8081",
    open:true
  }
}