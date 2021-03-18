<template>
  <div class="h-screen relative">

    <NavTop />
<!-- grid -->
<div class="flex">

      <div class="w-1/5">
        <NavLeft class="" />
      </div>
      <div class="w-4/5">
        <router-view></router-view>
      
      </div>
</div>

  </div>
</template>

<script>
import NavLeft from './components/NavLeft.vue'
import NavTop from './components/NavTop.vue'
  export default {
  components: { NavTop, NavLeft },
    
  }
</script>

<style lang="scss" scoped>

</style>