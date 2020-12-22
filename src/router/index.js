import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true,
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    hidden: true,
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true,
  },
]

export const asyncRoutes = [
  {
    path: '/',
    component: Layout,
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
        component: () => import('@/views/index'),
        meta: {
          title: 'Dashboard',
          icon: 'home-4-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/vab',
    component: Layout,
    redirect: '/vab/table',
    alwaysShow: true,
    meta: {
      title: 'Quản lý gian hàng',
      icon: 'apps-line',
    },
    children: [
      {
        path: 'category',
        name: 'Category',
        component: () => import('@/views/vab/table'),
        meta: {
          title: 'Danh mục sản phẩm',
          icon: 'align-right',
        },
      },
      {
        path: 'product',
        name: 'Product',
        component: () => import('@/views/vab/icon'),
        meta: {
          title: 'Danh sách sản phẩm',
          icon: 'align-right',
        },
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/vab/icon'),
        meta: {
          title: 'Đơn đặt hàng',
          icon: 'align-right',
        },
      },
    ],
  },
  {
    path: '/slider',
    component: Layout,
    redirect: '/slider',
    meta: {
      title: 'Dashboard',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Slider',
        component: () => import('@/views/index'),
        meta: {
          title: 'Quản lý slider',
          icon: 'apps-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/user',
    component: Layout,
    redirect: '/user',
    meta: {
      title: 'Quản lý người dùng',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'User',
        component: () => import('@/views/index'),
        meta: {
          title: 'Quản lý người dùng',
          icon: 'apps-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/setting',
    component: Layout,
    redirect: '/setting',
    meta: {
      title: 'Cài đặt chung',
      icon: 'home-4-line',
      affix: true,
    },
    children: [
      {
        path: 'index',
        name: 'Setting',
        component: () => import('@/views/index'),
        meta: {
          title: 'Cài đặt chung',
          icon: 'apps-line',
          affix: true,
        },
      },
    ],
  },
  {
    path: '/*',
    redirect: '/404',
    hidden: true,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router
