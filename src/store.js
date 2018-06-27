import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [{
      id: 0,
        name: "Bedroom Lamp",
        price: 299,
        quantity: 0,
        image: "https://thumb.ibb.co/eET9VT/Bedroom_Lamp.jpg"
      },
      {
        id: 1,
        name: "Dark Green Chair",
        price: 299,
        quantity: 0,
        image: "https://thumb.ibb.co/hSbwAT/Dark_Green_Chair.jpg"
      },
      {
        id: 2,
        name: "Gray Sofa",
        price: 699,
        quantity: 0,
        image: "https://thumb.ibb.co/bA3Mc8/Gray_Sofa.jpg"
      },
      {
        id: 3,
        name: "Green Sofa",
        price: 999,
        quantity: 0,
        image: "https://thumb.ibb.co/kKf1c8/Green_Sofa.jpg"
      },
      {
        id: 4,
        name: "Guest Room Sofa",
        price: 499,
        quantity: 0,
        image: "https://thumb.ibb.co/kCiMc8/Guest_Room_Sofa.jpg"
      },
      {
        id: 5,
        name: "Light Olive Chair",
        price: 399,
        quantity: 0,
        image: "https://thumb.ibb.co/crx3qT/Light_Olive_Chair.jpg"
      },
      {
        id: 6,
        name: "Metal Lamp",
        price: 99,
        quantity: 0,
        image: "https://thumb.ibb.co/m7Hgc8/Metal_Lamp.jpg"
      },
      {
        id: 7,
        name: "Wooden Chair",
        price: 99,
        quantity: 0,
        image: "https://thumb.ibb.co/muEGAT/Wooden_Chair.jpg"
      }
    ]
  },
  getters: {
    totalPrice(state) {
      return state.products.reduce(function (sum, product) {
        return sum + product.price * product.quantity;
      }, 0);
    },
    purchases(state) {
      return state.products.filter(d => {return d.quantity > 0});
    }
  },
  mutations: {
    changeQuantity(state, payload) {
      let order = parseInt(state.products[payload.index].quantity);
      if (payload.action === "add") {
        state.products[payload.index].quantity = order + 1;
      } else {
        if (state.products[payload.index].quantity > 0) {
          state.products[payload.index].quantity = order - 1;
        }
      }
    },
    saveToLocalStorage(state) {
      localStorage.setItem('cartProducts', JSON.stringify(state.products));
    },
    loadDataFromLocalStorage(state) {
      if(localStorage.getItem("cartProducts")) {
        state.products = JSON.parse(localStorage.getItem('cartProducts'));
      }
    },
    sortingProducts(state, payload) {
      if (payload === "Cena") {
        return state.products.sort((a,b)=>{return a.price - b.price })
      }else {
        return state.products.sort((a,b)=>{ return a.name > b.name});
      }
    }
  },
  actions: {

  }
})
