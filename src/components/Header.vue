<template>
<v-app-bar app color="primary" dark>
    <div class="d-flex align-center font-weight-medium" style="font-size:24px">
        HACKADOT
    </div>

    <v-spacer></v-spacer>
    <div v-if="!getIsConnected">
        <v-btn color="secondary" elevation="2" @click="initWeb3">Connect to a blot </v-btn>
    </div>
    <div v-else class="d-flex">
        <div class="ml-5"> {{getNetworkName}} </div>
        <div class="ml-5"> {{getBalance}} nDOT</div>
        <div class="ml-5" style="max-width: 65px; overflow: hidden; text-overflow: ellipsis;"> {{getWalletAddress}} </div>
    </div>

</v-app-bar>
</template>

<script>
import {
    mapGetters, mapActions
} from 'vuex';
export default {
    name: 'Header',

    data() {
        return {};
    },
    methods: {
        ...mapActions(['initWeb3']),

    },
    computed: {
        ...mapGetters(['getBalance', 'getIsConnected', 'getNetworkName', 'getWalletAddress'])
    }
};
</script>
