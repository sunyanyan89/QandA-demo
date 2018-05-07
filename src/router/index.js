import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Item from '@/pages/item'
import Score from '@/pages/score'

Vue.use(Router)

const routes = [
  { path: '/', component: Home},
  { path: '/item', component: Item},
  { path: '/score', component: Score}
]

export default new Router({
  routes
})
