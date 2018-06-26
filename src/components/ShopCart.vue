<template>
    <div class="cart">
        <h2>Koszyk</h2>
        <button class="btn btn__medium" @click="showCart =! showCart"><span v-if="showCart">Ukryj koszyk</span><span v-else>Rozwiń koszyk</span></button>
        <transition name="fade">
        <table v-if="showCart" class="cart__table">
            <thead>
                <tr>
                    <td colspan="2"></td>
                    <td>Ilość</td>
                </tr>
            </thead>
            <tr v-for="(product, index) in products" :key="index">
                <td>
                    <img :src="product.image" alt="Product image">
                </td>
                <td>
                    <p>{{product.name}}</p>
                </td>
                <td>
                    <input class="input--short" type="text" v-model="product.quantity">
                    <div class="button__wrapper">
                        <button @click="controlQuantity(index,'add')" class="btn btn__small">+</button>
                        <button @click="controlQuantity(index,'reduce')" class="btn btn__small">-</button>
                    </div>
                </td>
                <td>
                    <p>{{product.price * product.quantity | priceCurrency}}</p>
                </td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td>
                    <p>Suma: {{totalPrice}}</p>
                </td>
            </tr>
        </table>
        </transition>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapMutations
    } from 'vuex';

    export default {
        data() {
            return {
                showCart: true
            }
        },
        computed: {
            ...mapState([
                // map this.count to store.state.count
                'products'
            ]),
            ...mapGetters([
                'totalPrice'
            ])
        },
        methods: {
            ...mapMutations([
                'increaseOrder'
            ]),
            controlQuantity(index, action) {
                this.$store.commit('changeQuantity', {
                    index: index,
                    action: action
                })
            }
        },
        filters: {
            priceCurrency(d) {
                return `${d} zł`
            }
        },
        updated() {
            console.log(this.quantity);
        }
    }
</script>

<style lang="scss" src="../assets/scss/main.scss">
</style>
