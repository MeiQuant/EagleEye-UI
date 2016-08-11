<style lang="scss">
  .table-responsive {
    display: block;
    width: 100%;
    min-height: .01%;
    overflow-x: auto;
  }
</style>

<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article class="tile is-child box">
        <h4 class="title">产品列表</h4>
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


