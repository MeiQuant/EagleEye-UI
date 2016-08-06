<template>
  <div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">
            {{ platforms.count }}
          </p>
          <p class="subtitle">监测平台数</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ products.count }}</p>
          <p class="subtitle">监测产品数</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ assets.count }}</p>
          <p class="subtitle">监测资产数</p>
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ totalData.volume }}</p>
          <p class="subtitle">总交易额</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ totalData.users }}</p>
          <p class="subtitle">总用户</p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <p class="title">{{ totalData.returns }}</p>
          <p class="subtitle">总为用户赚取收益</p>
        </article>
      </div>
    </div>


    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">交易额曲线</h4>
          <div class="content">
            <chart :type="'line'" :data="chartData"></chart>
          </div>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          <h4 class="title">平台排行榜</h4>
          <p>这里应该是平台列表</p>
        </article>
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-vertical">
        <div class="tile">
          <div class="tile is-parent">
            <article class="tile is-child box">
              <p class="title">平台排行榜</p>
              <p class="subtitle">平台业绩排行</p>
              <div class="content">
                <p>这里是平台排行榜</p>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <h4 class="title">产品排行榜</h4>
            <p>这里应该是产品列表</p>
          </article>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Chart from 'vue-bulma-chartjs'
import store from '../../../vuex/store'

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

  data () {
    return {
      data: [350, 500, 550, 600, 700, 750]
    }
  },

  computed: {
    chartData () {
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
          data: this.data,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
          label: '总交易额'
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

  created () {
  }

}

</script>

<style lang="scss" scoped>
</style>
