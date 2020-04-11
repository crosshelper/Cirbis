// miniprogram/pages/me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  name_edit_btn(){
    wx.navigateTo({
      url: '../user-edits/name/index',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  phone_edit_btn(){
    wx.navigateTo({
      url: '../user-edits/phone/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  city_edit_btn() {
    wx.navigateTo({
      url: '../user-edits/location/index',
    })
  },

  switch_position_btn() {
    wx.navigateTo({
      url: '../helper/helper-signup/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  privacy_btn(){
    wx.navigateTo({
      url: '../user-edits/privacy/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  feedback_btn(){
    wx.navigateTo({
      url: '../user-edits/feedback/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  about_us_btn(){
    wx.navigateTo({
      url: '../user-edits/about-us/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  sign_out_btn(){
    console.log("已经登出")
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