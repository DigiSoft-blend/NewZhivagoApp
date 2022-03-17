<template>
  
  <div class="row p-0 m-0">
   <Loader v-if="getLoader" class="text-center"></Loader> 
  <div class="col-md-6  text-dark">
         
  <main class="form-signin">
    
  <form @submit="login">
    <div class="mt-5">
      <h1 class="h3 mb-3 fw-normal text-center"><img src="/assets/images/zhivago-logo.png" alt="logo" height="70px" width="320px" /></h1>
    </div>
    <h1  class="h3 mb-3 fw-normal text-center">Welcome</h1>

    <p class="text-muted text-center p-4">Get connected with everything !</p>

    
       <div class="search mb-3">
         <i class="mdi mdi-account text-info icon"></i>
          <input v-model="email" type="email" class="inp bg-light input-field" placeholder="Email" required> 
       </div>
    
    
      <div class="search">
         <i class="mdi mdi-key text-primary icon"></i> 
         <input v-model="password" type="password" class="inp bg-light input-field" placeholder="Password" required> 
       </div>
    
      <p class="text-danger text-center mt-2">{{ getLoginError }}</p>
   
       

    <div class="text-muted mb-1 mt-2 d-flex justify-content-between pt-1">
      <label>
        <input type="checkbox" value="remember-me"> Remember 
      </label>
      <router-link to="/forgotpassword">
         <p>Lost Password ?</p>
      </router-link>
    </div>
    <button class="w-100 btn btn-lg btn-primary zbtn" type="submit">Sign in</button>
    <div class="text-center p-2">
       <router-link to="/register">Create an account</router-link> 
    </div>

  
  </form>
</main>

</div>
  
<div class="col-md-6 bimg d-none d-md-block">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column">
  <header class="mb-auto">
    <div>
     
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a href="" class="nav-link a1"><i class="fa fa-bag-shopping text-light"></i></a>
        <router-link class="nav-link active a1" to="/login">Login</router-link>
        <router-link class="nav-link a1" to="/register">Register</router-link>
      </nav>
    </div>

  </header>

  <div class="container m-0 p-5 mt-5 text-light">
    <div class="col-md-8">
      <p style="font-size:24px">______ &nbsp;  Join the club</p>
     <h1>Join millions of people</h1>
    </div>
  
     <p class="mt-4">
      <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/register">Register</router-link>
    </p>

    
  </div>
   
</div>
    </div>
  </div>
</template>



<script>
import Loader from "./Loader.vue";
export default {
    name: "Forgot",
     created(){
       this.$store.dispatch('clearLoginError')
     },
    computed: {
     getLoader() {
       return this.$store.getters.getLoader
     },
     getUser(){
       return this.$store.getters.getUser
     },
     getLoginError(){
       return this.$store.getters.getLoginError
     }
    },
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        login(e) {
            e.preventDefault();
            this.$store.dispatch("login", {
                email: this.email,
                password: this.password,
            })
                .then(response => {
                this.errorMessage = '';
                this.$router.push({ name: 'dashboard'})
                console.log(response);
            })
                .catch(error => {
                this.errorMessage = error.response.data.message; 
                console.log(error);
            });
        },
    },
    components: { Loader }
}
</script>




<style scoped>

.col-md-6{
  height: 100vh !important;
}

.search {
    position: relative;
}
 .search input {
    height: 45px;
    text-indent: 40px;
    border: 2px solid #d6d4d4
}



.search .icon {
    position: absolute;
    top: 1px;
    left: 1px
}

.circle{
           width: 70px;
            padding: 10px;
            background-color: white;
            border-radius: 100%;
            max-width: 80px;
            margin: 2px;
            margin-right: 10px;
            font-size: 13px;
            box-shadow: 0px 1px 5px 1px rgb(217, 219, 219);
            border: none;
            font-weight: bolder !important;
            
}

.circle2{
           width: 70px;
            padding: 10px;
            background-color: rgb(24, 23, 23);
            border-radius: 100%;
            max-width: 80px;
            margin: 2px;
            margin-right: 10px;
            font-size: 13px;
            /* box-shadow: 0px 1px 5px 1px rgb(217, 219, 219); */
            border: none;
            font-weight: bolder !important;
            
}
.hight{
  height: 400px !important;
}


a{
 text-decoration: none;
 color: blueviolet;
}
.zbtn{
  border-radius: 50px;
  background-color: blueviolet;
   border: none !important;
}

.btnz2{
  border-radius: 50px;
  width: 200px;
}
.bimg{
  height: 100vh;
 background-image: url("/img/pexels-j.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.inp{
  border-radius: 50px;
  outline: none !important;
  border: none !important;
  background-color: rgb(245, 245, 245) !important;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}


  .input-icons i {
            position: absolute;
        }
          
        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }

       
          
        .icon {
          width: 40px;
            padding: 10px;
            background-color: white;
            border-radius: 100%;
            max-width: 50px;
            margin: 2px;
            text-align: center;
            font-size: 13px;
            box-shadow: 0px 1px 5px 1px rgb(217, 219, 219);
        }

        .icon2{
          width: 100px !important;
            padding: 10px;
            background-color: rgb(155, 153, 153);
            border-radius: 100%;
            max-width: 40px;
            margin: 10px;
            text-align: center;
            font-size: 13px;
            color: white;
        }
          
        .input-field {
            width: 100%;
            padding: 10px;
            /* text-align: center; */
            /* text-align: center; */
        }

        .a1{
          padding: 15px !important;
        }
          
        /* h2 {
            color: green;
        } */

        /*
 * Globals
 */


/* Custom default button */
.btn-secondary,
.btn-secondary:hover,
.btn-secondary:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
}


/*
 * Base structure
 */

body {
  text-shadow: 0 .05rem .1rem rgba(0, 0, 0, .5);
  box-shadow: inset 0 0 5rem rgba(0, 0, 0, .5);
}

.cover-container {
  max-width: 42em;
}


/*
 * Header
 */

.nav-masthead .nav-link {
  padding: .25rem 0;
  font-weight: 700;
  color: rgba(255, 255, 255, .5);
  background-color: transparent;
  border-bottom: .25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: rgba(255, 255, 255, .25);
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #fff;
  border-bottom-color: #fff;
}


</style>