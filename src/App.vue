<template>
  <div id="app">
    <br />
    <br />
    <div style="text-align:center">
      <a
        ><router-link style="color: black; text-decoration: none;" to="/"
          >Menu</router-link
        ></a
      >
    </div>
    <router-view></router-view>
    <br />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>
<style>
.button {
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
