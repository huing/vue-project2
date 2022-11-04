<template>
  <div>
    <div id="dynamic-component-demo" class="demo">我成功了</div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
export default {
  name: "MbApp",
  created() {
    window.addEventListener("message", (event) => {
      // console.log("iframe message", event.data);
      this.$router.push(event.data.path);
    });
  },
  // unmounted() {
  //   // 卸载
  // },
};
</script>
<style></style>
