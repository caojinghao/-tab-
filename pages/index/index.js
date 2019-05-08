Page({
  data: {
    // 这里改变当前显示第几个tab
    currentTab: 1,
  },
  // tab滑动
  bindChange(e) {
    this.setData({
      currentTab: e.detail.current
    })
  },
  // 左
  onLeft() {
    this.setData({
      currentTab: 0
    })
  },
  // 、中
  onMiddle() {
    this.setData({
      currentTab: 1
    })
  },
  // 右
  onRight() {
    this.setData({
      currentTab: 2
    })
  },
})