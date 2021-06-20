
import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)

import { web3Accounts, web3Enable } from '@polkadot/extension-dapp'

export default new Vuex.Store({
    state: {},
    mutations: {


    },
    getters: {},
    actions: {
      async initWeb3() {
        const extensions = await web3Enable('my cool dapp');  
        if (extensions.length === 0) {
          // no extension installed, or the user did not accept the authorization
          // in this case we should inform the use and give a link to the extension
          return;
      }

      const allAccounts = await web3Accounts();
      console.log(allAccounts)
      
      }


    },
  })