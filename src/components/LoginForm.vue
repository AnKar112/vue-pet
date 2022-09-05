<template>
  <form @submit.prevent="onSubmit" class="flex justify-between">
    <label class="relative sm:mr-[20px] mr-[10px]">
        <my-input
        placeholder="Login"
        v-model='loginData.login.value'
        :isError="(!loginData.login.valid && loginData.password.touched) ? true : false"
        @blur='loginData.login.blur'/>
        <my-error-message
        class="absolute bottom-[-20px] w-max left-0"
        v-if="(loginData.login.errors.required &&  loginData.login.touched)">
            Please, enter email
        </my-error-message>
    </label>
    <label class="relative sm:mr-[20px] mr-[10px]">
        <my-input
        placeholder="Password"
        v-model='loginData.password.value'
        :isError="(!loginData.password.valid && loginData.password.touched) ? true : false"
        @blur='loginData.password.blur'/>
        <my-error-message
        class="absolute bottom-[-20px] w-max left-0"
        v-if="(loginData.password.errors.required && loginData.password.touched)">
            Please, enter password

        </my-error-message>
        <my-error-message
        class="absolute bottom-[-20px] w-max left-0"
        v-else-if="(loginData.password.errors.minLength && loginData.password.touched)">
            Password should be 8 symbols minimum
        </my-error-message>
    </label>
    
    <my-button
    type="submit"
    :disabled="!loginData.valid"
    :class="!loginData.valid ? 'border-rose-600' : ''">
        Login
    </my-button>
  </form>
</template>

<script>

import { useLogin } from '@/hooks/useAuth.js'
import {toRefs} from 'vue'

export default {
    setup() {
        
        const params = useLogin()

        return {...toRefs(params)}
    }
}
</script>

<style>

</style>