import Vue from 'vue'
import Vuex from 'vuex'

import config from '../config'

const { menu, sidebar } = config

Vue.use(Vuex)

const store = new Vuex.Store({

  state: {
    menu,
    sidebar,
    platforms: {
      count: 100,
      platformList: [
        {
          name: '平台1',
          volume: 10000.00,
          users: 10,
          returns: 29.2
        },
        {
          name: '平台2',
          volume: 2222.00,
          users: 14,
          returns: 2.8
        }
      ]
    },
    products: {
      count: 200
    },
    assets: {
      count: 99999
    },
    users: {
      count: 1000
    }
  },

  mutations: {

  }
})

export default store
