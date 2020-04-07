const path = require("path");
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
  }
}