// pages/helper/helper-home/index.js
// pages/main/page1/index.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    height: {
      type: Number,
      value: app.homePageHeight
    },
    onShow: {
      type: Boolean,
      value: false,
      observer: 'onShowHideChange'
    },
  },

  data: {
    scrollHeight:0,
    balence:"2990.00"
  },

  methods: {
    onShowHideChange(show) {
      if (show) {
        console.log('page1 show')
        let screenHeight = wx.getSystemInfoSync().windowHeight;
        let scrollHeight = screenHeight - 340;
        this.setData({
          scrollHeight: scrollHeight
        })
      } else {
        console.log('page1 hide')
      }
    },
    transfer_bank_btn() {
      wx.showToast({
        title: '213',
      })
    },
  }
})