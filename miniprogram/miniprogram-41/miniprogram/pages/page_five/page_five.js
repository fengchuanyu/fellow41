// miniprogram/pages/page_five/page_five.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrl:""
  },
  //选取图片
  chooseImg(){
    wx.chooseImage({
      complete: (res) => {
        console.log(res);
        this.setData({
          imgUrl:res.tempFilePaths[0]
        })
      },
    })
  },
  //上传图片
  upImg(){
    let ranStr = Math.random().toString(16).substr(2);
    let fName = this.data.imgUrl.replace(/.+\./,"")
    wx.cloud.uploadFile({
      cloudPath:"fellow41/"+ranStr+"."+fName,
      filePath:this.data.imgUrl
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