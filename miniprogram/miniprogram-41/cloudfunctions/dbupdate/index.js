// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({
    env: "release-a38306"
  })

const db = cloud.database()
const fellowTodo = db.collection("fellow_todo");
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  try {
    return await fellowTodo.where({
      _id:_.in(event.id)
    })
    .update({
      data: {
        isDone:true
      },
    })
  } catch(e) {
    console.error(e)
  }
}