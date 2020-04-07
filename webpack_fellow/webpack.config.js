const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode:"development",
  //入口
  entry:{
    index:"./src/index.js"
  },
  //出口
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"[name].js",
    publicPath:"http://127.0.0.1:8081/"
  },
  //插件
  plugins:[
    new HtmlPlugin({
      minify:{
        removeAttributeQuotes:true
      },
      hash:true,
      template:"./src/index.html"
    }),
    new ExtractTextPlugin("css/main.css")
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        // use:['style-loader','css-loader']
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:"css-loader"
        })
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:"url-loader",
            options:{
              limit:500,
              outputPath:"images/"
            }
          }
        ]
      }
    ]
  },
  //服务
  devServer:{
    contentBase:path.resolve(__dirname,"dist"),
    host:"127.0.0.1",
    compress:true,
    port:"8081",
    open:true
  }
}