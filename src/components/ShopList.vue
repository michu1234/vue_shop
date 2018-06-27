<template>
  <div class="listing">
    <h2>Produkty:</h2>
    <section class="listing__products">
      <div v-for="(product, index) in products" :key="index" class="listing__product">
        <img :src="product.image" alt="">
        <p class="text--bold">{{product.name}}</p>
        <p>{{product.price | priceCurrency("PLN")}}</p>
        <button @click="addToCart" class="btn">Dodaj do koszyka</button>
      </div>
    </section>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import mixin from '../mixins';

export default {
  name: 'shoplist',
  mixins: [mixin],
  computed: {
    ...mapState([
      'products'
    ])
  },
  methods: {
    addToCart() {
      console.log("add");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../assets/scss/main.scss">
</style>
