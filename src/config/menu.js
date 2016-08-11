export default [
  {
    link: 'Dashboard',
    label: 'Dashboard',
    icon: 'fa-tachometer'
  },
  {
    label: '互联网理财',
    icon: 'fa-bar-chart-o',
    expanded: true,
    subMenu: [
      {
        link: 'Platforms',
        label: '平台列表'
      },
      {
        link: 'Products',
        label: '产品列表'
      }
    ]
  },
  {
    label: '银行理财',
    icon: 'fa-bank',
    expanded: false,
    subMenu: [
      {
        link: 'Buttons',
        label: 'Buttons'
      }
    ]
  },
  {
    label: '信用卡',
    icon: 'fa-credit-card',
    expanded: false,
    subMenu: [
      {
        link: 'BackToTop',
        label: 'BackToTop'
      }
    ]
  },
  {
    label: '贷款数据',
    icon: 'fa-building-o',
    expanded: false,
    subMenu: [
      {
        link: 'BackToTop',
        label: 'BackToTop'
      }
    ]
  },
  {
    label: '基金数据',
    icon: 'fa-pie-chart',
    expanded: false,
    subMenu: [
      {
        link: 'BasicTables',
        label: 'Basic Tables'
      }
    ]
  },
  {
    label: '股票数据',
    icon: 'fa-line-chart',
    expanded: false,
    subMenu: [
      {
        link: 'BasicTables',
        label: 'Basic Tables'
      }
    ]
  },
  {
    label: '商品数据',
    icon: 'fa-area-chart',
    expanded: false,
    subMenu: [
      {
        link: 'BasicTables',
        label: 'Basic Tables'
      }
    ]
  },
  {
    label: '期权数据',
    icon: 'fa-superscript',
    expanded: false,
    subMenu: [
      {
        link: 'BasicTables',
        label: 'Basic Tables'
      }
    ]
  }
]
