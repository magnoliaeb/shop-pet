<template>
    <div class="w-96 border border-gray-300 px-4 py-6 bg-white">
        <h3 class="my-3 font-medium text-lg">Resumen de compra</h3>
        <p v-if="countCartList <= 0">No hay productos agregado en el carrito</p>
        <div v-else class="flex justify-between mb-2" v-for="(item, index) in cartList" :key="index">
            <div>
                <p>{{ item.name }}</p>
                <p>Precio : $ {{ item.price }}</p>
            </div>
            <div>
                <p>input</p>
            </div>
            <div class="">
                <span>Sun-total $ {{ item.price * item.quantity }}</span>
            </div>
        </div>
        <div class=" mx-16 my-8">
            <div class="flex justify-between">
                <p>Sub-total </p>
            <p>$ {{ totalCartList }}</p>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

    export default {
        computed: {
            ...mapState(['cartList']),
            ...mapGetters(['countCartList', 'totalCartList'])
        },
    }
</script>

<style lang="scss" scoped>

</style>