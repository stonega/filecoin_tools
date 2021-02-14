<template>
  <div id="app">
    <div class="title"><h1>Simple filecoin tool</h1></div>
    <div class="main-area">
      <Menu />
      <NewAccount />
    </div>
  </div>
</template>

<script>
import NewAccount from "./components/NewAccount.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    NewAccount,
    Menu,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #ff3e00;
  text-transform: uppercase;
  font-size: 2em;
  font-weight: 100;
  margin: 0 auto;
}
.main-area {
  width: 1000px;
  margin-top: 60px;
  text-align: center;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 240px;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .main-area {
    max-width: none;
  }
}
</style>
