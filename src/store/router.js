import Mock from 'mockjs'

Mock.mock(/router/, 'get', () => { // 三个参数。第一个路径，第二个请求方式post/get，第三个回调，返回值
  return {
    code: 20000,
    data: [
      {
        path: '/nested',
        component: 'Layout',
        redirect: '/nested/menu1',
        name: 'Nested',
        meta: {
          title: 'Nested',
          icon: 'nested'
        },
        children: [
          {
            path: 'menu1',
            component: 'Menu1', // Parent router-view
            name: 'Menu1',
            meta: { title: 'Menu1' },
            children: [
              {
                path: 'menu1-1',
                component: 'Menu1-1',
                name: 'Menu1-1',
                meta: { title: 'Menu1-1' }
              },
              {
                path: 'menu1-2',
                component: 'Menu1-2',
                name: 'Menu1-2',
                meta: { title: 'Menu1-2' },
                children: [
                  {
                    path: 'menu1-2-1',
                    component: 'Menu1-2-1',
                    name: 'Menu1-2-1',
                    meta: { title: 'Menu1-2-1' }
                  },
                  {
                    path: 'menu1-2-2',
                    component: 'Menu1-2-2',
                    name: 'Menu1-2-2',
                    meta: { title: 'Menu1-2-2' }
                  }
                ]
              },
              {
                path: 'menu1-3',
                component: 'Menu1-3',
                name: 'Menu1-3',
                meta: { title: 'Menu1-3' }
              }
            ]
          },
          {
            path: 'menu2',
            component: 'menu2',
            meta: { title: 'menu2' }
          }
        ]
      },

      {
        path: 'external-link',
        component: 'Layout',
        children: [
          {
            path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
            meta: { title: 'External Link', icon: 'link' }
          }
        ]
      }
    ]
  }
})
