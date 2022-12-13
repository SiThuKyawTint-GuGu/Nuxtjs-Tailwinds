<template>
   <div class="card h-full bg-white rounded-md p-3 shadow-md text-center mt-3 ">
    <div class=" grid grid-cols-2 gap-1">
       <div class="p-7 ">
        <img :src="product.image" class=" block mx-auto" alt="">
       </div>
        <div class="p-7 text-start">
          <h2 class="font-bold text-2xl">{{product.title}}</h2>
          <h2 class=" font-light mt-3">Price -${{product.price}}</h2>
          <h2 class="mt-3 border-b-2 pb-3">Product Description:</h2>
          <p class="font-light mt-3 text-sm">{{product.description}}</p>
          <button class="bg-[#12b488] text-white text-sm px-4 py-2 rounded-md mt-4"><i class="fa-sharp fa-solid fa-cart-shopping mr-2"></i><span>Add to Cart</span></button>
        </div>
    </div>
   </div>
</template>

<script setup>
const {product} = defineProps(['product'])
useHead({
    title:'Shop Product Detail',
    meta:[
        {
            name:'description',content:'Everything is good',
        }
    ]
})
</script>

<style  scoped>
    img{
        max-width: 400px;
    }
</style>