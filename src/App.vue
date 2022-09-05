<template>
  <my-navbar></my-navbar>
    <div class="container mx-auto flex justify-between items-center px-6 py-6">
      <router-view></router-view>  
    </div>
</template>

<script>
  import MyNavbar from '@/components/MyNavbar.vue';
  export default {
    components: {
      MyNavbar
    }
  }
</script>

<style>


</style>