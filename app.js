//app.js
const forWechat = require('./utils/forWechat.js')
import extend from './mp-extend/index.js'
App = extend.App
Page = extend.Page
Component = extend.Component
App({
  globalData: {
    token: 'notoken',
    userInfo: null,
    fetchNeed: {
      a: 2,
      b: 2,
      tenantId: 100010,
      userId: '0_0'
    },
    headH: 20, /// 头部自定义的高度
    phoneModel: '', //手机型号
    //public 全局公共数据  会挂载到每个页面 --- globalData
    public: {
      my: 'hello world'
    }
  },
  onLaunch: function (options) {
    forWechat.updateManager()
    this.getPhoneInfo()
    this.getMenuInfo()
  },
  /**
   * 获取code
   */
  getCode(){
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  
  /**
   * 获取手机设备信息
   * @return {Function} callback
   * @return {Object} phoneInfo
   * 并给全局变量赋值 ios 44px   Android 48px
   */
  getPhoneInfo(){
    wx.getSystemInfo({
      success: (phoneInfo) => {
        if (phoneInfo.model.indexOf('iPhone') !== -1){
          this.globalData.phoneModel = 'IOS' 
          this.globalData.titleBarHeight = 44
        }else{
          this.globalData.phoneModel = 'Android'
          this.globalData.titleBarHeight = 48
        }
        this.globalData.barH = phoneInfo.statusBarHeight
        console.log('phoneInfo: ', phoneInfo)
      },
    })
  },
  /**
   * 获取胶囊信息
   */
  getMenuInfo(){
    const menu = wx.getMenuButtonBoundingClientRect()
    console.log('menu: ', menu)
  },
  /**
   * 拓展 wx.function  此处有什么用？
   */
  // navigateTo 延时200ms再跳转
  navigateTo(param){
    console.log('param: ', param)
    setTimeout(()=>{
      wx.navigateTo(param)
    },200)
  }
})
///

