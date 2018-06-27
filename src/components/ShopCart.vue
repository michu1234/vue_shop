<template>
    <div class="cart">
        <h2>Koszyk</h2>
        <button class="btn btn__medium" @click="showCart =! showCart"><span v-if="showCart">Ukryj koszyk</span><span v-else>Rozwiń koszyk</span></button>
        <div v-if="purchases != 0">
        <transition name="fade">
        <table v-if="purchases" class="cart__table">
            <thead>
                <tr>
                    <td colspan="2"></td>
                    <td>Ilość</td>
                </tr>
            </thead>
            <tr v-for="(purchase, index) in purchases" :key="index">
                <td>
                    <img :src="purchase.image" alt="product image">
                </td>
                <td>
                    <p>{{purchase.name}}</p>
                </td>
                <td>
                    <input class="input--short" type="text" v-model="purchase.quantity">
                    <div class="button__wrapper">
                        <button @click="controlQuantity(index,'add')" class="btn btn__small">+</button>
                        <button @click="controlQuantity(index,'reduce')" class="btn btn__small">-</button>
                    </div>
                </td>
                <td>
                    <p>{{purchase.price * purchase.quantity | priceCurrency("zł")}}</p>
                </td>
            </tr>
            <tr>
                <td colspan="3"></td>
                <td>
                    <p class="text--bold">Suma: {{totalPrice}}</p>
                </td>
            </tr>
        </table>
        </transition>
        </div>
        <div class="cart__empty" v-if="showCart&&purchases">Koszyk jest pusty.</div>
    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations} from 'vuex';
    import mixin from '../mixins';

    export default {
        mixins: [mixin],
        data() {
            return {
                showCart: false
            }
        },
        computed: {
            ...mapState([
                'products'
            ]),
            ...mapGetters([
                'totalPrice',
                'purchases'
            ])
        },
        methods: {
            ...mapMutations([
                'saveToLocalStorage'
            ]),
            controlQuantity(index, action) {
                this.$store.commit('changeQuantity', {
                    index: index,
                    action: action
                });
                this.$store.commit('saveToLocalStorage');
            }
        }
    }
</script>

<style lang="scss" src="../assets/scss/main.scss">
</style>
