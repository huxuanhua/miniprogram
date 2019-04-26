// pages/tabBar/tempOne/index.js
const ajax = require('../../../api/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    clounms: ['tab1', 'tab2', 'tab3']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax.test()
    .then(res => {
      console.log('res： ',res)
      this.changeLoading()
      
      
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
  //
  gototest(){
    this.navigateTo({
      name: 'test1',
      data: {
        ni: '123',
        hao: 456,
        a: true
      }
    })
  }

})