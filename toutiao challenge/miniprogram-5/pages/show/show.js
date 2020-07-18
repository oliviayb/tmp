
Page({
  data: {
    story:{}
  },

  onLoad: function (options) {
    let page = this;
    let id = options.id;
    let request = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
      method: 'GET',
      header: {'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      
      success(res) {
        page.setData({
          story: res.data
        })
      }
    };
    wx.request(request) 
  },

  // fetch comments on click
  showComments(event) {
    let data = event.currentTarget.dataset;
    let id = data.id;

    wx.navigateTo({
      url: `/pages/comments/comments?id=${id}`
    });
  },
})

