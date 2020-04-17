// miniprogram/pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    str:"hello fellow41",
    arr:['a','b','c','d','e'],
    num:0,
    objArr:[
      {
        name:"小a",
        age:18
      },
      {
        name:"小b",
        age:19
      },
      {
        name:"小c",
        age:16
      },
      {
        name:"小d",
        age:17
      }
    ]
  },
  goPageOne(){
    // wx.navigateTo({
    //   url: '../page_one/page_one?id=fellow41',
    // }) 
    wx.switchTab({
      url: '../page_one/page_one?id=fellow41',
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
    console.log("com")
    setTimeout(()=>{
      wx.stopPullDownRefresh();
    },200)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("com")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})