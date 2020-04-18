// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'release-a38306'
})
const db = cloud.database();
const fellowDb = db.collection("fellow_db"); 

// 云函数入口函数
exports.main = async (event, context) => {
  
  let res = await fellowDb.get();

  return res
}