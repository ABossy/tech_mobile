<template>
 <div>
<h1>Map des Machines</h1>
   <gmap-map
  :center="{lat:Number(userposition.coords.latitude), lng:Number(userposition.coords.longitude)}"
  :zoom="10"
  style="width: 80%; height: 800px ;margin:auto"
  >
<gmap-marker
      :key="machine.id"
      v-for="machine in machines" 
      :position="{lat:Number(machine.latitude),lng:Number(machine.longitude)}"
      :clickable="true" :draggable="true">
      </gmap-marker>
</gmap-map>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "machine-map", // url

  data() {
    return {
      machines: [
        {
          id: 1,
          latitude: 10,
          longitude: 10
        },
        {
          id: 2,
          latitude: 11,
          longitude: 9.6
        }
      ],
      userposition: {
        coords: {
          latitude: "0",
          longitude: "0"
        }
      }
    };
  },
  created() {
    axios
      .get("https://machine-api-campus.herokuapp.com/api/machines")
      .then(response => {
        console.log(response.data);
        this.machines = response.data;
      })
      .catch(function(error) {
        console.log(error);
      }),
      this.geoloc();
  },
  // axios interroge l'api pour récuperer les infos
  // la reponse retournée sera stockée dans le tableau machine.
  methods: {
    geoloc() {
      navigator.geolocation.getCurrentPosition(position => {
        this.userposition = position;
        console.log(position);
      });
    }
  }
};
</script>

