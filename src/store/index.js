import Vue from 'vue'
import Vuex from 'vuex'
import {
  setSession,
} from '@/common/mutils';
Vue.use(Vuex)
const userMsg = {
  avatar: "",
  token: "",
  user_id: "",
  user_name: "",
  _id: "",
};

try {
  userMsg = JSON.parse(getSession('userMsg')) || userMsg;
} catch (e) {}

export default new Vuex.Store({
  state: {
    user: userMsg
  },
  mutations: {
    user_msg(state, data) {
      state.user = Object.assign({}, data);
    }
  },
  actions: {
    USER_MSG: ({
      commit
    }, data) => {
      setSession('userMsg', data);
      commit('user_msg', data);
    },
  }
})