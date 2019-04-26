// components/nav-table/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    clounms: {
      type: Array,
      value: () => []
    },
    // 初始时选中的索引值
    initIndex: {
      type: Number,
      value: 0
    },
    // 背景颜色
    background: {
      type: String,
      value: '#fff'
    },
    bottom: {
      type: [String,Number],
      value: '8rpx'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    kindStyle: {},
    kindIndex: 0,
    navs: [],
    width: '',
    left: '',
  },
  /**
   * 生命周期
   */
  ready(){
    const query = this.createSelectorQuery()
    // 获取dom是个异步的过程
    query.selectAll('.nav-item').boundingClientRect(rects => {
      this.data.navs = rects
      this.initWidth()
    }).exec()
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    initWidth() {
      let len = this.data.clounms.length - 1
      let index = this.data.initIndex > len ? len : this.data.initIndex
      this.tableMove(index)
    },
    tableMove(event) {
      let index = Number.isInteger(event) ? event : event.currentTarget.dataset.index  // 初始化的时候， event即为索引值
      let elem = this.data.navs[index]  
      // 
      this.setData({
        kindIndex: index,
        left: elem.left + 'px',
        width: elem.width + 'px'
      })
      this.triggerEvent('change', {
        index: index
      })
    }
  }
})
