<template>
    <div v-if="shoModal" class="h-full bg-gray-700 bg-opacity-20 absolute inset-0 z-40 flex justify-center items-center overflow-hidden overscroll-none">
        <div class="z-50 bg-white w-1/2 border-2 shadow-lg rounded-md">
        <div class="flex justify-between border-b border-gray-200 py-1 px-2">
            <p class="text-lg font-bold">Producto Agregado</p>
            <div @click="closeModal" class="w-6 h-6">
<svg class="h-full w-full text-gray-700"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
        </div>
        <div class="mx-10 py-8">
            <div class="flex justify-between flex-wrap">
                <div class="w-5/12 p-4">
                    <img class="h-80 w-full object-cover" :src="product.photo" alt="">
                </div>
                <div class="w-7/12 p-4">
                    <h2 class="text-3xl font-medium">{{ product.name }}</h2>
                    <p class="text-lg font-medium">{{ product.code }}</p>
                    <p>{{ product.price }}</p>
                    <div>
                        <p>Cantidad</p>
                    </div>
                    <p>Subtotal</p>
                </div>

            </div>
            <div>
                <p>{{ product.description | reduceText }}</p>
            </div>
            <div class="w-full flex space-x-4 mt-4">
                <button @click="closeModal" class="px-6 w-full text-center rounded-md font-medium py-2 text-black bg-white">Seguir comprando</button>
                <button @click="addProductToCart(product)" class="px-6 w-full text-center rounded-md font-medium py-2 text-white bg-gray-700">Agregar al carro</button>
            </div>

            </div>

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

    export default {
        
        filters: {
            reduceText: function(value) {
                return value.slice(0,200);
            }
        },
        methods: {
            closeModal() {
                this.$emit('close', false)
            },
            ...mapActions(['addProductToCart'])
        },
        
        props: {
            product: {
                type: Object,
            },
            shoModal: {
                type: Boolean,
            },
        },
        
        
    }
</script>

<style lang="scss" scoped>

</style>