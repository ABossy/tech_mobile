<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
<my-machine v-for="machine in machinesUE" :astrid="machine" :key="machine.name"></my-machine>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Astrid",
      machinesUE: [
        {
          nom: "Grenoble",
          etat: true
          
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
