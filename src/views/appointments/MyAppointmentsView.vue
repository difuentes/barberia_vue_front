<script setup>
    import Appointment from '../../components/Appointment.vue'
    import {useUserStore} from '../../stores/user.js'
    const user  = useUserStore();

</script>


<template>
    <h2 class="text-4xl font-extrabold text-emerald-800 mt-10">Mis Citas</h2>
    <p class="text-emerald-500 text-lg mt-5">A continuación podrás administrar tus próximas citas</p>

    <p v-if="user.loading" class="text-emerald-800 text-2xl text-center mt-5">Cargando...</p>

    <div v-else>
        <p v-if="user.noAppointments" class="text-emerald-800 font-bold text-2xl text-center mt-5">No tienes próximas citas</p>


        <div v-else class="grid grid-cols-1 gap-5 mt-10">
            <Appointment
                v-for="appointment in user.userAppointments"
                :key="appointment._id"
                :appointment="appointment"
            />
        </div>
    </div>


    


</template>
