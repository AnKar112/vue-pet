<template>
  <div class="flex items-center">
    <div class="flex items-center mr-6"> 
      <img class='w-10 h-10 mr-4 rounded-full' :src='data.avatar_url'/>
      <p class="text-xl font-medium">{{data.username}}</p>
    </div>
    <logout-form />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import LogoutForm from '@/components/LogoutForm.vue'
export default {
  components: {
    LogoutForm
  },
  setup() {
    const store = useStore()
    return {
      data: computed(() => store.state.userData)
    }
  }
}
</script>

<style>

</style>