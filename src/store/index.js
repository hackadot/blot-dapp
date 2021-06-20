
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import { web3Enable, web3Accounts } from 'blot.js'

export default new Vuex.Store({
  state: {
    allAccounts: [],
    statesMessage:'',
    isConnected: false,
    networkName: 'Local',
    walletAddress: 'A332Nas252152352',
    balance: 0,
},
getters: {
  getIsConnected: state => state.isConnected,
  getNetworkName: state => state.networkName,
  getBalance: state => state.balance,
  getWalletAddress: state => state.walletAddress
},
  mutations: {
    STORE_ALL_ACCOUNTS(state, allAccounts){
      state.allAccounts = allAccounts;
    },
    SAVE_STATUS_MESSAGE(state, message){
      state.statesMessage = message;
    },
    SET_BALANCE(state, balance){
      state.balance = balance;
    }
  },
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
      commit('SAVE_STATUS_MESSAGE', "WIP")
      console.log(payload)
    },
    async transferTokens({commit}, payload){
      commit('SAVE_STATUS_MESSAGE', "WIP")

      console.log(payload)
    },
    async swapTokens({commit}, payload){
      commit('SAVE_STATUS_MESSAGE', "WIP")

      console.log(payload)
    },
    async getBalance({commit}){
      commit('SET_BALANCE', 0)
      console.log('Balance:')
    },
    async transfer({commit}, payload){
      commit('SAVE_STATUS_MESSAGE', "WIP")
      console.log(payload, commit)
    }
  },
})