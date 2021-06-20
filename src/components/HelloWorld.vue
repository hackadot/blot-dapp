<template>
  <v-container>
   
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'HelloWorld',

    data(){
      return {}
    },
    methods:{
      ...mapActions(['initWeb3'])
    },
  
     async mounted () {
    // this call fires up the authorization popup
  this.initWeb3();
    // we are now informed that the user has at least one extension and that we
    // will be able to show and use accounts
   
  }
  }
</script>
