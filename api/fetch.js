/**
 * @authoer heytoo
 * @time 2019-04-08
 */
const app = getApp();
const utils = require('../utils/util.js')
const config = require('../config.js')
const API_BASE_URL = config.publicPath
// const mService = 'eissoft-wx-member/'
const mService = ''
/**
 * @method request 发送请求 wx.request再次封装
 * @param {String} url 请求地址
 * @param {String} method 请求方式
 * @param {Object} data [data = {}] 请求参数
 * @param {Object} options [options = {}] 可填选项，配置项
 * @return {Function} then 返回函
 * 
 */
/**
 * @options 
 * @param {String} mservice [mservice = mService] 微服务地址
 */
const request = (url, method, data = {}, options = {}) => {
  // 1.请求地址
  let _url = API_BASE_URL + (options.mservice || mService) + url; 
  // 2.参数处理
  data = Object.assign({}, data, app.globalData.fetchNeed)

  // 3.是否链接传参
  if (['get', 'GET'].includes(method)){
    _url += utils.queryStr(data)
  }
  // 4.传输地址是否 code
  // _url = encodeURIComponent(_url)
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'access_token': app.globalData.token 
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function (callback) {
  const Promise = this.constructor;
  return this.then(
    function (value) {
      Promise.resolve(callback()).then(
        function () {
          return value;
        }
      );
    },
    function (reason) {
      Promise.resolve(callback()).then(
        function () {
          throw reason;
        }
      );
    }
  );
}

module.exports = request
