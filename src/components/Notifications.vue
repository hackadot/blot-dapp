<template>
 <v-snackbars :messages.sync="getMessages" color="red" bottom right></v-snackbars>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import VSnackbars from "v-snackbars";
export default {
    name: "Snacks",
    data() {
        return {};
    },
    components:{VSnackbars},
    computed: {
        ...mapGetters['getMessages']
    }

}
</script>
