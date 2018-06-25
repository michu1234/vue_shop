import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {name: "Bedroom lamp", price: "299", image: "./assets/img/Bedroom_Lamp"},
      {name: "Dark Green Chair", price: "299", image: "./assets/img/Dark_Green_Chair"},
      {name: "Gray Sofa", price: "699", image: "./assets/img/Gray_Sofa"},
      {name: "Green Sofa", price: "999", image: "./assets/img/Green_Sofa"},
      {name: "Guest Room Sofa", price: "499", image: "./assets/img/Guest_Room_Sofa"},
      {name: "Light Olive Chair", price: "399", image: "./assets/img/Light_Olive_Chair"},
      {name: "Metal Lamp", price: "99", image: "./assets/img/Metal_Lamp"},
      {name: "Wooden Chair", price: "99", image: "./assets/img/Wooden_Chair"},
    ]
  },
  mutations: {

  },
  actions: {

  }
})
