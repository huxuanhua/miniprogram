import mpExtend from './mp-extend.js'

// 以mpExtend(...)的形式引入多个扩展
// 如果不需要某一个混入项的功能，直接注释掉即可

import extendPV from './simple/extend-PV.js'
import extendFunction from './simple/extend-function.js'

import extendPage from './complex/extend-page.js'
import extendGlobalData from './complex/extend-globalData.js'


// mpExtend(extendTest); // 这是一个比较完整的测试用例
mpExtend(extendFunction);
mpExtend(extendPV);

mpExtend(extendPage);
mpExtend(extendGlobalData);


// 暴露App、Page、Component构造函数
export default {
  App: mpExtend.App,
  Page: mpExtend.Page,
  Component: mpExtend.Component,
};