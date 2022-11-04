<template>
  <div id="dynamic-component-demo" class="demo">
    <iframe id="iframe" ref="iframe" src="/mobile/index.html"></iframe>
    <nav>
      <router-link to="/home">Home</router-link>
      <span style="margin: 0 10px">11</span>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: "APP",
  created() {
    window.addEventListener("message", () => {
      console.log("APP 2 message");
    });
  },
};
</script>
<style></style>
