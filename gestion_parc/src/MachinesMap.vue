<template>
 <div>
<h1>Map des Machines</h1>
   <gmap-map
  :center="{lat:10, lng:10}"
  :zoom="7"
  style="width: 100%; height: 800px"
>
</gmap-map>
</div>
</template>

<script>
export default {
  name: "machine-map",

  data() {
    return {};
  }
};
</script>