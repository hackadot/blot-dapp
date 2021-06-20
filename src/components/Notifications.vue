<template>
 <v-snackbars :messages.sync="getStatusMessages" color="red" bottom right/>
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
        ...mapGetters(['getStatusMessages'])
    }
}
</script>
