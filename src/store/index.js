import { createStore } from 'vuex'

import axios from 'axios';

axios.defaults.baseURL = 'https://zhivago.herokuapp.com/api/auth' 

export default createStore({
    state:{
      token: localStorage.getItem('token') || null,  
      Name: 'welcome',
      loading: false,
      
    },
    getters:{
        getName(state){
            return state.Name
        },
        getToken(state){
            return state.token
        },
        getLoader(state){
          return state.loading
        },
    },
   
    actions:{

        register(context, credentials){
   
            context.commit('getLoader', true)
            axios.defaults.headers.common['Content-Type'] = 'application/ecmascript',
            axios.defaults.headers.common['Accept'] = 'application/json'
            
          return new Promise(( resolve, reject) => {  
            axios.post('/register', {
              name: credentials.name,  
              username: credentials.username,
              email: credentials.email,
              password: credentials.password,
              password_confirmation: credentials.password_confirmation,
              phone: credentials.phone,
              user_type: credentials.user_type
            })
            .then(response => {
        
              const token = response.data.data.token 
              localStorage.setItem('token', token)
              context.commit('registerUser', token)
              context.commit('getLoader',false)
              resolve(response)
        
            })
            .catch(error => {
              console.log(error)
              context.commit('getLoader',false)
              reject(error)
            })
          })
        },

        login(context, credentials){

          context.commit('getLoader', true)
          //Tell axios the header you want
          axios.defaults.headers.common['Content-Type'] = 'application/ecmascript',
          axios.defaults.headers.common['Accept'] = 'application/json'
       
           return new Promise(( resolve, reject) => {
               axios.post('/login', {
               email: credentials.email,
               password: credentials.password,
               })
               .then(response => {
               const token = response.data.data.token 
               localStorage.setItem('token', token)
               context.commit('login', token)
               resolve(response)
               context.commit('getLoader', false)
               })
               .catch(error => {
                context.commit('getLoader',false)
               console.log(error)
               reject(error)
               })
           })
       },

    },

    mutations:{
        register(state, token){
            state.token = token
        },
        getLoader(state, payLoad){
          state.loading = payLoad
        }, 
    }
})

