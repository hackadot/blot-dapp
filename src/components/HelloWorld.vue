<template>
<v-container class="d-flex justify-center ms-6">
    <v-card class="mx-auto" max-width="1000px" outlined>
        <v-card-title>SWAP</v-card-title>

        <v-list-item three-line>
            <v-list-item-content>

                <v-list-item-title class="d-flex  flex-row text-h5">
                    <div class="text-overline ma-5">
                        DOT
                    </div>
                    <v-text-field v-model.number="dotInput" @input="onInput(dotInput, 'DOT')" type="number" class="mt-2" min="0"></v-text-field>
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
                    <v-text-field v-model.number="kekTokenInput" @input="onInput(kekTokenInput, 'KEK')" type="number" class="mt-2" min="0"></v-text-field>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-card-actions class="d-flex justify-center">
            <v-btn text color="deep-purple accent-4" disabled elevation="2" >
                Swap tokens
            </v-btn>
        </v-card-actions>
    </v-card>

</v-container>
</template>

<script>
import {
    mapActions
} from "vuex";
export default {
    name: "HelloWorld",
    data() {
        return {
            dotInput: 0,
            kekTokenInput: 0
        };
    },
    methods: {
        ...mapActions(['initWeb3']),
        onInput(amount, type) {
            console.log(amount, type);
        },
        decrement(amount, type) {
            console.log(amount, type);
        },
        swapTokens(){}
    },
    async mounted() {
        this.initWeb3();
    },
};
</script>
