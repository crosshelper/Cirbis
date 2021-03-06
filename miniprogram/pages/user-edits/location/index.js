// miniprogram/pages/user-edits/location/index.js
const locations = require('../../../utils/locations.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    selectAddress: {},
    locationPlaceholder: "请选择地址",
    areaList: {}
  },

  save_btn(){
    wx.navigateBack({
      delta: 1
    })
  },

  select_location_btn() {
    this.setData({
      show: true
    })
  },

  location_select_change() {

  },

  location_select_cancel(e) {
    this.setData({
      show: false
    })
  },

  location_select_confirm(e) {
    console.log(e.detail.values)
    this.setData({
      selectAddress: e.detail.values,
      locationPlaceholder: "",
      show: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      areaList: locations.default
    })
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