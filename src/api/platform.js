/**
 * Created by alfred on 16/8/17.
 */
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

function getAllPlatforms (cb) {
  Vue.http.jsonp('http://api.smallwolf.cn/getPlatforms').then(function (data) {
    cb(data)
  }, function (err) {
    console.log(err)
  })
}

export default {
  getAllPlatforms: getAllPlatforms
}
