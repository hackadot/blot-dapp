
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import { Blot, NetworkProvider, Account } from 'blot.js'

export default new Vuex.Store({
  state: {
    allAccounts: [],
    statesMessage: '',
    isConnected: false,
    networkName: 'Local',
    walletAddress: '',
    balance: 0,
    notificationMessages: [],
    provider: null,
    blot: null,
  },
  getters: {
    getIsConnected: state => state.isConnected,
    getNetworkName: state => state.networkName,
    getBalance: state => state.balance,
    getWalletAddress: state => state.walletAddress,
    getStatusMessages: state => state.notificationMessages,
    getProvider: state => state.provider,
    getBlot: state => state.blot,
    getAccounts: state => state.allAccounts
  },
  mutations: {
    STORE_ALL_ACCOUNTS(state, allAccounts) {
      state.allAccounts = allAccounts;
    },
    SAVE_STATUS_MESSAGE(state, message) {
      state.statesMessage = message;
    },
    SET_BALANCE(state, balance) {
      state.balance = balance;
    },
    PUSH_NOTIFICATION_MESSAGE(state, message) {
      state.notificationMessages = message;
      console.log(state.notificationMessages)
    },
    SET_PROVIDER(state, provider) {
      state.provider = provider;
    },
    SET_BLOT(state, blot) {
      state.blot = blot;
    },
    SET_CONNECTION_STATUS(state, status) {
      state.isConnected = status;
    },
    SET_ACCOUNT_ADDRESS(state, address){
      state.walletAddress = address
    }
  },
  actions: {
    async initWeb3({ commit, dispatch }) {
      const provider = await new NetworkProvider('ws://127.0.0.1:9944').connect();
      commit('SET_PROVIDER', provider);
      const blot = new Blot(provider);
      try {
        await blot.enable('Hackathon Token');
      } catch (err) {
        commit('SAVE_STATUS_MESSAGE', "User didn't accept athorization or no extension installed.")
        console.warn(err)
      }
      commit('SET_BLOT', blot);
      commit('SET_CONNECTION_STATUS', true);
      const allAccounts = await blot.getAccounts();
      commit('PUSH_NOTIFICATION_MESSAGE', [`Account ${allAccounts[0].address} connected.`])
      setTimeout(()=>{

      commit('PUSH_NOTIFICATION_MESSAGE', [])

      }, 100);
      commit('SET_ACCOUNT_ADDRESS',allAccounts[0].address)
      commit('STORE_ALL_ACCOUNTS', allAccounts)
      console.log(allAccounts)
      dispatch('getBalance', allAccounts[0].address);
    },
    async claimTokens({ commit }, payload) {
      commit('SAVE_STATUS_MESSAGE', "WIP")
      console.log(payload)
    },
    async transferTokens({ commit }, payload) {
      commit('SAVE_STATUS_MESSAGE', "WIP")

      console.log(payload)
    },
    async swapTokens({ commit }, payload) {
      commit('SAVE_STATUS_MESSAGE', "WIP")

      console.log(payload)
    },
    async getBalance({ commit, getters }, payload) {
      const balance = (await getters.getProvider.getBalance(payload)).toString();
      commit('SET_BALANCE', balance)
      console.log('Balance:', balance, 'Payload:', payload)
    },
    async transfer({ commit, getters, dispatch }, {addressFrom, tokenAmount}) {
      const sender = new Account(addressFrom);
      console.log(sender.getAddress())
      const blot = getters.getBlot;
      const allAccounts = getters.getAccounts;
      const status = await blot.transfer(0, allAccounts[2].address, tokenAmount, ({ events = [], status }) => {
        console.log('Transaction status:', status.type)

        if (status.isInBlock) {
          setTimeout(()=>{

            commit('PUSH_NOTIFICATION_MESSAGE', [`Included at block hash ${status.asInBlock.toHex()}`])

      
            }, 0);
          setTimeout(()=>{

            commit('PUSH_NOTIFICATION_MESSAGE', [])
      
            }, 300);
          events.forEach(({ event: { data, method, section }, phase }) => {
            setTimeout(()=>{

              commit('PUSH_NOTIFICATION_MESSAGE', [`${phase.toString()} : ${section}.${method} ${data.toString()}`])
  
        
              }, 0);
            
          })
          setTimeout(()=>{

            commit('PUSH_NOTIFICATION_MESSAGE', [])
      
            }, 3000);
        } else if (status.isFinalized) {
          commit('PUSH_NOTIFICATION_MESSAGE', [`Finalized block hash ${status.asFinalized.toHex()}`])

          console.log()
        }
        dispatch('getBalance', allAccounts[0].address);
      })
      console.log('status', status)

      commit('SAVE_STATUS_MESSAGE', "WIP")
      console.log(addressFrom, commit)
    }
  },
})