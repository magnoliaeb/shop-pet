<template>
     <div class="flex w-1/2 space-x-1 justify-between h-8 ">
          <div class="px-3 h-8 hover:bg-gray-400 w-8 bg-gray-200 rounded-full border-gray-00 flex items-center justify-center text-center">
            <svg class="h-full w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="11 17 6 12 11 7" />  <polyline points="18 17 13 12 18 7" /></svg>
          </div>
          <div class="px-3 h-8 hover:bg-gray-400 w-8 bg-gray-200 rounded-full border-gray-00 flex items-center justify-center text-center">
            <svg class="h-full w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="15 18 9 12 15 6" /></svg>
          </div>
          <div class="px-3 h-8 hover:bg-gray-400 w-8 bg-gray-200 rounded-full border-gray-00 flex items-center justify-center text-center" v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item">
            {{ item }}
          </div>

          <div class="px-3 h-8 hover:bg-gray-400 w-8 bg-gray-200 rounded-full border-gray-00 flex items-center justify-center text-center">
            <svg class="h-full w-4 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
</svg>
          </div>
          <div class="px-3 h-8 hover:bg-gray-400 w-8 bg-gray-200 rounded-full flex itms-center text-center">
            <svg class="h-full w-4 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polyline points="13 17 18 12 13 7" />  <polyline points="6 17 11 12 6 7" /></svg>
          </div>

        </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>