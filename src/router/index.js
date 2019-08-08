import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Msite from '../pages/Msite/Msite.vue'
// import Search from '../pages/Search/Search.vue'
// import Order from '../pages/Order/Order.vue'
// import Profile from '../pages/Profile/Profile.vue'

const Msite = () => import('../pages/Msite/Msite.vue')
const Search = () => import('../pages/Search/Search.vue')
const Order = () => import('../pages/Order/Order.vue')
const Profile = () => import('../pages/Profile/Profile.vue')

// import Login from '../pages/Login/Login.vue'
// import Shop from '../pages/Shop/Shop.vue'
// import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
// import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
// import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo.vue'
// 路由懒加载实际上用到的就是一个函数import
const Login = () => import('../pages/Login/Login.vue')
const Shop = () => import('../pages/Shop/Shop.vue')
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopRatings = () => import('../pages/Shop/ShopRatings/ShopRatings.vue')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Msite',
      name: 'Msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Search',
      name: 'Search',
      component: Search,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Order',
      name: 'Order',
      component: Order,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Profile',
      name: 'Profile',
      component: Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/Msite'
    },
    {
      path: '/shop',
      component: Shop,
      children: [
        {
          path: '/shop/goods',
          component: ShopGoods
        },
        {
          path: '/shop/ratings',
          component: ShopRatings
        },
        {
          path: '/shop/info',
          component: ShopInfo
        },
        {
          path: '',
          redirect: '/shop/goods'
        }
      ]
    }
  ]
})
