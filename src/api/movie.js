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
