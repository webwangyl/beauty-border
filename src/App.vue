<!--
 * @Descripttion: your project
 * @version: 1.0
 * @Author: WangYuLin
 * @Date: 2021-07-09 15:58:55
 * @LastEditors: WangYuLin
 * @LastEditTime: 2021-09-26 18:07:03
-->
<template>
  <div id="app">
    <clip-card
      :width="300"
      :height="200"
      :k="12"
      :w="2"
      :hasSplit="true"
      type="side"
      borderColor="red"
      containerColor="orange"
      coverColor="blue"
    >
    </clip-card>
  </div>
</template>

<script>
import clipCard from "./packages/YlBorder2/index.vue";
export default {
  name: "app",
  components: {
    clipCard
  },
  data() {
    return {};
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 50%;
  height: 600px;
  padding: 100px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
