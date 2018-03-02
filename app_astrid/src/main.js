import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
Vue.use(ToggleButton)
Vue.component('my-machine', {
  props:['astrid'],
  template: " <div class=\"main\"> "+ "<ul>" +
    "<li v-bind:class=\"{ color: astrid.etat}\">"+
       "<h1>{{astrid.nom}} {{astrid.etat}}</h1>"+ 
       "<toggle-button :value=\"astrid.etat\" v-on:change=\"astrid.etat = $event.value\""+
        "color=\"pink\" :sync=\"true\" :labels=\"true\"/></li></ul></div>"

})


new Vue({
  el: '#app',
  render: h => h(App),
  active: false
})

