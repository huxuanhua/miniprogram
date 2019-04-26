const  formatTime = require('../../utils/util.js').formatTime

export default {
  
  Page: {
    onLoad() {
      console.log(`PV统计: 在${formatTime(new Date())} 打开了页面 ${this.__route__}`)
    }
  }
}