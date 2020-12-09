<template>
  <div class="home">
    {{ fromJson }}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import testJson from "../json/test.json";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      fromJson: "",
    };
  },
  mounted() {
    this.fromJson = testJson[testJson.length - 1].name;
  },
};
</script>
