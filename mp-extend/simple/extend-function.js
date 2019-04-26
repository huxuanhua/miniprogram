const router = require('../../router/index.js')
/**
 * 为所有页面添加 functions
 */
export default {
  Page: {
    onLoad(options){
      this.data.options = router.getOption(options)
      console.log('this.data: ', this.data)
    },
    // 控制loading 开关 隐藏
    changeLoading() {
      if (this.data.loading) return
      this.setData({ loading: true })
    },
    /**
     * router
     */
    // 获取option信息
    getOption: router.getOption,
    // 跳转  [naviagteTo, switchTab]
    navigateTo: router.navTo,
    redirectTo: router.redirectTo,
    relaunch: router.relaunch
  },
  Component: {
    created(){
      
    }
  }
}
