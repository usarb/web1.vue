<template>
  <div>
    Contact information <br>
    <ul>
      <li>
        <strong>E-mail:</strong> {{email}}
      </li>
      <li>
        <strong>Phone:</strong> {{phone}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data(){
    return {
      email: "chilatsergiu@gmail.com",
      phone: "112"
    };
  }
};
</script>

<style scoped>
  ul li{
    background: red;
  }
</style>
