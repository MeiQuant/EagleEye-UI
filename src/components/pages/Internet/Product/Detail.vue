<style>

</style>

<template>
  <div class="columns">
    <div class="column">
      <article class="box content">
        <h1>
          产品名称
        </h1>
        <p>
          所属平台
        </p>
        <p>
          产品类型
        </p>
        <p>交易额</p>
      </article>
    </div>
  </div>

  <div class="columns">
    <div class="column is-half">
      <article class="box">
        <h4 class="title">交易额曲线</h4>
        <div class="content">
          <chart :type="'line'" :data="volumeData"></chart>
        </div>
      </article>
    </div>
    <div class="column is-half">
      <article class="box">
        <h4 class="title">资产组合</h4>
        <div class="content">
          <chart :type="'pie'" :data="assetsData"></chart>
        </div>
      </article>
    </div>
  </div>

  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">资产列表</h4>
        <div class="table-responsive">
          <table class="table is-bordered is-striped is-narrow">
            <thead>
            <tr>
              <th>序号</th>
              <th>产品名称</th>
              <th>所属平台</th>
              <th>平均收益</th>
              <th>总交易额</th>
              <th>总用户数</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>1</td>
              <td>真融宝活期</td>
              <td>真融宝</td>
              <td>7.8%</td>
              <td>54,989,321,123</td>
              <td>168,087,2</td>
              <td>
                <a class="button is-small is-primary" href="#!/internet/product/detail/1">
                  查看详情
                </a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  // 读取id后向服务器请求相应id资料
  import Chart from 'vue-bulma-chartjs'
  import store from '../../../../vuex/store'

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

      assetsData () {
        return {
          labels: [
            '供应链金融',
            '小微信贷',
            '消费金融'
          ],
          datasets: [{
            data: [1000, 1200, 1300],
            backgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ],
            hoverBackgroundColor: [
              '#FF6384',
              '#36A2EB',
              '#FFCE56'
            ]
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

    }

  }

</script>
</script>
