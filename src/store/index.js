import Vue from 'vue'
import Vuex from 'vuex'
import http from '../config/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cartList: [],
    categories: []

  },
  getters: {
    countCartList: state => {
      return state.cartList.length;
    },

productsByCategory: (state) => (id) => {
const products = state.products.filter((item) => {
   return parseInt(item.category.id) === parseInt(id)
 })
  return products
},

findCategory: (state) => (id) => {
const category = state.categories.find((item) => {
   return item.id === id
 })
  return category
},

findProduct: (state) => (id) => {
const product = state.products.find((item) => {
   return item.id === id
 })
  return product
},
   
   

    totalCartList: state => {
      return state.cartList.reduce((previous, current) => {
        return (current.price * current.quantity )+  previous
      }, 0)
    },
  },

  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_CATEGORIES(state, categories) {
      state.categories = categories
    },
    ADD_PRODUCT_CART(state, product) {
      state.cartList.push(product)
    },
    INCREMENT_QUANTITY(state, product) {
      
      const index =  state.cartList.findIndex((item) =>  item.id === product.id )
      state.cartList[index].quantity++
      console.log(state.cartList[index])
    },
  },
  actions: {
    async getProducts({ commit }) {
      const resp = await http.get('/product')

      const products = resp.data.map((item) => {
        return {
          quantity: 1,
          ...item
        }
      })

      commit('SET_PRODUCTS', products)
    },
    async getCategories({ commit }) {

        const resp = await http.get('/product-category')

      commit('SET_CATEGORIES', resp.data)
    },
   
    addProductToCart(context, product) {
      const exist =  context.rootState.cartList.some((item) => item.id === product.id)
      
      
      // si no existe el product add
      if (!exist) {
        context.commit('ADD_PRODUCT_CART', product)
      
      } else {
        
        context.commit('INCREMENT_QUANTITY', product)
      }
      // 
      
    }
  },
  modules: {
  }
})
