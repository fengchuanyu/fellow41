const db = wx.cloud.database();
const fellowStudent = db.collection("fellow_student");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentList:[]
  },
  getSchool(str){
    let school = ""
    switch(str){
      case 'heida': school="黑大";break;
      case 'linda': school="林大";break;
      case 'ligong': school="理工";break;
      case 'nongda': school="农大";break; 
    }
    return school;
    
  },

  getList(){
    fellowStudent.get().then((res)=>{
      console.log(res);
      let thisList = [];
      thisList = res.data.map((item)=>{
        item.school = this.getSchool(item.school);
        return item;
      })
      this.setData({
        studentList:thisList
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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