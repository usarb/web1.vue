<template>
  <div>
    <div id="price-component">
      Price: {{ price }} <span class="discount">-{{ discount }}%</span> <br />
      Quantity: <input type="number" v-model="quantity" /> <br />
      Amount: {{ amount }}
      <div id="amount-discounted">
        Amount discounted: {{ amountDiscounted }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      price: 20,
      quantity: 8,
      discount: 50
    };
  },
  computed: {
    amount() {
      return this.price * this.quantity;
    },
    amountDiscounted() {
      return ((this.price * (100 - this.discount) ) / 100) * this.quantity
    }
  }
};
</script>

<style scoped>
#price-component {
  background: lightblue;
}
.discount {
  color: red;
  font-size: 26px;
}
#amount-discounted {
  color: violet;
}
</style>
