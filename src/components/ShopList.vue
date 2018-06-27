<template>
  <div class="listing">
    <div class="listing__wrapper">
    <h2>Produkty</h2>
    <select v-model="sortType" class="select--medium" name="" id="">
      <option value="Nazwa">Nazwa ▲</option>
      <option value="Cena">Cena ▲</option>
    </select>
    </div>
    <section class="listing__products">
      <div v-for="(product, index) in products" :key="index" class="listing__product">
        <img :src="product.image" alt="">
        <p class="text--bold">{{product.name}}</p>
        <p>{{product.price | priceCurrency("PLN")}}</p>
        <button @click="addToCart(index, 'add')" class="btn">Dodaj do koszyka</button>
      </div>
    </section>
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex';
  import mixin from '../mixins';

  export default {
    name: 'shoplist',
    mixins: [mixin],
    data() {
      return {
        sortType: 'Nazwa'
      }
    },
    watch: {
      sortType() {
        if(this.sortType === "Cena") {
          this.$store.commit("sortingProducts", "Cena");
          console.log("dziala");
        }
        if(this.sortType === "Nazwa") {
          this.$store.commit("sortingProducts", "Nazwa");
        }
      }
    },
    computed: {
      ...mapState([
        'products'
      ])
    },
    methods: {
      ...mapMutations([
        'changeQuantity',
        'saveToLocalStorage',
        'sortingProducts'
      ]),
      addToCart(index, action) {
        this.$store.commit("changeQuantity", {
          index: index,
          action: action
        });
        this.$store.commit("saveToLocalStorage");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" src="../assets/scss/main.scss">
</style>
