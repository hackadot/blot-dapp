<template>
<v-app>
    <Header />

    <v-main>
        <AppBody />
    </v-main>
</v-app>
</template>

<script>
import AppBody from './components/AppBody';
import Header from './components/Header'
export default {
    name: 'App',

    components: {
        AppBody,
        Header,
    },

    data() {
        return {};
    }
};
</script>
