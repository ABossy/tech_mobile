<template>
<div>
    <h1>Liste des Machines</h1>
   <machines v-for="machineActuelle in datamachine" :key="machineActuelle.id" 
   v-bind:machine="machineActuelle"></machines>
</div>
</template>


<script>
export default {
  name: "list-machine",
  props: ["datamachine"],
//   qui sera connue dans l'app.vue
// <router-view v-bind:datamachine="machines"></router-view>

  data() {
    return {};
  }
};
</script>