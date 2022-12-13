<template>
    <Head>
        <Title>Shop Card List</Title>
        <Meta name="description" :content="products.title"></Meta>
    </Head>
   
    
    <div class="card h-full bg-white rounded-md p-3 shadow-md text-center py-5 mt-10">
            <img :src="products.image" alt="product thumb" class="thumb ">
            <p class="text-center font-bold text-gray-500 m-4 truncate mb-6 ">{{products.title}}</p>
            <NuxtLink :to="`/product/${products.id}`" class="bg-[#12b488] px-24 py-3 text-white rounded-md shadow-sm">View Detail</NuxtLink>
    </div>
</template>

<script setup>
    const {products} = defineProps(['products'])
</script>

<style  scoped>
img{
    height: 200px;
    display: block;
    margin: auto;
}
</style>