const data = [
  {
    path: '/',
    component: 'Layout',
    redirect: '/index',
    meta: {
      title: 'Dashboard',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: '@/views/index',
        meta: {
          title: '首页',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
]
module.exports = [
  {
    url: '/menu/navigate',
    type: 'get',
    response() {
      return {
        code: 200,
        msg: 'success',
        data,
      }
    },
  },
]
