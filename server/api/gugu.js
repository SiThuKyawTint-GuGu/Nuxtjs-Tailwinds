
export default defineEventHandler (async(event) =>{
    // const {name} = getQuery(event)
    // const {age} = await readBody(event)
    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=xTWYcZ4CuQotLcIg9XWQqYoVHmddiegfTmWA1q4y')
   return data
  
})