<template>
       <!-- nav top -->
        <div class="border-b border-gray-200 relative">
        <nav class="container mx-auto flex justify-between pt-3 items-center">
            <div>
                <a href="#" class="font-bold text-2xl">LOGO</a>
            </div>
            <div class="flex space-x-4 items-center">
                <div class="relative">
                    <input type="text" placeholder="Buscardor de Producto y Categorias"  class="py-2 border border-gray-300 pl-10 rounded-full text-sm w-80">
                    <div class="w-4 h-4 absolute inset-0 flex left-3 top-2">
                        <svg class="h-full w-full text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
                    </div>
                </div>

                <div class="">
                    <button @click="showList = !showList" class="text-center focus:outline-none">
                        <div class="relative">
                            <div class="h-10 w-10">
                                <svg class="h-full w-full text-gray-700"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                                </svg>
                            </div>
                            <div class="h-6 w-6 bg-error-500 rounded-full flex items-center justify-center text-white text-sm font-medium absolute right-0 bottom-0">{{ countCartList }}</div>

                        </div>
                        <span class="text-sm block -mt-1">Bolsa</span>
                    </button>
                <ListCart v-if="showList" class="absolute z-20 right-0" />
                </div>


            </div>
        </nav>
        

    </div>
</template>

<script>
import ListCart from './ListCart.vue'
import  { mapGetters } from 'vuex'
    export default {
  components: { ListCart },
        data() {
            return {
                showList: false
            }
        },
        computed: {
            ...mapGetters(['countCartList'])
        },
    }
</script>

<style lang="scss" scoped>

</style>