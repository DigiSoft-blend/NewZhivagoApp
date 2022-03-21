<template>
   <link rel="stylesheet" href="/assets/css/style.css">
  <div class="row p-0 m-0">
   <Loader v-if="getLoader" class="text-center"></Loader> 
  
<div class="col-md-12 bg-light">

 <div class="text-center d-flex   p-3  animate__animated animate__fadeInRight"> -->
  

  <!-- <div class="container m-0  mt-5 text-dark">
    <div class="col-md-12 ">
      <p style="font-size:24px">{{ getUser.email }}</p>
     <h2>Congratulations !</h2>
       <p class="text-dark">{{ getUser.name }}</p> 
     <p>your account has been created successfully</p>
    </div>
  
     <p class="mt-5">
      <router-link class="btn btn-lg btn-success btnz2 text-light" to="/dashboard">Get started</router-link>
    </p>

    
  </div> -->
   <main class="mr-2 p-4 w-100 cov text-dark">
    <p class="h2" style="font-size:24px">Congratulations !</p>
    <p class="lead">your account has been created successfully</p>
    <p class="lead">{{ getUser.email }}</p>
    <p class="lead mt-5">
       <router-link class="btn btn-lg btn-success btnz2 text-light" to="/login">Get started</router-link>
    </p>
  </main>
   
    <!-- <div class="mt-1 text-light" style="font-size:20px">
        <i class="mdi mdi-arrow-left  p-2  circle2"></i>
        <i class="mdi mdi-arrow-right  ml-4 p-2   circle2"></i> 
    </div> -->
 
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

.cov{
  margin-top:15%
}

.col-md-12{
  height: 100vh;
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
/* .hight{
  height: 400px !important;
} */


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
  max-width: 400px;
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
