<template>
  <div class="container mx-auto px-6 py-5">
    <div>
      <div class="flex justify-between">
        <div>
          <h1 class="text-3xl font-medium px-10">Categoría 2</h1>
          <!-- bread -->
          <Breadcrumb />
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
        <div class="flex justify-center">
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
import { mapState, mapActions } from "vuex";
import ModalProductDetail from "../components/ModalProductDetail.vue";

export default {
  components: { Product, Breadcrumb, Paginate, ModalProductDetail },

  computed: {
    ...mapState(["products"]),
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>
