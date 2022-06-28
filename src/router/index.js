import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '../components/Layout/index.vue'
import AboutLayout from '../views/about/components/Layout.vue'
import emitter from '/src/until/eventbus'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  /** -----首页----- **/
  {
    path: '/main',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component:() => import('../views/home/index.vue'),
        meta: { 
          name: 'Home',
          // keepAlive: true
        }
      }
    ]
  },
  /** -----NMN----- **/
  {
    path: '/nmn',
    component: Layout,
    redirect: '/nmn/hero',
    children: [
      {
        path: '/nmn/hero',
        name: 'Nmn',
        component:() => import('../views/nmn/index.vue'),
        meta: {
          name: 'Nmn',
          breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.nmn', url: '/product/list' }]
        }
      }
    ]
  },
  /** -----产品信息----- **/
  {
    path: '/product',
    component: Layout,
    redirect: '/product/list',
    children: [
      // 产品列表
      {
        path: '/product/list',
        name: 'ProductList',
        component:() => import('../views/product/index.vue'),
        meta: {
          name: 'Product',
          // keepAlive: true,
          breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.product', url: '/product/list' }]
        }
      },
      // 产品详情
      {
        path: '/product/detail/:id',
        name: 'ProductDetail',
        component: () => import('../views/product/detail.vue'),
        meta: {
          name: 'Product',
          keepAlive: true,
          breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.product', url: '/product/list' }, { text: 'message.productDtl', url: '/product/detail/:id' }]
        }
      }
    ]
  },

  /** -----企业新闻----- **/
  {
    path: '/news',
    component: Layout,
    redirect: '/news/list',
    children: [
      // 新闻列表
      {
        path: '/news/list',
        name: 'NewsList',
        component:() => import('../views/news/index.vue'),
        meta: {
          name: 'News',
          breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.news', url: '/news/list' }]
        }
      },
      // 新闻详情
      {
        path: '/news/detail/:id',
        name: 'NewsDetail',
        component: () => import('../views/news/detail.vue'),
        meta: {
          name: 'News',
          breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.news', url: '/news/list' }, { text: 'message.newsDtl', url: '/news/detail/:id' }]
        }
      }
    ]
  },

  /** -----关于我们----- **/
  {
    path: '/aboutUs',
    component: Layout,
    redirect: '/about',
    children: [
      // 关于我们
      {
        path: '/about',
        component: () => import('../views/about/index.vue'),
        meta: {
          name: 'About',
          breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.about', url: '/about' }]
        }
      },
      // footer--关于本网站
      {
        path: '/about/website',
        component: () => import('../views/about/website/index.vue')
      },
      // footer--信息安全基本方针
      {
        path: '/about/security',
        component: () => import('../views/about/security/index.vue')
      },
      // footer--隐私政策
      {
        path: '/about/privacy',
        component: () => import('../views/about/privacy/index.vue')
      },
      // 关于我们--layout
      {
        path: '/about/layout',
        component: AboutLayout,
        redirect: '/about/company',
        children: [
          // 公司简介 / 会社概要
          {
            path: '/about/company',
            component: () => import('../views/about/company.vue'),
            meta: {
              name: 'About',
              breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.about', url: '/about' }, { text: 'message.aboutCompany', url: '/about/company' }]
            }
          },
          // 经营理念
          {
            path: '/about/business',
            component: () => import('../views/about/business.vue'),
            meta: {
              name: 'About',
              breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.about', url: '/about' }, { text: 'message.aboutBusiness', url: '/about/business' }]
            }
          },
          // 药剂师简介
          {
            path: '/about/pharmacist',
            component: () => import('../views/about/pharmacist.vue'),
            meta: {
              name: 'About',
              breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.about', url: '/about' }, { text: 'message.aboutPharmacist', url: '/about/pharmacist' }]
            }
          },
          // 公司资质
          {
            path: '/about/aptitude',
            component: () => import('../views/about/aptitude.vue'),
            meta: {
              name: 'About',
              breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.about', url: '/about' }, { text: 'message.aboutusB', url: '/about/aptitude' }]
            }
          },
          // 联系我们
          {
            path: '/about/contact',
            component: () => import('../views/about/contact.vue'),
            meta: {
              name: 'About',
              breadcrumb : [{ text: 'message.home', url: '/' }, { text: 'message.about', url: '/about' }, { text: 'message.contactUs', url: '/about/contact' }]
            }
          },
        ],
      }
    ]
  },

  /** -------404------- **/
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component:() => import('../views/404/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if(to.meta.name !== 'About' && to.meta.name !== 'Home') {
    emitter.emit('changeLoadingState', true)
  }
  // keep-alive
  if(!from.meta.keepAlive) window.scrollTo({ top: 0, behavior: "instant" })
  next()
})

export default router