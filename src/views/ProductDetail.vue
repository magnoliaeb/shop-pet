<template>
  <div class="container mx-auto px-6 py-5">
    <div>
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-medium px-10">Categoría 2</h1>
          <!-- bread -->
          <Breadcrumb />
        </div>

        <div class="text-center">
          <div class="relative">
            <div class="h-10 w-10">
              <svg class="h-full w-full text-gray-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5.5 5h13a1 1 0 0 1 0.5 1.5L14 12L14 19L10 16L10 12L5 6.5a1 1 0 0 1 0.5 -1.5" /></svg>
            </div>
            <div
              class="h-6 w-6 bg-error-500 rounded-full flex items-center justify-center text-white text-sm font-medium absolute right-0 bottom-0"
            >
              1
            </div>
          </div>
          <span class="text-sm block -mt-1">Filtro</span>
        </div>
      </div>

      <div class="cotainer mx-auto px-8 h-full">
        <!-- grid -->
        <div class="py-8 flex flex-wrap h-full">
          <!-- col -->
          <div
            v-for="(item, index) in products"
            :key="index"
            class="w-1/4 p-6 h-full"
          >
            <product :product="item" />
          </div>
        </div>

        <!-- paginate -->
        <div class="flex justify-center mt-20">
          <Paginate />
        </div>
      </div>
    </div>

    <ModalProductDetail @close="shoModal = $event" :product="product" :shoModal="shoModal" />
  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import Paginate from "../components/Paginate.vue";
import Product from "../components/Product.vue";
import { mapGetters, mapActions, mapState } from "vuex";
import ModalProductDetail from "../components/ModalProductDetail.vue";

export default {
  components: { Product, Breadcrumb, Paginate, ModalProductDetail },

  data() {
    return {
      shoModal: false
    };
  },

   methods: {
    ...mapActions(['getProducts']), 

      getProduct(id) {
      this.shoModal = true
      this.findProduct(id)

    },

    fetchData () {
      const fetchedId = this.$route.params.id
      this.getProduct(fetchedId)
    }
  },
  computed: {
    ...mapState(['products']),
    ...mapGetters(['findProduct']),
    product () {
      return this.findProduct(this.$route.params.id)
    },
   
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  
  created() {
    this.fetchData();
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped></style>
