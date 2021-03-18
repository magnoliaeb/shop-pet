<template>
    <div class="w-96 border border-gray-300 px-4 py-6 bg-white">
        <h3 class="my-3 font-medium text-lg">Resumen de compra</h3>
        
        <div class="flex justify-between mb-2" v-for="(item, index) in Array(4)" :key="index">
            <div>
                <p>Nombre Product</p>
                <p>Precio : $ 344</p>
            </div>
            <div>
                <p>input</p>
            </div>
            <div class="">
                <span>Sun-total $ 29.99o</span>
            </div>
        </div>
        <div class=" mx-16 my-8">
            <div class="flex justify-between">
                <p>Sub-total </p>
            <p>$ 550</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>