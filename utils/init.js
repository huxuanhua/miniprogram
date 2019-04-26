/**@overload
 * @methods setPage page重载
 * @set onLoad
 * 在这里可以做很多事
 * -----
 * 重写 mp-extend：  小项目人数少直接用init
 * 多人合作建议mp-extend
 */
const oldPage = Page
Page = param => {
  const { onLoad, onReady } = param
  param.data = {
    ...param.data,
    loading: false,
    
  }
  // 原方法不能用箭头函数 --- 作用域
  // 重载 onLoad
  param.onLoad = function (oldOptions) {
    let a = oldOptions
    if (typeof onLoad === 'function') {
      onLoad.call(this, a)
    }
  }
  // 重载onready
  param.onReady = function(oldOptions){

    if (typeof onReady === 'function') {
      onReady.call(this, oldOptions)
    }
  }
  // 控制loading 开关 隐藏
  param.changeLoading = function(){
    if(this.data.loading) return
    this.setData({loading: true})
  }
  
  return oldPage(param)
}