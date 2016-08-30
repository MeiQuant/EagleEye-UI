<template>
  <div>
    <div class="columns">
      <div class="column is-one-third">
        <article class="box">
          <p class="title">
            {{ platforms.count }}
          </p>
          <p class="subtitle">监测平台数</p>
        </article>
      </div>
      <div class="column is-one-third">
        <article class="box">
          <p class="title">{{ products.count }}</p>
          <p class="subtitle">监测产品数</p>
        </article>
      </div>
      <div class="column">
        <article class="box">
          <p class="title">{{ assets.count }}</p>
          <p class="subtitle">监测资产数</p>
        </article>
      </div>
    </div>
    <div class="columns">
      <div class="column is-one-third">
        <article class="box">
          <p class="title">{{ totalData.volume }}</p>
          <p class="subtitle">总交易额</p>
        </article>
      </div>
      <div class="column is-one-third">
        <article class="box">
          <p class="title">{{ totalData.users }}</p>
          <p class="subtitle">总用户</p>
        </article>
      </div>
      <div class="column">
        <article class="box">
          <p class="title">{{ totalData.returns }}</p>
          <p class="subtitle">总为用户赚取收益</p>
        </article>
      </div>
    </div>


    <div class="columns">
      <div class="column is-half">
        <article class="box">
          <h4 class="title">交易额</h4>
          <div class="content">
            <chart :type="'line'" :data="volumeData"></chart>
          </div>
        </article>
      </div>
      <div class="column is-half">
        <article class="box">
          <h4 class="title">用户</h4>
          <div class="content">
            <chart :type="'line'" :data="usersData"></chart>
          </div>
        </article>
      </div>
    </div>


    <div class="columns">
      <div class="column is-half">
        <article class="box">
          <p class="title">平台排行榜</p>
          <p class="subtitle">平台业绩排行</p>
          <div class="content">
            <p>这里是平台排行榜</p>
          </div>
        </article>
      </div>
      <div class="column is-half">
        <article class="box">
          <p class="title">产品排行榜</p>
          <p class="subtitle">产品业绩排行</p>
          <div class="content">
            <p>这里是产品排行榜</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
import store from '../../../vuex/store'
import { initPlatforms } from '../../../vuex/actions'

export default {
  components: {
    Chart
  },
  vuex: {
    getters: {
      platforms: state => state.platforms,
      products: state => state.products,
      assets: state => state.assets
    }
  },

  computed: {
    volumeData () {
      return {
        labels: [
          '16/03',
          '16/04',
          '16/05',
          '16/06',
          '16/07',
          '16/08'
        ],
        datasets: [{
          data: [350, 500, 550, 600, 700, 750],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          label: '总交易额'
        }]
      }
    },

    usersData () {
      return {
        labels: [
          '16/03',
          '16/04',
          '16/05',
          '16/06',
          '16/07',
          '16/08'
        ],
        datasets: [{
          data: [1000, 1200, 1300, 1350, 1360, 1400],
          fill: false,
          borderColor: 'rgba(13,102,192,1)',
          label: '总用户数'
        }]
      }
    },

    totalData () {
      var total = {
        volume: 0,
        users: 0,
        returns: 0
      }
      var i = 0
      var platformList = store.state.platforms.platformList
      var max = platformList.length

      for (; i < max; i = i + 1) {
        total.volume = total.volume + platformList[i].volume
        total.users = total.users + platformList[i].users
        total.returns = total.returns + platformList[i].returns
      }
      return total
    }
  },

  created: function () {
    initPlatforms(store)
  }

}

</script>

<style lang="scss" scoped>
</style>
