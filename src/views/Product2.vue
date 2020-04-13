<template>
  <div>
    <h1>Super product 2</h1>
    <p>
      Super product description 222
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
  name: "Product2",
  components: {
    OrderProduct
  },
  data() {
    return {
      price: 30
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
