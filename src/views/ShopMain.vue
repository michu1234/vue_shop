<template>
  <div class="shop">
    <shop-cart/>
    <shop-list/>
  </div>
</template>

<script>
  import ShopList from '../components/ShopList'
  import ShopCart from '../components/ShopCart'
  export default {
    name: 'shopmain',
    components: {
      'shop-list': ShopList,
      'shop-cart': ShopCart
    }
  }
</script>

