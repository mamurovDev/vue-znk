<template>
  <navigation-bar />
  <q-page>
    <article>
      <h2>Знакомства без преград</h2>
      <p>
        Для современного мира сплочённость команды профессионалов однозначно
        фиксирует необходимость системы обучения кадров, соответствующей
        насущным потребностям.
      </p>
      <form>
        <q-input
          v-model="email"
          type="email"
          class="inputs"
          bg-color="primary"
          placeholder="Введите электронную почту"
          rounded
          standout
        />

        <q-input
          v-model="password"
          :type="isPwd ? 'password' : 'text'"
          placeholder="Введите пароль"
          bg-color="primary"
          rounded
          standout
          class="inputs"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
        <q-btn
          class="q-px-xl q-py-xs btn"
          label="Войти"
          rounded
          type="submit"
        />
        <q-btn flat rounded class="forgot">Я не помню пароль</q-btn>
      </form>
    </article>
    <div class="blur"></div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationBar from "src/components/NavigationBar.vue";
export default defineComponent({
  name: "LoginPage",
  components: {
    NavigationBar,
  },
  data() {
    return {
      password: "",
      isPwd: false,
      email: "",
    };
  },
});
</script>

<style lang="scss" scope>
main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  background-image: url("../assets/gr.png");
  background-position: center;
  background-size: cover;
  .blur {
    position: absolute;
    height: 35rem;
    width: 35rem;
    z-index: 0;
    background: radial-gradient(#230e2a8f, #230e2a);
  }
  article {
    color: white;
    height: 370px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    h2,
    p {
      z-index: 1;
    }
    p {
      width: 50pc;
    }
    .inputs {
      width: 320px;
      z-index: 1;
      input {
        color: white;
      }
    }
    .btn {
      background: linear-gradient(to right, #ee0979, #ff6a00) !important;
      width: 320px;
      padding: 1em;
      z-index: 1;
    }
    .forgot {
      z-index: 1;
      font-size: 0.7rem;
      color: rgba(255, 255, 255, 0.658);
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 230px;
      justify-content: space-between;
    }
  }
}
</style>
