// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules:['@nuxtjs/tailwindcss'],
   app:{
      head:{
         title:'Nuxt Shop.com',
         meta:[
            {name:'description',content:'Every day '}
         ],
         link:[
            {
               rel:'stylesheet',href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css'
            }
         ]
      }
   },
   runtimeConfig:{
      currencykey : process.env.CURRENCY_API_KEY
   }
})
