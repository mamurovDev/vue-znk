<template>
  <q-layout view="hHh Lpr fFf" class="register">
    <main-bar />
    <q-page-container class="container">
      <router-view />
    </q-page-container>
    <main-footer />
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MainBar from "src/components/MainBar.vue";
import MainFooter from "src/components/MainFooter.vue";
export default defineComponent({
  name: "RegisterLayout",
  components: {
    MainBar,
    MainFooter,
  },
  setup() {
    const leftDrawer = ref(false);
    return { leftDrawer };
  },
  created() {
    console.log("this is regter page, and is working!");
  },
});
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.register {
  background-color: #230e2a;
}
</style>
