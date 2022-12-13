<template>
    <div>
      <div>
        <ProductDetails :product="product"/>
      </div>
    </div>
</template>

<script setup>
    const {id} = useRoute().params
    definePageMeta({
        layout:'products'
    })
    const uri = 'https://fakestoreapi.com/products/' + id
    const {data:product} = await useFetch(uri)

    if(!product.value){
      throw createError({statusCode:404,statusMessage:'Product is not found!',fatal:true})
    }
</script>

<style  scoped>

</style>