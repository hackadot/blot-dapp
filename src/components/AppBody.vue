<template>
<v-container class="d-flex justify-center ms-6">
    <v-card class="mx-auto" max-width="1000px" outlined>
        <v-card-title class="d-flex justify-center"><div >SWAP</div></v-card-title>

        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="d-flex  flex-row text-h5">
                    <div class="text-overline ma-5">
                        DOT
                    </div>
                    <v-text-field v-model.number="DOT" @input="onInput(DOT, 'DOT')" type="number" class="mt-2" min="0"></v-text-field>
                </v-list-item-title>
                <v-list-item-subtitle class="d-flex justify-center mt-5">
                    <v-icon large color="red darken-2">
                        mdi-autorenew
                    </v-icon>
                </v-list-item-subtitle>
                <v-list-item-title class="d-flex  flex-row text-h5 mb-1">
                    <div class="text-overline ma-5">
                        kek
                    </div>
                    <v-text-field v-model.number="KEK" @input="onInput(KEK, 'KEK')" type="number" class="mt-2" min="0"></v-text-field>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions class="d-flex justify-center  mb-5">
            <v-btn text color="red accent-4" :disabled="getIsConnected" elevation="2" @click="swapTokens">
                Swap tokens
            </v-btn>
        </v-card-actions>
    </v-card>

</v-container>
</template>

<script>
import {
    mapActions, mapGetters
} from "vuex";
export default {
    name: "AppBody",
    data() {
        return {
            DOT: 0,
            KEK: 0
        };
    },
    computed: {
        ...mapGetters(['getBalance', 'getIsConnected']),
    },
    methods: {
        ...mapActions(['initWeb3']),
        onInput(amount, tokenType) {
            if(amount < 0 || isNaN(amount)){
                switch (tokenType) {
                    case 'DOT': this.DOT = 0; break;
                    case 'KEK': this.KEK = 0; break;
                }
            }
        },
        swapTokens(){
            console.log(this.DOT, this.KEK)
        }
    },
    async mounted() {
        this.initWeb3();
    },
};
</script>
