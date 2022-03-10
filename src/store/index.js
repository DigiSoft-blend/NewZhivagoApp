import { createStore } from 'vuex'

import axios from 'axios';

axios.defaults.baseURL = 'https://zhivago.herokuapp.com/api/auth' 

export default createStore({
    state:{
      token: localStorage.getItem('token') || null,  
      Name: 'welcome',
      loading: false,
      user: [],
      loginError: '',
      registrationError: '',
      forgotPasswordError: '',
      messageForgotPassword: ''
    },
    getters:{
        getForgotPasswordError(state){
          return state.forgotPasswordError
        },
        getForgotPasswordMessage(state){
          return state.messageForgotPassword
        },
        getRegistrationError(state){
          return state.registrationError
        },
        
        getLoginError(state){
          return state.loginError
        },
        getName(state){
            return state.Name
        },
        getToken(state){
            return state.token
        },
        getLoader(state){
          return state.loading
        },
        getUser(state){
          return state.user
        }
    },
   
    actions:{

        register(context, credentials){
            
            context.state.registrationError = ''
            
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
              context.commit('getLoader',false)
              const regError = error.response.data.error.fields
              context.commit('getRegistrationError', regError)
              reject(error)
            })
          })
        },

        login(context, credentials){
          
          context.state.loginError = ''
         
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
               const user = response.data.data.user
               localStorage.setItem('token', token)
               context.commit('login', token)
               context.commit('getUser', user)
              
               resolve(response)
               context.commit('getLoader', false)
               })
               .catch(error => {
                context.commit('getLoader',false)
                const rror = error.response.data.error.fields.email[0]
                context.commit('getLoginError', rror)
                reject(error)
               })
           })
       },

       forgotPassword(context, credentials){
        context.state.messageForgotPassword = ''
        context.state.forgotPasswordError = ''
        context.commit('getLoader', true)
        //Tell axios the header you want
        axios.defaults.headers.common['Content-Type'] = 'application/ecmascript',
        axios.defaults.headers.common['Accept'] = 'application/json'
     
         return new Promise(( resolve, reject) => {
             axios.post('/forgot-password', {
             email: credentials.email,
             })
             .then(response => {
             const message = response.data.data.message 
             context.commit('getForgotPasswordMessage', message)
           
             resolve(response)
             context.commit('getLoader', false)
             })
             .catch(error => {
              context.commit('getLoader',false)
              const rror = error.response.data.error.fields.email[0]
              context.commit('getForgotPasswordError', rror)
              reject(error)
             })
         })
     },

     clearRegistrationError(context){
       context.commit('clearRegError', '')
     },

     clearLoginError(context){
       context.commit('clearLoginError', '')
     },
     clearForgotPasswordError(context){
       context.commit('clearForgotPasswordError', '')
     }

    },

    mutations:{
      clearForgotPasswordError(state, empty){
        state.forgotPasswordError = empty
        state.messageForgotPassword = empty
      },
        clearRegError(state, empty){
          state.registrationError = empty
        },
        clearLoginError(state, empty){
          state.loginError = empty
        },
        register(state, token){
            state.token = token
        },
        getLoader(state, payLoad){
          state.loading = payLoad
        }, 
        getUser(state, user){
          state.user = user
        },
        getLoginError(state, error){
          state.loginError = error
        },
        getRegistrationError(state, error){
          state.registrationError = error
        },
        getForgotPasswordMessage(state, message){
           state.messageForgotPassword = message
        },
        getForgotPasswordError(state, error){
          state.forgotPasswordError = error
        }
    }
})

