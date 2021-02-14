<template>
  <div class="menu">
    <div
      class="menu-button"
      v-for="menu in menuList"
      v-bind:class="{ active: selectedMenu === menu.name }"
      :key="menu.name"
    >
      {{ menu.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: () => {
    return {
      selectedMenu: "New account",
      menuList: [
        { name: "New account", path: "AccountComponent" },
        { name: "Message signature", path: "SignatureComponent" },
      ],
    };
  },
};
</script>

<style scoped>
.main-area {
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  flex-wrap: wrap;
  margin-top: 40px;
  margin: 0 auto;
}

.menu {
  width: 220px;
  padding-top: 50px;
  padding-right: 20px;
  background-color: bisque;
}

.menu-button {
  width: 200px;
  margin-bottom: 1em;
  text-align: left;
  font-weight: 700;
  padding: 1em 1em;
  background-color: bisque;
  border-radius: 0px 100px 100px 0px;
  border-style: solid 4px grey;
}

.menu-button:hover {
  background-color: aquamarine;
  cursor: pointer;
}
.menu-button.active {
  background-color: aquamarine;
  cursor: pointer;
}

.content {
  width: 800px;
  height: 80vh;
  background-color: beige;
  border-radius: 0px 20px 20px 0;
}
</style>