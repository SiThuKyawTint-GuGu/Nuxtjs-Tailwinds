<template>
    <div>
        <h1 class=" text-center my-52 text-[#12b488] text-[50px]">About</h1>
        <div>
            {{data}}
        </div>
    </div>
</template>

<script setup>
// const {data} = await useFetch('/api/gugu')
const {data} = await useFetch('/api/currency/USD')
</script>

<style  scoped>

</style>