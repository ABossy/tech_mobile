import MachinesList from './MachinesList.vue'
import MachineMap from './MachinesMap.vue'
import Machine from './Machine.vue'

export default[
    {path:'/map',component:MachineMap},
    {path:'/listemachine',component:MachinesList},
    {path:'/machine',component:Machine},
]
// liaison de l'url et du component.