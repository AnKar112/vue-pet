import store from '../store'
import { VueCookieNext } from 'vue-cookie-next'
import API from '@/services/API.js'
import { useLoginData } from '@/hooks/useLoginData.js'
const required = val => !!val
const minLength = num => val => val.length >= num

export function useLogin() {
    const loginData = useLoginData({
        login: {
            value: '',
            validators: {required}
        },
        password: {
            value: '',
            validators: {required, minLength: minLength(8)}
        }
    })
    const onSubmit = async () => {
        try {
            const response = await API.post('/login', {
                login: loginData.login.value,
                password: loginData.password.value
            })
            VueCookieNext.setCookie('api_token', response.data.api_token)
            store.commit('loginToggle', true)
            store.commit('setUserData', response.data.data)
        } catch (e) {
            console.log(e)
            if (e.response.status == 422) {
                alert('Wrong login or password')
            }
        }
    }
    return {
        onSubmit, loginData
    }
} 

export function useLogout() {
    const onLogout = async () => {
        try {
            await API.post('/logout')
            VueCookieNext.removeCookie('api_token')
            store.commit('loginToggle', false)
            store.commit('setUserData', {})
        } catch (e) {
            console.log(e)
        }
    }
    return {
        onLogout
    }
    
}