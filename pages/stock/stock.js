// pages/stock/stock.js
const app = getApp();
const util = require("../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsNameList: [],
    goodsTypeList: [],
    goodsNameIndex: 0,
    goodsTypeIndex: 0,
    orderList: []
  },

  bindGoodsTypePicker(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goodsTypeIndex: e.detail.value
    })
  },
  bindGoodsNamePicker(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      goodsNameIndex: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const currentPage = this
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
