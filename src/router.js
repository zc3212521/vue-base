import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import(/* webpackChunkName: "home" */ './pages/home/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ './pages/about/About.vue')
const Example = () => import(/* webpackChunkName: "example" */ './pages/example')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/example',
      name: 'example',
      component: Example,
      meta: {
        keepAlive: true
      }
    }
  ]
})
