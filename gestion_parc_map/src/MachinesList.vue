<template>
<div>
    <h1>Liste des Machines</h1>
   <machines v-for="machineActuelle in datamachine" :key="machineActuelle.id" 
   v-bind:machine="machineActuelle"></machines>
</div>
</template>


<script>
import axios from "axios";
export default {
  name: "list-machine",
  props: ["datamachine"],
  //   qui sera connue dans l'app.vue
  // <router-view v-bind:datamachine="machines"></router-view>

data() {
    return {
      machines: [], // au début la liste des machines est vide
      loading: false,
      error: null
    };
  },

created() {
  axios.get("https://machine-api-campus.herokuapp.com/api/machines")
      .then(response => {
        console.log(response.data);
        this.machines = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  // axios get qui permet d'afficher les objets de l'api
};
</script>

