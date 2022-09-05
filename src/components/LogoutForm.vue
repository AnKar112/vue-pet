<template>
  <my-button @click="onLogout">Logout</my-button>
</template>

<script>
import { useLogout } from '@/hooks/useAuth.js'
export default {
  setup() {
    const {onLogout} = useLogout()
    return {
      onLogout
    }
  }
}
</script>

<style>

</style>