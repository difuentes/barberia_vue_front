<script setup>
    import { useAppointmentsStore } from '../stores/appointments';
    import { formatCurrency } from '../helpers';

    const appointments = useAppointmentsStore()
    defineProps({
        service: {
            type: Object
        }
    })
</script>


<template>
    <div class="border bg-emerald-500  border-emerald-800 rounded-lg p-5 flex justify-between items-center">
        <div>
            <p class="text-2xl font-extrabold text-white">{{ service.name }}</p>
            <p class="text-3xl font-black text-white">{{ formatCurrency( service.price ) }}</p>
        </div>
        
        <button
            type="button"
            class="inline-flex items-center rounded-md bg-red-700 text-white text-sm px-3 py-2 font-semibold shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-700"
            @click="appointments.onServiceSelected(service)"
        >
            Eliminar
        </button>
    </div>
</template>

