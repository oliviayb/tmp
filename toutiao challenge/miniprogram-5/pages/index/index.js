//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    stories: []
  },

  showStory(event) {
    let data = event.currentTarget.dataset;
    let id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },


  onLoad: function (options) {
    let page = this;
    let id = options.id;
    let request = {
      url: 'https://cloud.minapp.com/oserve/v1/table/84988/record/',
      method: 'GET',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      success(res){
        console.log(res)

        page.setData({
          stories: res.data.objects
        })
      }
    }
    wx.request(request);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
