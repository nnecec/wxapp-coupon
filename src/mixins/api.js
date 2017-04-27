import wepy from 'wepy'

const wxRequest = async (params = {}, url, agentId = '') => {
  wx.showToast({
    title: '加载中',
    icon: 'loading'
  })
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json',
      'X-Version': '1.1',
      'X-AppName':'fansCoupon',
      'x-agent-app-id': agentId
    }
  })
  wx.hideToast()
  console.log(res)
  return res
}

const fetchDetail = (params, url, agentId) => wxRequest(params, 'https://adbaitai.com' + url, agentId)

module.exports = {
  fetchDetail
}
