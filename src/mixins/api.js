import wepy from 'wepy'

const fetchDetail = async(id) => {
  const api = 'https://adbaitai.com/1.0/h5/batch/search'
  const data = JSON.stringify({
    "itemDetail": {
      "ids": [id]
    },
    "itemRecommend": [
      {
        "id": id
      }
    ]
  })

  let res = await wepy
    .request(api + '?appKey=zdnz&data=' + encodeURI(data))
  return res.data.data.itemDetailInfoRes.data[0]

}

const fetch = async(url, params = {}) => {
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: params.data || {},
    header: {
      'Content-Type': 'application/json'
    }
  });
  console.log(res)
  return res;
}

module.exports = {
  fetchDetail,
  fetch
}