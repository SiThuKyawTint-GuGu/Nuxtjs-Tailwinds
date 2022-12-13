<template>
    <div>
        <header class=" shadow-sm bg-white flex justify-between">
            <NuxtLink to="/product" class="text-[20px] px-5  py-5 font-bold text-[#12b488]  capitalize">Nuxt Shop GuGi</NuxtLink>
            <nav class="">
                <ul class="flex  px-5  py-5 mx-3 ">
                <li><NuxtLink to="/" class="mx-2">Home</NuxtLink></li>
                <li><NuxtLink to="/about" class="mx-2">About</NuxtLink></li>
                <li><NuxtLink to="/product" class="mx-2 bg-[#12b488] px-3 py-3 rounded-md text-white text-sm">Product</NuxtLink></li>
            </ul>
            </nav>
        </header>
       
        <div>
            <slot/>
        </div>
    </div>
</template>

<style scoped>
.router-link-exact-active{
    color: black;
}
</style>