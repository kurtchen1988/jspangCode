import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import vif from '@/components/v-if'
import vfor from '@/components/v-for'
import vtext from '@/components/v-text'
import von from '@/components/v-on'
import vmodel from '@/components/v-model'
import vbind from '@/components/v-bind'
import vpre from '@/components/v-pre'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/hello',
      name:'hello',
      component:HelloWorld
    },
    {
      path:'/v-if',
      name:'vif',
      component:vif
    },
    {
      path:'/v-for',
      name:'vfor',
      component:vfor
    },
    {
      path:'/v-text',
      name:'vtext',
      component:vtext
    },
    {
      path:'/v-on',
      name:'von',
      component:von
    },
    {
      path:'/v-model',
      name:'vmodel',
      component:vmodel
    },
    {
      path:'/v-bind',
      name:'vbind',
      component:vbind
    },
    {
      path:'/v-pre',
      name:'vpre',
      component:vpre
    }
  ]
})
