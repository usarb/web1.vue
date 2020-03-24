<template>
  <div>
    <h1>Super product</h1>
    <p>
      Super product description
    </p>
    <p>
      <OrderProduct></OrderProduct>
    </p>
  </div>
</template>

<script>
import OrderProduct from "@/components/OrderProduct";

export default {
  name: "Product",
  components: {
    OrderProduct
  }
};
</script>

<style scoped>

</style>
