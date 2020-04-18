const db = wx.cloud.database();//初始化数据库
const fellowDb = db.collection("fellow_db");//获取数据库中某个集合
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inpVal:""
  },
  //获取文本框中的值
  getInpVal(e){
    this.setData({
      inpVal:e.detail.value
    })
  },
  //像数据库中添加数据
  addHandle(){
    fellowDb.add({
      data:{
        inpVal:this.data.inpVal,
        isDone:false
      }
    }).then((res)=>{
      console.log(res);
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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