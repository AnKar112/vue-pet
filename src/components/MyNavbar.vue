<template>
  <header class='bg-green-300 py-6'>
    <div class="container mx-auto flex justify-between items-center px-6">
      <router-link to="/" class="flex text-2xl sm:text-4xl font-medium text-center uppercase text-white">
        Home
      </router-link>
      <login-form v-if="!isLogged" />
      <navbar-user-account v-else />
    </div>
  </header> 
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import navbarUserAccount from '@/components/navbarUserAccount.vue'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  components: {
    LoginForm,
    navbarUserAccount
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