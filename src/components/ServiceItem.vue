<script setup>
   import { formatCurrency } from '../helpers'
   import {useAppointmentsStore } from '../stores/appointments'

    const  appointments = useAppointmentsStore();

    defineProps({
        service: {
            type: Object
        }
    })
</script>


<template>
    <div
        class="p-5 space-y-5 border-2 border-emerald-800 rounded-lg cursor-pointer"
        :class="appointments.isServiceSelected(service._id) ? 'bg-emerald-500' : 'bg-white'"
        @click="appointments.onServiceSelected(service)"
    >
        <p class="text-2xl font-light uppercase "
            :class="appointments.isServiceSelected(service._id) ? 'text-white' : 'text-emerald-900'"
        >{{ service.name }}</p>
        <p 
            class="text-4xl font-bold "
            :class="appointments.isServiceSelected(service._id) ? 'text-white' : 'text-gray-600'   "
        >{{ formatCurrency( service.price ) }}</p>
    </div>
  
</template>