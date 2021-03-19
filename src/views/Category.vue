<template>
  <div class="container mx-auto px-6 py-5">
    <div>
      <div class="flex justify-between">
        <div>
            <pre></pre>
          <h1 class="text-3xl font-medium px-10">{{ category.name }}</h1>
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
          <p v-if="products.length <= 0">No hay productos asignados a esta categoria</p>
        <!-- grid -->
        <div v-else class="py-8 flex flex-wrap h-full">
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

  </div>
</template>

<script>
import Breadcrumb from "../components/Breadcrumb.vue";
import Paginate from "../components/Paginate.vue";
import Product from "../components/Product.vue";
import { mapGetters , mapActions } from "vuex";
import ModalProductDetail from "../components/ModalProductDetail.vue";


export default {
  components: { Product, Breadcrumb, Paginate, ModalProductDetail },

  methods: {
    ...mapActions(['getProducts', 'getCategories']),

    getCategoryDetail(id) {
      this.findCategory(id)

    },

    fetchData () {
      const fetchedId = this.$route.params.id
      this.getCategoryDetail(fetchedId)
    }
  },
  computed: {
    ...mapGetters(["productsByCategory", 'findCategory']),
    products () {
      return this.productsByCategory(this.$route.params.id)
    },
    category () {
      return this.findCategory(this.$route.params.id)
    },
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },

  created() {
        this.getProducts()
        this.getCategories()
     }
};
</script>

