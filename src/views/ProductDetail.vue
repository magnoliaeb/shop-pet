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
              <svg
                class="h-full w-full text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
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
import { mapState, mapActions } from "vuex";
import ModalProductDetail from "../components/ModalProductDetail.vue";

export default {
  components: { Product, Breadcrumb, Paginate, ModalProductDetail },

  data() {
    return {
      product: null,
      shoModal: false
    };
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {

    getProduct(id) {

      // console.log(id)
      this.shoModal = true

      const product = this.products.find((item) => {
        return item.id === id
      });

      this.product = product;
      console.log(product)
    },


    fetchData () {
      const fetchedId = this.$route.params.id
      // replace `getPost` with your data fetching util / API wrapper
      this.getProduct(fetchedId)
    }
  },
  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.fetchData();
    this.$store.dispatch("getProducts");
  },
};
</script>

<style lang="scss" scoped></style>
