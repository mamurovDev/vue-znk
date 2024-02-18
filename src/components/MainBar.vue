<template>
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
</template>

<script>
import { ref } from "vue";
export default {
  name: "MainBar",
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
};
</script>

<style lang="scss">
div.q-toolbar[role="toolbar"] {
  height: 50px;
  //   background: #1b0522;
  justify-content: center;

  .select {
    margin-left: 20px;
    & * {
      color: white;
    }
  }
}
</style>
