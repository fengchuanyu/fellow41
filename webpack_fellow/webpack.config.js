const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require("webpack");
const glob = require("glob");
const PurifyCSSPlugin = require("purifycss-webpack");
const entry = require("./webpack_config/entry");

module.exports = {
  mode:"development",
  //入口
  // entry:entry,
  entry,
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
    new ExtractTextPlugin("css/main.css"),
    new webpack.ProvidePlugin({
      $:"jquery"
    }),
    new PurifyCSSPlugin({
      paths:glob.sync(path.join(__dirname,"./src/*.html"))
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        // use:['style-loader','css-loader']
        use:ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:"css-loader",
            options:{importLoaders:1}
          },"postcss-loader"]
        })
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[
          {
            loader:"url-loader",
            options:{
              limit:500,
              outputPath:"images/",
              esModule:false
            }
          }
        ]
      },
      {
        test:/\.(htm|html)$/,
        loader:"html-withimg-loader"
      },
      {
        test:/\.scss$/,
        // use:["style-loader","css-loader","sass-loader"]
        use:ExtractTextPlugin.extract({
          use:["css-loader","sass-loader"],
          fallback:"style-loader"
        })
      },
      {
        test:/\.js$/,
        use:[{
          loader:"babel-loader",
          options:{
            presets:['@babel/preset-env']
          }
        }],
        exclude:"/node_modules/"
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