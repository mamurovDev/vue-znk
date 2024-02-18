<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import router from "src/router";
import { defineComponent } from "vue";
// import EssentialLink from 'components/EssentialLink.vue';

export default defineComponent({
  name: "MainLayout",
  mounted() {
    this.$router.replace("register/login");
  },
});
</script>

<style lang="scss">
div.q-toolbar[role="toolbar"] {
  height: 50px;
  background: #1b0522;
  justify-content: center;

  .select {
    margin-left: 20px;
    & * {
      color: white;
    }
  }
}
</style>
