const { encode, decode, queryStr } = require('../utils/util.js')
const { routeMap, encodeKey } = require('./store.js');
/**
 * 提炼数据
 * @param {object} option
 */
function getOption(option = {}) {
  const data = option[encodeKey];
  if (data) {
    return decode(data);
  }
  return null;
}
/**
 * 路由名称转路径
 * @param {string} name 路由名
 */
function name2path(name) {
  return name.replace(/\./g, '/');
}
/**
 * 路由解析
 * @param {string} name 路由名
 */
function routeParser(name) {
  if (!name) {
    throw new Error('路由名字不能为空');
  }
  let route = routeMap[name];
  if (!route) {
    const path = `/pages/${name2path(name)}/index`;
    route = routeMap[path] || {
      type: 'page',
      path,
    };
  }
  return route;
}
/**
 * 跳转页面前准备
 */
function gotoUrl(routeObj = {}){
  const {
    name, data, query, success, fail, complete,
  } = routeObj;
  let url = '';
  const queryData = query || {};
  if (!name) {
    throw new Error('路由名称不能为空');
  }
  const route = routeParser(name);
  if (!route) {
    throw new Error('没有匹配的路由规则');
  }
  url = route.path;
  
  if (data) {
    queryData[encodeKey] = encode(data);
  }
  if (route.type !== 'tab') {
    url += `?${queryStr(queryData)}`;
  }
  return {
    url,
    route
  }
}
/**
 * 跳转页面
 * @param {object} routeObj { name, data, success, fail, complete }
 */
function forward(routeObj = {}, isReplace = false) {
  const {
    name, data, query, success, fail, complete,
  } = routeObj;
  const { url, route} = gotoUrl(routeObj)
  const opt = {
    url,
    success,
    fail,
    complete,
  };
  if (!url) {
    throw new Error('路由url不能为空');
  }
  if (isReplace) {
    wx.redirectTo(opt);
    return;
  }
  switch (route.type) {
    case 'tab':
      wx.switchTab(opt);
      break;
    default:
      wx.navigateTo(opt);
      break;
  }
}

/**
 * 前进
 * @param {object} option
 */
function navTo(option) {
  return forward.call(this, option);
}

/**
 * 替换
 * @param {object} option
 */
function redirectTo(option) {
  return forward.call(this, option, true);
}
/**
 * 关闭所有页面，打开到应用内的某个页面
 * @param {object} routeObj { name, data, success, fail, complete }
 */
function relaunch(routeObj = {}) {
  const {
    name, data, query, success, fail, complete,
  } = routeObj;
  const { url, route } = gotoUrl(routeObj)
  wx.reLaunch({
    url,
    success,
    fail,
    complete,
  });
}

module.exports = {
  getOption,
  navTo,
  redirectTo,
  relaunch,
};