import jsonp from 'common/js/jsonp'

function getURL(type, start = 0, count = 8) {
  return `api/v2/subject_collection/${ type }/items?os=ios&start=${ start }&count=${ count }`
}

export function getFictionBooks(start = 0, count = 8) {
  return jsonp(getURL('book_fiction', start, count)).then((data) => {
    return data
  })
}

export function getNonfictionBooks(start = 0, count = 8) {
  return jsonp(getURL('book_nonfiction', start, count)).then((data) => {
    return data
  })
}

export function getStoreBooks(start = 0, count = 8) {
  return jsonp(getURL('market_product_book_mobile_web', start, count)).then((data) => {
    return data
  })
}

export function getFindTopics() {
  return ['小波看书',
          '树上春树周边',
          '我凭名字认定了你',
          '不可饶恕的女人们',
          '爱欲书',
          '他们还写侦探小说',
          '人生识字始忧患',
          '詩歌書店']
}

export function getCategories() {
  return ['小说', '爱情',
          '历史', '外国文学',
          '青春', '励志',
          '随笔', '传记',
          '推理', '旅行',
          '奇幻', '经管']
}
