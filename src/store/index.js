
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import { web3Enable, web3Accounts } from 'blot.js'

export default new Vuex.Store({
  state: {allAccounts: [],
  statesMessage:''},
  mutations: {
    STORE_ALL_ACCOUNTS(state, allAccounts){
      state.allAccounts = allAccounts;
    },
    SAVE_STATUS_MESSAGE(state, message){
      state.statesMessage = message;
    }
  },
  getters: {},
  actions: {
    async initWeb3({commit}) {
      const extensions = await web3Enable('Hackathon Token');
      if (extensions.length === 0) {
        // no extension installed, or the user did not accept the authorization
        // in this case we should inform the use and give a link to the extension

        //TODO: return or save to storage null?

        commit('SAVE_STATUS_MESSAGE', "User didn't accept athorization or no extension installed.")
        return; 
      }

      const allAccounts = await web3Accounts();
      commit('STORE_ALL_ACCOUNTS', allAccounts)
      console.log(allAccounts)
    },
    async claimTokens({commit}, payload) {
      commit('SAVE_STATUS_MESSAGE', "NO UNUSED VARS SHITHEAD")
      console.log(payload)
    },
    async transferTokens({commit}, payload){
      commit('SAVE_STATUS_MESSAGE', "NO UNUSED VARS SHITHEAD")

      console.log(payload)
    },
    async swapTokens({commit}, payload){
      commit('SAVE_STATUS_MESSAGE', "NO UNUSED VARS SHITHEAD")

      console.log(payload)
    }
  },
})