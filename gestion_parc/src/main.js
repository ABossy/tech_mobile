import Vue from 'vue'
import App from './App.vue'
import MachinesList from './MachinesList.vue'
import MachineMap from './MachinesMap.vue'

Vue.component('list-machine',MachinesList)
Vue.component('machine-map',MachineMap)
 
new Vue({
  el: '#app',
  render: h => h(App)
})

