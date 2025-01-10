<script setup>
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
    
    <div class="md:flex h-screen ">
      
      <div class="bg-gray-600 border-gray-600 border-2 rounded-tl-xl rounded-bl-xl  h-72 md:h-auto bg-cover bg-center md:w-1/3 bg-no-repeat stroke-2 my-20 ml-5 ">
        <img src="/img/undraw_barber_utly4.svg" class="w-auto h-auto mt-40 px-4 " />
      </div>
      <div class="bg-gray-100 h-72  border-2 rounded-tr-xl rounded-br-xl   h-72 md:h-auto md:w-2/3 px-10 py-5  overflow-y-scroll  stroke-2 my-20 mr-5    ">
        <RouterView/>
      </div>
  </div>
</template>

<style scoped>

</style>
