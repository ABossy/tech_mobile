<template>
<div>
    <h1>Liste des Machines</h1>
    
   <machines></machines>
</div>
</template>


<script>
export default {
  name: "list-machine",

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
}
    },
  }

</script>