<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  },
  beforeCreate(){
    console.log("before create");
  },
  created(){
    console.log("created");
  },
  beforeMount(){
    console.log("before mount");
  }
};
</script>
