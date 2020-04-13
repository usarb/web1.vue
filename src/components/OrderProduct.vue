<template>
  <div>
    <div id="price-component">
      Product price from parent {{price}}<br>
      Price: {{ priceLocal }} MDL <span v-show="extraDiscount <= 0" class="discount">-{{ discount }}%</span> <br />
      Quantity: <input type="number" v-model="quantity" min="1" max="100" /> <br />
      Amount: {{ amount }} MDL
      <div id="amount-discounted" v-show="extraDiscount <= 0">
        Amount discounted: {{ amountDiscounted }} MDL
      </div>
      <div id="extra-discount" v-show="extraDiscount > 0">
        Extra discount: {{extraDiscount}} MDL
      </div>
    </div>
    <div id="final-price">Final price <strong>{{finalPrice}}</strong> MDL</div>
    <button>Order</button>
  </div>
</template>

<script>
export default {
  name: "Order",
  props: {
    price: {
      type: Number,
      required: true,
      default: 0
    }
  },
  data() {
    return {
      priceLocal: 0,
      quantity: 2,
      discount: 50,
      extraDiscount: 0
    };
  },
  computed: {
    amount() {
      return this.priceLocal * this.quantity;
    },
    amountDiscounted() {
      return ((this.priceLocal * (100 - this.discount)) / 100) * this.quantity;
    },
    finalPrice() {
      if (this.extraDiscount > 0){
        return this.amount - this.extraDiscount;
      } else {
        return this.amountDiscounted;
      }
    }
  },
  watch: {
    quantity() {
      if (this.quantity > 5) {
        this.extraDiscount = 50;
      } else {
        this.extraDiscount = 0;
      }
    }
  },
  beforeMount() {
    this.priceLocal = this.price;
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

  #extra-discount{
    background: chartreuse;
    font-size: 20px;
  }

  #final-price{
    background: darkorange;
  }
</style>
