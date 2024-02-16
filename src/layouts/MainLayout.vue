<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <div class="">Знакомства по всему миру</div>
        <q-select
          borderless
          v-model="country"
          :options="options"
          label-color="white"
          class="select"
        />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
// import EssentialLink from 'components/EssentialLink.vue';

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      options: ["🇺🇸 Америка", "🇷🇺 Russia", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England"],
      country: ref("🇺🇸 Америка"),
    };
  },
  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
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
