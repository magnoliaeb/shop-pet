<template>
  <div class="px-6 border-r border-gray-300 fiexed h-full w-full">
    <div class="flex justify-between items-center py-4">
      <h2 class="text-2xl font-semibold">Categorias</h2>
      <div class="h-6 w-6 flex-none">
        <svg
          class="h-full w-full text-gray-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
    <div class="space-y-1">
      <div class="py-1 text-sm px-4" v-for="item in categories" :key="item.id">
        <router-link class="flex justify-between" :to="{ name: 'Category', params: { id: item.id }}">
          <p>{{ item.name }}</p>
          <div class="w-6 h-6">
            <svg
              class="h-full w-full text-gray-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import http from '../config/http'
export default {
  data() {
    return {
      categories: [],
    };
  },
  async created () {

    const resp = await http.get('/product-category')
    this.categories = resp.data
    
  },
};
</script>

<style lang="scss" scoped></style>
