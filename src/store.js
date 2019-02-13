import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    isLoginError: false,
    users: [
      {
        id: 0,
        name: 'Bradford Hoffman',
        email: 'tester@test.com',
        password: '1'
      },
      {
        id: 1,
        name: 'Cleo Rivas',
        email: 'cleorivas@wrapture.com',
        password: 'Mccarty'
      },
      {
        id: 2,
        name: 'Monique Buckley',
        email: 'moniquebuckley@wrapture.com',
        password: 'Wall'
      },
      {
        id: 3,
        name: 'Jeanette Barlow',
        email: 'jeanettebarlow@wrapture.com',
        password: 'Roth'
      },
      {
        id: 4,
        name: 'Deidre Stokes',
        email: 'deidrestokes@wrapture.com',
        password: 'Clayton'
      },
      {
        id: 5,
        name: 'Skinner Bullock',
        email: 'skinnerbullock@wrapture.,zcom',
        password: 'Norman'
      }
    ],
    loginUser: null
  },
  mutations: {
    loginSuccess(state) {
      state.isLogin = true
      state.isLoginError = false
    },
    loginFailure(state) {
      state.isLogin = false
      state.isLoginError = true
    }
  },
  actions: {
    login({ state, commit }, payload) {
      const { email, password } = payload

      state.loginUser = state.users.find(item => item.email === email)

      if (state.loginUser && state.loginUser.password === password) {
        commit('loginSuccess')
        router.push({ name: 'my-page' })
      } else {
        commit('loginFailure')
      }
    }
  }
})
