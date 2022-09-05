import {computed, reactive} from 'vue'
import useField from './useField'

export function useLoginData (init = {}) {
    const loginData = reactive({})

    for (const [key, value] of Object.entries(init)) {
        loginData[key] = useField(value)
    }

    loginData.valid = computed(() => Object.keys(loginData).filter(k => k !== 'valid').every(k => loginData[k].valid))

    return loginData
}