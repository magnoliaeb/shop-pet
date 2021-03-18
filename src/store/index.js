import Vue from 'vue'
import Vuex from 'vuex'
import http from '../config/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cartList: [],

  },
  getters: {
    countCartList: state => {
      return state.cartList.length;
    }
  },
  mutations: {
    SET_PRODUCT(state, products) {
      state.products = products
    },
    SET_CARTLIST(state, products) {
      // state.cartList = products
    }
  },
  actions: {
    async getProducts({ commit }) {
      const resp = await http.get('/product')
      const products = resp.data.map((item) => {
        return {
          quantity: 0,
          ...item
        }
      })

      console.log(products)
      commit('SET_PRODUCT', products)
    },
   
    addProductToCart({ commit}) {
      const exist =  iterable.find((item) => {
        
      })
      // existe el product en el carrito
      // 
      
    }
  },
  modules: {
  }
})
