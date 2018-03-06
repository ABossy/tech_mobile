<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Que voulez vous faire?</h2>
 <!-- onMachine et onMap = nom de la methode définie ci dessous -->
<button button v-on:click="onMachineListClick">Afficher la liste des machines</button><br>
<button button v-on:click="onMapClick">Afficher la map</button>
  <list-machine></list-machine>
  <machine-map></machine-map>
  </div>
</template>

<script>
export default {
  name: 'app',

  data () {
    return {
      msg: 'Welcome'
    }
  },


methods: {
onMachineListClick:function(event){
  alert('vous allez accéder à la page Liste des machines')
},
onMapClick:function(event){
  alert('vous allez accéder à la page Map des machines')
}
}

};

</script>



<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  background-color: #42b983 ;
  font-size: 30px; 
  color: white; 
}
</style>
