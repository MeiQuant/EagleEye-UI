import config from './config'
import init from './init'

init(config)

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import NProgress from 'nprogress'
import './transitions'

Vue.use(Router)
Vue.use(Resource)

import App from './App'
import Dashboard from './components/pages/Dashboard/'

const { sidebar } = config
const router = new Router({
  saveScrollPosition: true,
  transitionOnLoad: true,
  linkActiveClass: 'is-active'
})

Vue.http.interceptors.push((request, next) => {
  NProgress.inc(0.2)

  next((response) => {
    NProgress.done()
    return response
  })
})

router.beforeEach(({ next }) => {
  NProgress.start()
  if (sidebar.isMobile && sidebar.opened) {
    sidebar.opened = false
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

const lazyLoading = (path, ext = '.vue') => {
  return (resolve) => {
    require([`${path}${ext}`], resolve)
  }
}

router.map({
  // '/login': {
  //   name: 'Login',
  //   component: Login
  // },
  '/dashboard': {
    name: 'Dashboard',
    component: Dashboard
  },

  '/internet': {
    name: 'Internet',
    component: lazyLoading('./components/pages/Internet/Index'),
    subRoutes: {
      '/platform': {
        name: 'Platform',
        component: lazyLoading('./components/pages/Internet/Platform/Index'),
        subRoutes: {
          '/list': {
            name: 'Platforms',
            component: lazyLoading('./components/pages/Internet/Platform/List')
          },
          '/detail/:id': {
            name: 'PlatformDetail',
            component: lazyLoading('./components/pages/Internet/Platform/Detail')
          }
        }
      },
      '/product': {
        name: 'Product',
        component: lazyLoading('./components/pages/Internet/Product/Index'),
        subRoutes: {
          '/list': {
            name: 'Products',
            component: lazyLoading('./components/pages/Internet/Product/List')
          },
          '/detail/:id': {
            name: 'ProductDetail',
            component: lazyLoading('./components/pages/Internet/Product/Detail')
          }
        }
      },
      '/asset': {
        name: 'Asset',
        component: lazyLoading('./components/pages/Internet/Asset/Index'),
        subRoutes: {
          '/list': {
            name: 'Assets',
            component: lazyLoading('./components/pages/Internet/Asset/List')
          },
          '/detail/:id': {
            name: 'AssetDetail',
            component: lazyLoading('./components/pages/Internet/Asset/Detail')
          }
        }
      }
    }
  },
  // 下面是demo页面，可删除
  // http://router.vuejs.org/en/lazy.html
  '/charts/chartJs': {
    name: 'ChartJs',
    component: lazyLoading('./components/pages/Demo/Charts/ChartJs')
  },
  '/charts/chartist': {
    name: 'Chartist',
    component: lazyLoading('./components/pages/Demo/Charts/Chartist')
  },
  '/charts/peity': {
    name: 'Peity',
    component: lazyLoading('./components/pages/Demo/Charts/Peity')
  },
  '/charts/plotly': {
    name: 'Plotly',
    component: lazyLoading('./components/pages/Demo/Charts/Plotly')
  },
  '/ui': {
    name: 'UI',
    component: lazyLoading('./components/pages/Demo/UI/index'),
    subRoutes: {
      '/typography': {
        name: 'Typography',
        component: lazyLoading('./components/pages/Demo/UI/Typography')
      },
      '/buttons': {
        name: 'Buttons',
        component: lazyLoading('./components/pages/Demo/UI/Buttons')
      },
      '/icons': {
        name: 'Icons',
        component: lazyLoading('./components/pages/Demo/UI/Icons')
      },
      '/form': {
        name: 'Form',
        component: lazyLoading('./components/pages/Demo/UI/Form')
      }
    }
  },
  '/components': {
    name: 'Components',
    component: lazyLoading('./components/pages/Demo/Components/index'),
    subRoutes: {
      '/backtotop': {
        name: 'BackToTop',
        component: lazyLoading('./components/pages/Demo/Components/BackToTop')
      },
      '/collapse': {
        name: 'Collapse',
        component: lazyLoading('./components/pages/Demo/Components/Collapse')
      },
      '/datepicker': {
        name: 'Datepicker',
        component: lazyLoading('./components/pages/Demo/Components/Datepicker')
      },
      '/emoji': {
        name: 'Emoji',
        component: lazyLoading('./components/pages/Demo/Components/Emoji')
      },
      '/message': {
        name: 'Message',
        component: lazyLoading('./components/pages/Demo/Components/Message')
      },
      '/modal': {
        name: 'Modal',
        component: lazyLoading('./components/pages/Demo/Components/Modal')
      },
      '/notification': {
        name: 'Notification',
        component: lazyLoading('./components/pages/Demo/Components/Notification')
      },
      '/progress': {
        name: 'Progress',
        component: lazyLoading('./components/pages/Demo/Components/Progress')
      },
      '/rating': {
        name: 'Rating',
        component: lazyLoading('./components/pages/Demo/Components/Rating')
      },
      '/slider': {
        name: 'Slider',
        component: lazyLoading('./components/pages/Demo/Components/Slider')
      },
      '/switch': {
        name: 'Switch',
        component: lazyLoading('./components/pages/Demo/Components/Switch')
      },
      '/tabs': {
        name: 'Tabs',
        component: lazyLoading('./components/pages/Demo/Components/Tabs')
      },
      '/tooltip': {
        name: 'Tooltip',
        component: lazyLoading('./components/pages/Demo/Components/Tooltip')
      }
    }
  },
  '/tables/basic': {
    name: 'BasicTables',
    component: lazyLoading('./components/pages/Demo/Tables/Basic')
  },
  '/tables/handsontable': {
    name: 'Handsontable',
    component: lazyLoading('./components/pages/Demo/Tables/Handsontable')
  }
})

router.redirect({
  '/ui': '/ui/typography',
  '*': '/dashboard'
})

router.start(App, 'app')
