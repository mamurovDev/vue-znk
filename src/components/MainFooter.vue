<template>
  <div class="flex justify-around">
    <ul class="flex justify-around items-center">
      <li><a href="#">О нас</a></li>
      <li><a href="#">Поддержка</a></li>
      <li><a href="#">Советы</a></li>
      <li><a href="#">Контакты</a></li>
      <li><a href="#">Правила оплаты</a></li>
    </ul>

    <ul class="flex justify-around items-center">
      <li><a href="">Политика обработки персональных данных</a></li>
      <li>
        <q-select
          borderless
          label-color="white"
          v-model="option"
          :options="options"
          class="select"
        />
      </li>
      <li>© Company 2021</li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "MainFooter",
  data() {
    return {
      option: ref("RU"),
      options: ["RU", "ENG", "KZ"],
    };
  },
};
</script>

<style lang="scss">
a,
li {
  color: white;
  text-decoration: none;
}
li {
  list-style-type: none;
}
ul {
  width: 40%;
}

.select * {
  color: white;
}
.border {
  border: 1px solid red;
}
</style>
