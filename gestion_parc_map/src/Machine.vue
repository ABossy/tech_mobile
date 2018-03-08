<template>
<div class="mac">
<br>
    <h1>Machines {{machine.name}}</h1>
    <h2 v-if="machine.status === true" class="green"> Statut OK </h2>
    <h2 v-if="machine.status === false" class="red"> Statut KO </h2><br>
    <h3> {{machine.checkedAt.toLocaleString()}}</h3><br>
    <!-- conditions d'affichage "etat machine" -->

</div>
</template>


<script>
export default {
  name: "machines",
  props: ["machine"]
  //  props qui sera connue dans machinelist.vue
  //   v-bind:machine="machineActuelle"
};
</script>

<style>
.green {
  color: rgb(8, 192, 8);
}
.red {
  color: firebrick;
}

div .mac {
  border-style: solid;
  margin-bottom: 1%;
}
</style>
