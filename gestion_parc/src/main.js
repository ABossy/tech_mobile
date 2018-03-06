import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MachinesList from './MachinesList.vue'
import MachineMap from './MachinesMap.vue'
import Routes from './routes'
import Machine from './Machine.vue'

Vue.component('list-machine',MachinesList)
Vue.component('machine-map',MachineMap)
Vue.component('machines',Machine)
Vue.use(VueRouter)

const router = new VueRouter ({
  routes:Routes
  
})
new Vue({
  el: '#app',
  render: h => h(App),
  router:router
  
})

