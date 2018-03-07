<template>
 <div>
<h1>Map des Machines</h1>

   <gmap-map
  :center="{lat:10, lng:10}"
  :zoom="7"
  style="width: 100%; height: 800px">
<gmap-marker
      :key="machine.id"
      v-for="machine in machines"
      :position="{lat:machine.latitude,
                  lng:machine.longitude}"
      :clickable="true"
      :draggable="true"
      >
      </gmap-marker>
</gmap-map>
</div>

</template>

<script>
export default {
  name: "machine-map",

  data() {
    return {
      machines: [
        {
          id: 1,
          latitude: 10,
          longitude: 10,
        },
        {
          id: 2,
          latitude: 11,
          longitude: 9.6,
        }
]
   
    };
  }
};
</script>

