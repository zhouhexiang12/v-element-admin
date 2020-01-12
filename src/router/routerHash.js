import Layout from '@/layout'

export default {
  Layout,
  Menu1: () => import('@/views/nested/menu1/index'),
  'Menu1-1': () => import('@/views/nested/menu1/menu1-1'),
  'Menu1-2': () => import('@/views/nested/menu1/menu1-2'),
  'Menu1-2-1': () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
  'Menu1-2-2': () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
  'Menu1-3': () => import('@/views/nested/menu1/menu1-3'),
  'menu2': () => import('@/views/nested/menu2/index')
}
