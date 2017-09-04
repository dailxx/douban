import jsonp from 'common/js/jsonp'

function getURL(type, start = 0, count = 8) {
  return `api/v2/subject_collection/${ type }/items?os=ios&start=${ start }&count=${ count }`
}

export function getShowingMoives(start = 0, count = 8) {
  return jsonp(getURL('movie_showing', start, count)).then((data) => {
    return data
  })
}

export function getFreeMoives(start = 0, count = 8) {
  return jsonp(getURL('movie_free_stream', start, count)).then((data) => {
    return data
  })
}

export function getLatestMoives(start = 0, count = 8) {
  return jsonp(getURL('movie_latest', start, count)).then((data) => {
    return data
  })
}

export function getFindTopics() {
  return ['同时入选IMDB250和豆瓣电影250的电影',
          '带你进入不正常的世界',
          '用电【影】来祭奠逝去的岁月',
          '女孩们的故事【电影】',
          '科幻是未来的钥匙——科幻启示录【科幻题材】',
          '美国生活面面观',
          '2015终极期待',
          '经典韩国电影——收集100部']
}

export function getCategories() {
  return ['经典', '冷门佳片',
          '豆瓣高分', '动作',
          '喜剧', '爱情',
          '嫌疑', '恐怖',
          '科幻', '治愈',
          '文艺', '成长',
          '动画', '华语',
          '欧美', '韩国',
          '日本']
}
