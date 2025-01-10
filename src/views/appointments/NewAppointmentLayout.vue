<script setup>
    import { useRoute } from 'vue-router'

    const route = useRoute()
</script>


<template>

     <nav class="my-5 flex gap-3">
        <RouterLink
            class="flex-1 bg-emerald-500 border-2 border-emerald-500  rounded-xl  text-center p-3 uppercase font-extrabold hover:bg-emerald-300 hover:text-white "
            :class="route.name === 'new-appointment' ? 'bg-emerald-500 text-white'  :  'bg-white text-emerald-500'"
            :to="{name: 'new-appointment'}"
            >
            Servicios
        </RouterLink>

        <RouterLink
            class="flex-1 bg-emerald-500 border-2 border-emerald-500 rounded-xl  text-center p-3 uppercase font-extrabold hover:bg-emerald-300 hover:text-white "
            :class="route.name === 'appointment-details' ? 'bg-emerald-500 text-white'  :  'bg-white  text-emerald-500 '"
            :to="{name: 'appointment-details'}"
            >
         Cita y Resumen
        </RouterLink>

    </nav>
    <div class="space-y-5">
        <RouterView />
    </div>
</template>


<style  scoped>

</style>