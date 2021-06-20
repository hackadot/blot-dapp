<template>
<v-app>
    <Header />

    <v-main>
        <AppBody />
        <Notifications/>
    </v-main>
</v-app>
</template>

<script>
import AppBody from './components/AppBody';
import Header from './components/Header';
import Notifications from './components/Notifications';
export default {
    name: 'App',

    components: {
        AppBody,
        Header,
        Notifications
    },

    data() {
        return {};
    }
};
</script>
