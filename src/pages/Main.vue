<template>
    <div v-if="!isLogged">
      <p class="text-2xl">You must be logged to see posts!</p>
      <p class="text-2xl">login: teacher@akadasia.com, password: akadasia#dev#v3</p>
    </div>
    <posts v-else/>

</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
import posts from '@/components/Posts.vue'
export default {
  components: {
    posts
  },
  setup() {
    const store = useStore()
    return {
      isLogged: computed(() => store.state.isLogged)
    }
  }
}
</script>

<style>

</style>