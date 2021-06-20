<template>
 <v-snackbars :messages.sync="messages" color="red" bottom right/>
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
        getMsg (){
            return this.messages
        },
        // getStatusMessages:{
        //     get: ()=> {
        //         return this.$store.getters.getStatusMessages
        //     },
        //     set: ()=> {
        //         this.$store.commit('increment')
        //     }


        // }
        ...mapGetters(['getStatusMessages'])
    },
    mounted(){
        setInterval(()=>{
            if(this.getStatusMessages.length !== 0) {
                console.log('test')
                this.messages.push(this.getStatusMessages[0])
            }
        }, 100)
    }
}
</script>
