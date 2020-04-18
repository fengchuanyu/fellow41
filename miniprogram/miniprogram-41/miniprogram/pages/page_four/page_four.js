const db = wx.cloud.database();
const todos = db.collection("fellow_todo");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:"",
    todoList:[]
  },
  //获取文本框中的值
  saveInfo(e){
    this.setData({
      inpVal:e.detail.value
    })
  },
  //添加待办事项
  addHandle(){
    if(this.data.inpVal){
      todos.add({
        data:{
          title:this.data.inpVal,
          isDone:false
        }
      }).then((res)=>{
        this.getTodoList();
      })
    }else{
      wx.showToast({
        title: '文本框内容为空！',
        icon:"none"
      })
      
    }
  },
  //获取数据
  getTodoList(){
    wx.showLoading({
      title: '加载中...',
    })
    todos.get().then((res)=>{
      console.log(res);
      this.setData({
        todoList:res.data
      })
      wx.hideLoading();
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTodoList();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})