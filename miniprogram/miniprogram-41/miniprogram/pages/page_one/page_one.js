// miniprogram/pages/page_one/page_one.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0
  },
  addHandle(e){
    console.log(e.target.id,e.target.dataset.step);
    let thisStep = Number.parseInt(e.target.dataset.step)
    this.setData({
      num:this.data.num+thisStep
    })
  },
  tapHandle1(){
    console.log("box1");
  },
  tapHandle2(){
    console.log("box2");
  },
  tapHandle3(){
    console.log("box3");
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
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