// miniprogram/pages/helper/helper-me/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  name_edit_btn() {
    wx.navigateTo({
      url: '../../user-edits/name/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  phone_edit_btn() {
    wx.navigateTo({
      url: '../../user-edits/phone/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  city_edit_btn() {
    wx.navigateTo({
      url: '../../user-edits/location/index',
    })
  },

  auth_btn(){
    wx.navigateTo({
      url: '../helper-auth/index',
    })
  },

  bio_btn(){
    wx.navigateTo({
      url: '../helper-bio/index',
    })
  },

  skill_btn(){
    wx.navigateTo({
      url: '../helper-skills/index',
    })
  },

  transfor_bank_btn(){
    wx.navigateTo({
      url: '../helper-transfor-bank/index',
    })
  },

  switch_position_btn() {
    wx.reLaunch({
      url: '../../home/index',
    })
  },

  privacy_btn() {
    wx.navigateTo({
      url: '../../privacy/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  feedback_btn() {
    wx.navigateTo({
      url: '../../feedback/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  about_us_btn() {
    wx.navigateTo({
      url: '../../about-us/index',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  sign_out_btn() {
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