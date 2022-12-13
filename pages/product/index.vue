import { NuxtLink } from '../../.nuxt/components';
<template>
    <div>
       <div class=" grid grid-cols-4 gap-5">
       <div v-for="p in products">
          <ProductCard :products="p"/>
       </div>
       </div>
    </div>
</template>

<script setup>
  definePageMeta({
    layout:'products',
  })
  const {data:products} = await useFetch('https://fakestoreapi.com/products')
</script>

<style  scoped>

</style>