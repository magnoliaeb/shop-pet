<template>
    <!-- card -->
        <article class="" >
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
            <div class="">
            <div class="relative h-48 ">
              <img :src="product.photo" class="h-full w-full object-cover" :alt="product.abstract">
              <span v-if="product.stock > 0" class="absolute left-0 bottom-0 bg-gray-700 text-white px-2 py-1 text-sm">Disponible</span>
            </div>
            <div class="py-4">
              <h3 class="font-medium my-2 truncate">{{ product.name }}</h3>
              <p>{{ product.price }}</p>
              <div class="flex">
                <div class="text-sm flex items-center border-2 border-gray-700 w-1/4">
                  <button @click="product.quantity++" class="w-4 h-full">+</button>
                  <p class="w-4 text-center">{{ product.quantity }}</p>
                  <button @click="product.quantity--" class="w-4 h-full">-</button>
                </div>
                <button class="w-3/4 bg-primary-600 px-6 flex justify-center py-1">
                  <svg class="h-6 w-6 text-white"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>

                </button>
              </div>
            </div>
          </div>
          </router-link>
        </article>
</template>

<script>
// import { mapActions } from 'vuex'
    export default {
        props: {
          product: {
            type: Object,
  
          },
        },
        
    }
</script>

<style lang="scss" scoped>

</style>