<script setup>
    import ServiceItem from '../../components/ServiceItem.vue'
    import {useServicesStore} from '../../stores/services'
    const store = useServicesStore()

    console.log(store.services)
</script>

<template>
    <h2 class="text-4xl font-extrabold text-black mt-10 text-center text-emerald-800">Servicios</h2>
    <p class="text-gray-800 text-lg mt-5 text-center ">A continuación elige al menos un servicio para tu cita</p>

    <div class="grid grid-cols-2 gap-5 mt-5">
       <ServiceItem
       v-for="service in store.services"
            :key="service._id"
            :service="service"
       />
    </div>
</template>

