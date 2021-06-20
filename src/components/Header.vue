<template>
<v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />

        <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div>

    <v-spacer></v-spacer>
    <div v-if="!getIsConnected">
        <v-btn color="secondary" elevation="2">Connect to a blot </v-btn>
    </div>
    <div v-else class="d-flex">
        <div class="ml-5"> {{getNetworkName}} </div>
        <div class="ml-5"> {{getBalance}} DOT</div>
        <div class="ml-5" style="max-width: 65px; overflow: hidden; text-overflow: ellipsis;"> {{getWalletAddress}} </div>
    </div>

</v-app-bar>
</template>

<script>
import {
    mapGetters
} from 'vuex';
export default {
    name: 'Header',

    data() {
        return {};
    },
    computed: {
        ...mapGetters(['getBalance', 'getIsConnected', 'getNetworkName', 'getWalletAddress'])
    }
};
</script>
