<template>
 <v-snackbars :messages.sync="messages" color="green" bottom right :timeout="3000"/>
</template>

<script>
import {
    mapGetters
} from 'vuex';
import VSnackbars from "v-snackbars";
export default {
    name: "Snacks",
    data() {
        return {messages: []};
    },
    components:{VSnackbars},
    computed: {

        ...mapGetters(['getStatusMessages'])
    },
    mounted(){
        setInterval(()=>{
            if(this.getStatusMessages.length !== 0 && this.messages.length === 0) {
                this.messages.push(this.getStatusMessages[0])
            }
        }, 100)
    }
}
</script>
