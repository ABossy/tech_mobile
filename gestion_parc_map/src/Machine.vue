<template>
<div class="mac">
<br>
    <h1>{{machine.name}}</h1>
    <h2 v-if="machine.status === 'true'" class="green">Status: OK ! </h2>
    <h2 v-if="machine.status === 'false'" class="red">Status: KO ! </h2><br>
    <h3> {{machine.checkedAt}}</h3><br>
    <!-- conditions d'affichage "etat machine" -->

</div>
</template>


<script>
export default {
  name: "machines", //url
  props: ["machine"],
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
.orange{
  color:darkorange;
}
h2 {
  font-size: 35px;
}
div .mac {
  border-style: solid;
  width: 40%;
  margin: auto;
  margin-bottom: 1%;
}
</style>

