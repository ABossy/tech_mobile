<template>
<div>
<div v-for="machine in machines" :key="machine.id"><br>
    <h1>Machines {{machine.name}}</h1>
    <h2 v-if="machine.status === true" class="green"> Statut OK </h2>
    <h2 v-if="machine.status === false" class="red"> Statut KO </h2><br>
    <h3> {{machine.checkedAt.toLocaleString()}}</h3><br>
    <!-- conditions d'affichage "etat machine" -->
</div>
</div>
</template>


<script>
export default {
  name: "machines",

  data() {
    return {
    machines: [{
        id: 1,
        name: 'What else ?',
        status: true,
        checkedAt: new Date(),
    }, {
        id: 2,
        name: 'Broken',
        status: false,
        checkedAt: new Date(),
    }] 
    };
  }
};
</script>

<style>
.green{
    color: rgb(8, 192, 8) 
}
.red{
    color: firebrick
}

h2 {
    border-style: solid;
}
</style>
