// pages/comments/comments.js
Page({
  data: {
    comments: []
  },
  voteComment(event) {
    let page = this

    let data = event.currentTarget.dataset;
    let votes = data.votes;
    let new_votes = { votes: votes + 1 }

    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      data: new_votes,

      success(res) {
        // new comment from response
        let new_comment = res.data;
        // all the page comments
        let comments = page.data.comments;
        // find the comment from page comments to update based on unique id
        let comment = comments.find(comment => comment._id == new_comment.id);
        // update comment
        comment.votes = new_comment.votes;
        // update the page comments
        page.setData({comments: comments})
        // set comment data
        console.log(res)
      }
    })
  },

  deleteComment(event) {
    let data = event.currentTarget.dataset;
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'}, // API key from Above
      success() {
        // no need for response data
        // redirect to index page when done

      }
    });
  
  },
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this;
    let id = options.id;
    let request = {
      url:'https://cloud.minapp.com/oserve/v1/table/85188/record/',
      method: 'GET',
      header: {'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
      
      data: {
      where: {
        "story_id": {"$eq":id}
        } 
      },
      success(res){
        console.log(res)

        page.setData({
          comments: res.data.objects
        })
      }
    }
    wx.request(request);
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})