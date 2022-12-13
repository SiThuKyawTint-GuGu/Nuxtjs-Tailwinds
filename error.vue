<template>
    <div class="card  max-w-sm h-full shadow-md block mx-auto mt-[200px] py-8">
        <h1 class="text-center text-5xl py-4">{{error.statusCode}}</h1>
        <h1 class="text-center text-3xl  ">Oops...</h1>
        <h1 class="text-center text-xl mt-4">{{error.message}}</h1>
        <button class="px-4 py-3 text-white rounded-md bg-[#12b488] block mx-auto mt-4" @click="gotohome()">Go Home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])
    const gotohome = () => clearError({redirect:'/home'})
</script>

<style  scoped>

</style>