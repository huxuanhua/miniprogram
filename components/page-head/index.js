// components/page-head/index.js
const app = getApp()
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: [Number,String],
      value: '231'
    },
    loading: {
      type: Boolean,
      value: true,
      observer: function(newVal, oldVal){
        if (!newVal) return
        wx.hideLoading()
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    headH: ''
  },
  /**
   * 生命周期
   */
  lifetimes: {
    attached(){
      this.setData({
        headH: app.globalData.barH,
        titleBarHeight: app.globalData.titleBarHeight
      })
      //
      wx.showLoading({
        title: '加载中...',
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
  }
})
