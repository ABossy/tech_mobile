<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <div>
    <h4>
        Cacher les machines éteintes
        <toggle-button :value="hideOffMachines" @change="hideOffMachines = !hideOffMachines"/>
      </h4>
    </div> 
      <ul>
     <!-- V-if peut contenir une règle avec un opérateur logique ou de comparaison -->
     <!-- https://www.w3schools.com/js/js_comparisons.asp -->
      <my-machine v-for="machine in machines" :key="machine.id" v-bind:astrid="machine"
               v-if="!hideOffMachines || machine.etat">
      </my-machine>
    </ul>  
<!-- <my-machine v-for="machine in machines" :astrid="machine" :key="machine.name"></my-machine> -->
 <!-- Formulaire AJOUT -->
  <form @submit.prevent="addMachine" class="form">
      <input type="text" placeholder="Nom de la machine" v-model="buffer.name">
      <select name="status" v-model="buffer.etat">
        <option v-bind:value="true">ON</option>
        <option v-bind:value="false">OFF</option>
      </select>
      <input type="submit" value="Ajouter">
    </form>
 </div> 
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Astrid",
      hideOffMachines:false,                  
      
      buffer: {
        id:3,
        name: '', 
        etat: true
      },
      machines: [
        {
          id:1,
          name: "Grenoble",
          etat: true
        },
        {
          id:2,
          name: "Paris",
          etat: true
        },
        {
          id:3,
          name: "Los Angeles",
          etat: true
        }
      ]
    };
  },


 methods:{
 // Création d'un nouvel objet dans la collection machines
    addMachine: function(e) {
      this.buffer.id += 1
      this.machines.push({ id: this.buffer.id,
                           name: this.buffer.name,
                           etat: this.buffer.etat
                         });
    }
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

.color {
  color: rgb(32, 190, 18);
}

.form {
    background-color: #35485d;
    padding: 20px 0;
    margin-top: 40px;
    
    input, select {
      padding: 4px;
      font-size: 18px;
    }
  }
</style>
