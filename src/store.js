import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      isOpen: false
    }
  },
  mutations: {
    burgerClick(state) {
      state.menu.isOpen = !state.menu.isOpen;
    }
  },
  actions: {
    burgerClick({commit}) {
      commit('burgerClick');
    }
  },
  getters: {
    isOpenMenu: state => state.menu.isOpen
  }
})
