<template>
  <v-container> </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    ...mapActions(['initWeb3']),
  },
  async mounted() {
    this.initWeb3();
  },
};
</script>
