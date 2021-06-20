<template>
  <v-container>
   
  </v-container>
</template>

<script>
  import { web3Enable, web3Accounts } from 'blot.js'
  export default {
    name: 'HelloWorld',

    data(){
      return {}
    },

    methods:{},

     async mounted () {
    // this call fires up the authorization popup

    const extensions = await web3Enable('Hackathon Token');

    console.log('extensions', extensions)
    if (extensions.length === 0) {
        // no extension installed, or the user did not accept the authorization
        // in this case we should inform the use and give a link to the extension
        return;
    }
    // we are now informed that the user has at least one extension and that we
    // will be able to show and use accounts
    const allAccounts = await web3Accounts();
    console.log(allAccounts)
  }
  }
</script>
