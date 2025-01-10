<script setup>
    import { ref } from 'vue'
    import SelectedService from '../../components/SelectedService.vue'
    import VueTailwindDatepicker from 'vue-tailwind-datepicker'
    import {useAppointmentsStore} from '../../stores/appointments';
    import {formatCurrency} from '../../helpers/index'


    const appointments = useAppointmentsStore()

    const formatter = ref({
        date: 'DD/MM/YYYY',
        month: 'MMM'
    })

    const disableDate = (date) => {
        const today = new Date()
        return date < today  || date.getMonth() > today.getMonth() + 1 || [0,6].includes( date.getDay() )
    }
</script>

<template>
    <h2 class="text-4xl font-extrabold text-emerald-800 text-center">Detalles Cita y Resumen</h2>
    <p class="text-emerald-500 text-lg text-center">A continuación verifica la información y confirma tu cita</p>

    <h3 class="text-3xl font-extrabold text-emerald-900 uppercase">Servicios</h3>
    <p v-if="appointments.noServicesSelected" class="text-emerald-800 text-2xl text-center">No hay servicios seleccionados</p>

    <div v-else class="grid gap-5">
        <SelectedService 
            v-for="service in appointments.services"
                    :key="service._id"
                    :service="service"

        />
        <p class="text-right text-emerald-900 text-2xl">Total a pagar: 
            <span class="font-black">{{ formatCurrency(appointments.totalAmount) }}</span>
        </p>
    </div>
 
    <div class="space-y-8" v-if="!appointments.noServicesSelected">
        <h3 class="text-3xl font-extrabold text-emerald-900">Fecha y Hora</h3>

        <div class="lg:flex gap-5 items-start">
            <div class="w-full lg:w-96 bg-white flex justify-center rounded-lg">
                <VueTailwindDatepicker
                    :disable-date="disableDate"
                    i18n="es-mx"
                    as-single
                    no-input
                    :formatter="formatter"
                    v-model="appointments.date"
                />
            </div>
            
            <div v-if="appointments.isDateSelected" class="flex-1 grid grid-cols-1  xl:grid-cols-2 gap-5 mt-10 lg:mt-0 ">
                <button
                    v-for="hour in appointments.hours"
                     class="block text-emerald-500 rounded-lg text-xl font-black p-3 disabled:opacity-80 disabled:bg-gray-200 "
                    :class="appointments.time === hour ? 'bg-emerald-500 text-white' : 'bg-white'"
                    @click="appointments.time = hour"
                    :disabled="appointments.disableTime(hour)? true :false"
                >
                    {{ hour }}
                </button>
            </div>
             
          
        </div>
        
        <div v-if="appointments.isValidReservation"  class="flex justify-end">
            <button
                class="w-full md:w-auto bg-emerald-700 p-3 rounded-lg uppercase font-black text-white"
                @click="appointments.saveAppointment"
            >   
                Confirmar Reservación
            </button>
        </div>
    </div>


</template>

<style  scoped>

</style>