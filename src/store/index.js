import { createStore } from "vuex"
import vuejsStorage from 'vuejs-storage'

export default createStore({
    state: () => ({
        isLogged: false,
        userData: {}
    }),
    mutations: {
        loginToggle(state, payload) {
            state.isLogged = payload
        },
        setUserData(state, payload) {
            state.userData = payload
        }
    },
    plugins: [
        vuejsStorage({
          namespace: 'localStore',
          keys: ['userData', 'isLogged']
        })
      ]
})