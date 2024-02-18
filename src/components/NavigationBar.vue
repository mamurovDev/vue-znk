<template>
  <nav>
    <div>
      <img src="../assets/logo.svg" alt="" />
      <a href="">Znakomstva.com</a>
    </div>
    <div>
      <q-btn class="white">Впервые здесь?</q-btn>
      <q-btn rounded class="btn white">Регистрация</q-btn>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  height: 13vh;
  .white {
    color: #fff;
    box-shadow: none;
  }
  .btn {
    border: 1px #fe6802 solid;
    padding: 10px 25px;
  }
}
</style>
