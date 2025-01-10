<script setup>
   import {useUserStore} from '../../stores/user'
    const user = useUserStore()

</script>


<template>
    <div class="flex justify-between">
        <h1 class="text-2xl lg:text-6xl font-black text-gray-600 uppercase text-center ">Barber-App</h1>

        <div class="flex flex-col space-y-5">
           <div class="flex gap-2 items-center">
                <p class="text-gray-600 text-right uppercase font-black">Hola: {{ user.getUserName }}</p>
                <button
                    type="button"
                    class="bg-red-700 hover:bg-red-500 p-3 text-white uppercase text-xs font-extrabold rounded-lg"
                    @click="user.logout"
                >
                    Cerrar Sesión
                </button>
           </div>

           <nav class="flex gap-2 items-center justify-end">
                <RouterLink
                     :to="{name: 'my-appointments'}"
                    class="p-3 text-white bg-emerald-500 uppercase text-xs font-black rounded-lg"
                >Mis Citas</RouterLink>

                <RouterLink
                    :to="{name: 'new-appointment'}"
                    class="p-3 bg-emerald-800 uppercase text-xs font-black text-white rounded-lg "
                >
                    Nueva Cita
                </RouterLink>
           </nav>
        </div>
    </div>

    <main>
        <RouterView />
    </main>
</template>

