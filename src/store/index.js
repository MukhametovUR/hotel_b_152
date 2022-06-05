import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      hotels:[
        {id:1, name:'Колизей',price:700,stars:2,distance:10},
        {id:2, name:'Венера',price:800,stars:3,distance:9},
        {id:3, name:'Олимп',price:900,stars:4,distance:8},
        {id:4, name:'Крокус',price:1000,stars:5,distance:7},
        {id:5, name:'Yes',price:800,stars:3,distance:9}
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

