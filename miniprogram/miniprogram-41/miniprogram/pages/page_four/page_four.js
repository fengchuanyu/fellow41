const db = wx.cloud.database();
const todos = db.collection("fellow_todo");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:"",
    todoList:[],
    isDone:false,
    checkItems:[]
  },
  //标记删除
  delCheck(){
    let thisIds = this.data.checkItems;
    wx.cloud.callFunction({
      name:"dbdelete",
      data:{
        id:thisIds
      }
    }).then((res)=>{
      this.getTodoList();
    })
  },
  //标记完成事件
  doneCheck(){
    let thisIds = this.data.checkItems;
    wx.cloud.callFunction({
      name:"dbupdate",
      data:{
        id:thisIds
      }
    }).then((res)=>{
      this.getTodoList();
    })
  },
  //复选框点选中
  checkboxChange(e){
    this.setData({
      checkItems:e.detail.value
    })
  },
  //切换列表状态（完成或未完成）
  switchDone(e){
    this.setData({
      isDone:e.detail.value
    })
    this.getTodoList();
  },
  //获取文本框中的值
  saveInfo(e){
    this.setData({
      inpVal:e.detail.value
    })
  },

  //标记完成
  setDone(e){
    let thisId = e.target.dataset.id;
    todos.doc(thisId).update({
      data:{
        isDone:true
      }
    }).then((res)=>{
      this.getTodoList();
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
    todos.where({
      isDone:this.data.isDone
    }).get().then((res)=>{
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