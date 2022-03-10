<template>
  
  <div class="row p-0 m-0">
   <Loader v-if="getLoader" class="text-center"></Loader> 
  <div class="col-md-6 h-100 bg-light text-dark">
      <h1  class="h3 mb-3 mt-5 text-danger fw-normal text-center">Forgot Password </h1>
      <div class="diva mt-5 animate__animated animate__fadeInLeft">
        <i class="mdi mdi-information text-info icond"></i><p class="ml-4">Forgot your password ? Never to worry! please enter your email address</p>
      </div>
  <main class="form-signin animate__animated animate__fadeInLeft">
    
  <form @submit="forgot">
    
       <div class="search mb-3">
         <i class="mdi mdi-account text-info icon"></i>
          <input v-model="email" type="email" class="inp bg-light input-field" placeholder="Your email" required> 
       </div>
    
    
      <h4 class="text-success text-center mt-2 animate__animated animate__bounce">{{ getForgotPasswordMessage }}</h4>
      <p class="text-center text-danger">{{ getForgotPasswordError }}</p>
    
    <div class="text-muted mb-1 mt-2 d-flex justify-content-between pt-1">
    
    </div>
    <button class="w-100 btn btn-lg btn-primary zbtn" type="submit">Continue</button>
    <div class="text-center p-2">
      <span>Or go back to</span>  <router-link to="/login"> Log in</router-link> 
    </div>
  
  </form>
</main>

</div>
  
<div class="col-md-6 bimg d-none d-md-block">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column animate__animated animate__fadeInRight">
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
     <h1>Join gozillions of people</h1>
    </div>
  
     <p class="mt-4">
      <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/register">Register</router-link>
    </p>

    
  </div>
   
    <div class="mt-1 text-light" style="font-size:20px">
        <i class="mdi mdi-arrow-left  p-2  circle2"></i>
        <i class="mdi mdi-arrow-right  ml-4 p-2   circle2"></i> 
    </div>
 
</div>
    </div>
  </div>
</template>



<script>
import Loader from "./Loader.vue";
export default {
    name: "login",
    computed: {
      getLoader() {
       return this.$store.getters.getLoader
     },
      getForgotPasswordMessage(){
          return this.$store.getters.getForgotPasswordMessage
      },
      getForgotPasswordError(){
         return this.$store.getters.getForgotPasswordError
      }
    },
    data() {
        return {
            email: "",
        };
    },
    methods: {
        forgot(e) {
            e.preventDefault();
            this.$store.dispatch("forgotPassword", {
                email: this.email,
            })
            .then(response => {
                //this.$router.push({ name: 'login'})
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    components: { Loader }
}
</script>




<style scoped>

main{
  height: 100vh;
}

.diva{
   box-shadow: 0px 1px 3px 0px rgb(217, 219, 219);
   border-radius: 8px;
   justify-content: center;
   text-align: center;
   margin-bottom: 10px !important;
   border-top: 2px solid rgb(182, 117, 243);
   width: 100%;
   max-width: 400px;
   padding: 15px;
   margin: auto;
   position: relative;
}

.diva .icond {
    position: absolute;
    top: 12px;
    left: 12px
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