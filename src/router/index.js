import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'
import Details from '@/components/Details'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/details/:d_name',
      name: 'Details',
      component: Details
    }
  ]
})
