<template>
<div>
    <h1>Liste des Machines</h1>
    <span>
     <button type="button" class="btn btn-primary" data-toggle="modal" 
data-target="#ajoutModal">
       Ajouter une Machine
     </button>

     <!-- Modal -->
     <div class="modal fade" id="ajoutModal" tabindex="-1" role="dialog" 
aria-labelledby="ajoutModalCenterTitle"
          aria-hidden="true">
       <div class="modal-dialog modal-dialog-centered" role="document">
         <div class="modal-content">
           <div class="modal-header">
             <h5 class="modal-title" id="ajoutModalLongTitle">Ajouter une 
machine</h5>
             <button type="button" class="close" data-dismiss="modal" 
aria-label="Close">
               <span aria-hidden="true">&times;</span>
             </button>
           </div>
           <form>
             <div class="modal-body">
               <div class="form-group">
                 <label for="nomMachineAjout">Nom de la machine</label>
                 <input type="text" class="form-control" 
id="nomMachineAjout" required placeholder="Entrez un nom" 
v-model="buffer.name" >
               </div>
               <div class="form-group">
                 <label for="latitudeMachineAjout">Latitude</label>
                 <input type="text" class="form-control" 
id="latitudeMachineAjout" placeholder="45.1856964"  
v-model="buffer.latitude" >
                 <label for="longitudeMachineAjout">Longitude</label>
                 <input type="text" class="form-control" 
id="longitudeMachineAjout" placeholder="5.7287321"  
v-model="buffer.longitude">
               </div>
               <div class="form-check">
                 <input type="checkbox" class="form-check-input" 
id="statusMachineAjout" true-value="true" false-value="false" 
v-model="buffer.status">
                 <label class="form-check-label" 
for="statusMachineAjout">Activée</label>
               </div>
             </div>

             <div class="modal-footer">
               <button type="button" class="btn btn-secondary" 
data-dismiss="modal">Annuler</button>
               <button type="submit" @click="addMachine()" class="btn 
btn-primary" >Enregistrer</button>
             </div>
           </form>
         </div>
       </div>
     </div>
   </span>

  <machines v-for="machineApi in machines" :key="machineApi.id"
   v-bind:machine="machineApi"></machines>

</div>
</template>


<script>
var event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
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
      error: null,

      buffer: {
        name: "test",
        latitude: "10",
        longitude: "10",
        status: false,
        checkedAt: event
      }
      // buffer données pour la création machine
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
      });
  },
  // axios get qui permet d'afficher les objets machines de l'api

  methods: {
    // Création d'un nouvel objet dans la collection machines
    addMachine: function() {
      axios
        .post("https://machine-api-campus.herokuapp.com/api/machines", {
          name: this.buffer.name,
          status: this.buffer.status,
          latitude: this.buffer.latitude,
          longitude: this.buffer.longitude,
          checkedAt: this.buffer.checkedAt
        })
        .then(function(reponse) {
          $("#ajoutModal").modal("hide");
          alert("machine creation");
        });
    }
  }
};
</script>

<style scoped>
button {
  margin-bottom: 5%;
}
</style>