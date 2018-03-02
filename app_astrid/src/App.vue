<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div class="main">   
    <!-- <h2>Machine Paris</h2>
    <toggle-button @change="onChangeEventHandler"/>  -->
    <ul>
      <li v-for =" machine in machines" v-bind:class="{ color: machine.etat}">
        <!-- pour afficher une liste d'éléments basée sur un tableau. -->
        <h1>{{machine.nom}} {{machine.etat}}</h1> 
         <!-- <toggle-button v-on:click="onChangeEventHandler" @change="onChangeEventHandler"/><br> -->
         <toggle-button :value="machine.etat" 
               color="pink" 
               :sync="true" 
               :labels="true"/>
      </li>
    </ul>
    </div>  
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Astrid",
      machines: [
        {
          nom: "Grenoble",
          etat: true,
          
         
          
        },
        {
          nom: "Paris",
          etat: true
        },
        {
          nom: "Los Angeles",
          etat: true
        },
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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
  margin: 0 10px;
}

a {
  color: #42b983;
}

.color{
  color: palevioletred ;
}
</style>
