import wepy from 'wepy'

const wxRequest = async (params = {}, url) => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })
  console.log(params, url)
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json',
      'X-Version': '1.0.0',
      'X-AppName':''
    }
  })
  wx.hideToast()
  console.log(res)
  return res
}

const fetchDetail = (params, url) => wxRequest(params, url)

module.exports = {
  fetchDetail,
}
