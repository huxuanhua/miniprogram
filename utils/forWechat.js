/**
 * 检测版本更新
 */
const  updateManager = () =>{
  if (wx.canIUse('getUpdateManager')) { // 判断是否支持getUpdateManager
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
  }
}
const forWechat = {
  updateManager: updateManager
}
module.exports = forWechat