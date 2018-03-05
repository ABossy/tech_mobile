import Vue from 'vue'
import App from './App.vue'
import ToggleButton from 'vue-js-toggle-button'
// from : c'est le chemin pour récuperer la dependance.
Vue.use(ToggleButton)

Vue.component('my-machine', {
  props:['astrid'],
  template: " <div class=\"main\"> " +
    "<li v-bind:class=\"{ color: astrid.etat}\">"+
       "<h1>{{astrid.name}} {{astrid.etat}}</h1>"+ 
      //  "<toggle-button :value=\"astrid.etat\" v-on:change=\"astrid.etat = $event.value\""+
      //   "color=\"pink\" :sync=\"true\" :labels=\"true\"/></li></ul>"+
        "<li :class=\"{ active: astrid.etat }\"><toggle-button :value=\"astrid.etat\" @change=\"astrid.etat = !astrid.etat\"/></li>"+
        "</div>"
})


new Vue({
  el: '#app',
  render: h => h(App),
  active: false,
  
})

