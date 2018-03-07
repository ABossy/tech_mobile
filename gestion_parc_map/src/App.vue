<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1><strong>{{message}}</strong></h1>
<br>
  <router-link class="btn btn-success" to="/map">Consulter la Map</router-link>
    <router-link class="btn btn-success" to="/listemachine">Liste des Machines</router-link>  
  <router-view v-bind:datamachine="machines"></router-view>
  <!-- boutons des routers -->
   </div>
</template>

<script>
export default {
  name: "app",

  data() {
    return {
      machines: [{
        id: 1,
        name: 'What else ?',
        status: true,
        checkedAt: new Date(),
    }, 
    {
        id: 2,
        name: 'Broken',
        status: false,
        checkedAt: new Date(),
    }],

      message: "Que voulez vous faire ?"
    };
  },

 
};
</script>



<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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

h1,
h2 {
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

button {
  background-color: #42b983;
  font-size: 30px;
  color: white;
}
</style>








// exercice pop up 
<!-- onMachine et onMap = nom de la methode définie ci dessous -->
<!-- <button button v-on:click="onMachineListClick">Afficher la liste des machines</button><br>
<button button v-on:click="onMapClick">Afficher la map</button> -->

//  methods: {
//     onMachineListClick: function(event) {
//       alert("vous allez accéder à la page Liste des machines");
//     },
//     onMapClick: function(event) {
//       alert("vous allez accéder à la page Map des machines");
//     }
//   }