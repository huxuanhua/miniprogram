const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * @method queryStr 将参数转换为string
 * @param {Object} obj 
 * @return {String} target 目标字符串
 * 
 */
const queryStr = (obj) => {
  if(!obj){
    throw new Error('obj不能为空 ---- queryStr： ')
  }
  let target = Object.keys(obj).map(v => {
    typeof obj[v] === 'string' && (obj[v] = obj[v].trim())
    if (obj[v] === 0 || obj[v]){
      return `${v}=${obj[v]}`
    } 
  }).join('&');
  return target
}
/**
 * 编码
 * @param {object} data
 */
const encode = (data) => encodeURIComponent(JSON.stringify(data));
/**
 * 解码
 * @param {object} code
 */
const decode = (code) => JSON.parse(decodeURIComponent(code));

module.exports = {
  formatTime: formatTime,
  queryStr: queryStr,
  encode,
  decode
}
