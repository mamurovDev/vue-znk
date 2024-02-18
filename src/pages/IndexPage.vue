<template>
  <q-page class="row items-center justify-evenly"> </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      options: ["🇺🇸 Америка", "🇷🇺 Russia", "🏴󠁧󠁢󠁥󠁮󠁧󠁿 England"],
      country: ref("🇺🇸 Америка"),
    };
  },
  components: {},

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
