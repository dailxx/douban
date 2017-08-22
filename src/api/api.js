import axios from 'axios';

export function getRecommendFeedList(alt = 'json', loc_id = '108288', for_mobile = '1') {
  return axios.get('/api/v2/recommend_feed?' + 'alt=' + alt + '&loc_id=' + loc_id + '&for_mobile=' + for_mobile)
    .then(function (list) {
      return list.data;
    });
}
