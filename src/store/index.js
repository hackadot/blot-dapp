
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
    walletAddress: 'A332Nas252152352',
    balance: 0,
    messages: [],
    provider: null,
    blot: null,
  },
  getters: {
    getIsConnected: state => state.isConnected,
    getNetworkName: state => state.networkName,
    getBalance: state => state.balance,
    getWalletAddress: state => state.walletAddress,
    getMessages: state => state.messages,
    getProvider: state => state.provider,
    getBlot: state => state.blot
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
      state.messages.push(message);
    },
    SET_PROVIDER(state, provider) {
      state.provider = provider;
    },
    SET_BLOT(state, blot) {
      state.blot = blot;
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
      const allAccounts = await blot.getAccounts();
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
    async transfer({ commit, getters }, payload) {
      const sender = new Account(payload);
      console.log(sender.getAddress())
      const blot = getters.getBlot;
      const allAccounts = getters.getAccounts;
      const status = await blot.transfer(0, allAccounts[2].address, 1, ({ events = [], status }) => {
        console.log('Transaction status:', status.type)

        if (status.isInBlock) {
          console.log('Included at block hash', status.asInBlock.toHex())
          console.log('Events:')

          events.forEach(({ event: { data, method, section }, phase }) => {
            console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString())
          })
        } else if (status.isFinalized) {
          console.log('Finalized block hash', status.asFinalized.toHex())
        }
      })
      console.log('status', status)

      commit('SAVE_STATUS_MESSAGE', "WIP")
      console.log(payload, commit)
    }
  },
})