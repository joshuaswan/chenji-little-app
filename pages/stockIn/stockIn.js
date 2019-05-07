// pages/stockIn/stockIn.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderNumber: '',
    orderList: {},
    storeSelect: true,
    orderPrefixList: ['D','L'],
    orderPrefixIndex: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo.staffType === 'owner') {
      this.setData({
        storeSelect : false
      })
    } else if (app.globalData.userInfo.staffType === 'bj') {
      this.setData({
        storeSelect : true,
        orderPrefixIndex : 0
      })
    } else if (app.globalData.userInfo.staffType === 'dl') {
      this.setData({
        storeSelect : true,
        orderPrefixIndex : 1
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 跳转到新增货品界面
   */
  addGoods(){
    if (this.data.orderNumber === null || this.data.orderNumber === ''){

    }else{
      const orderNumberString = this.data.orderPrefixList[this.data.orderPrefixIndex] + this.data.orderNumber
      wx.request({
        url: app.globalData.serverUrl + 'orderList/checkOrderNumber/' + orderNumberString,
        method: 'GET',
        success(res){
          if(res.data === 'ok'){
            wx.navigateTo({
              url: '../addGoods/addGoods?orderNumber=' + orderNumberString,
            })
          }else{
            
          }
        }
      })
    }
  },
  orderPrefixChange(e){
    this.setData({
      orderPrefixIndex: e.detail.value
    })
  },
  orderNumberBind(e){
    this.setData({
      orderNumber: e.detail.value
    })
  }
})
