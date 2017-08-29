import jsonp from 'common/js/jsonp'

function getURL(type) {
  return `api/v2/subject_collection/${ type }/items?os=ios&start=0&count=8`
}

export function getShowingMoives() {
  return jsonp(getURL('movie_showing')).then((data) => {
    return data
  })
}

export function getFreeMoives() {
  return jsonp(getURL('movie_free_stream')).then((data) => {
    return data
  })
}

export function getLatestMoives() {
  return jsonp(getURL('movie_latest')).then((data) => {
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
          '2015终极期待', '经典韩国电影——收集100部']
}
