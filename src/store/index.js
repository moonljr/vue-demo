import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    count: state => {
      if (state.count < 0) {
        return '已经到0了 不能再小了'
      } else {
        return state.count
      }
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    direment(state) {
      if (state.count < 0) {
        state.count = -1;
      } else {
        state.count -= 1;
      }

    }
  },
  actions: {
    incrementAsync({
      commit
    }) {
      setTimeout(() => {
        commit('increment', 10)
      }, 1000);
    },
    dirementAsync({
      commit
    }) {
      setTimeout(() => {
        commit('direment', 10)
      }, 1000);
    }
  }
})
