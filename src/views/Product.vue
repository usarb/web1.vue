<template>
  <div>
    <h1>Super product</h1>
    <p>
      Super product description
    </p>
    <p>
      <span id="product-price">{{ price }} MDL</span>
      <OrderProduct :price="price"></OrderProduct>
    </p>
  </div>
</template>

<script>
import OrderProduct from "@/components/OrderProduct";

export default {
  name: "Product",
  components: {
    OrderProduct
  },
  data() {
    return {
      price: 20
    };
  }
};
</script>

<style scoped>
  #product-price{
    background: violet;
    font-size: 35px;
  }
</style>
