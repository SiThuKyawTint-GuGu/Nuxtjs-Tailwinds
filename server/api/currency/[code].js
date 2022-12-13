export default defineEventHandler(async(event)=>{
    const {code} = event.context.params
    const {currencykey} = useRuntimeConfig();
    const uri = `https://api.currencyapi.com/v3/currencies=${code}&apikey=${currencykey}`
    const {data} = await $fetch(uri);
    return data
})