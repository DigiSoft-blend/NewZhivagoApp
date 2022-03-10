<template>
  
 
  <div class="row p-0 m-0">
     <Loader v-if="getLoader" class="text-center"></Loader>
  <div class="col-md-6  bg-light text-dark">
         
  <h1 class="fw-normal mt-4 mb-3 text-center p-0 animate__animated animate__fadeInLeft">Create an Account</h1>
      <div class="diva animate__animated animate__fadeInLeft">
        <i class="mdi mdi-information text-info icond"></i><p class="ml-4">Registration for this site is easy. just fill in the fields below. and we'll get a new account set up for you in no time.</p>
      </div>
  <main class="form-signin animate__animated animate__fadeInLeft">
    
  <form @submit="register">
   
    <h1 class="h3 m-0 p-0  fw-normal text-center">Account Details</h1>
      <div class="d-flex justify-content-center m-0 p-0">
        <i v-if="form2Visible" @click="btn2" class="mdi mdi-menu-up text-primary  text-center m-0 p-0" style="font-size:40px"></i> 
      </div>
     <section v-if="form1Visible"  class="animate__animated animate__fadeInLeft">
      <div class="search mb-3">
         <i class="mdi mdi-account text-primary icon"></i> 
         <input v-model="username" type="text" class="inp bg-light input-field" placeholder="Username" required> 
         <p  class="mt-2 text-danger" style="font-size:12px">{{ getRegistrationError.username }}</p>
       </div>

      <div class="search mb-3">
         <i class="mdi mdi-email text-primary icon"></i> 
         <input v-model="email" type="email" class="inp bg-light input-field" placeholder="Email Address" required> 
          <p  class="mt-2 text-danger" style="font-size:12px">{{ getRegistrationError.email }}</p>
       </div>
    
    
      <div class="search mb-3">
         <i class="mdi mdi-key text-info icon"></i>
          <input v-model="password" type="password" class="inp bg-light input-field" placeholder="Choose a Password" required> 
       </div>

       <div class="search">
         <i class="mdi mdi-key text-warning icon"></i>
          <input v-model="password_confirmation" type="password" class="inp bg-light input-field" placeholder="Confirme Password" required> 
         <p class="mt-2 text-danger" style="font-size:12px">{{ getRegistrationError.password }}</p>
       </div>

    
    <!-- <router-link to="/profileentry">
         <p class="w-100 btn btn-lg btn-primary zbtn mt-4">Continue</p>
    </router-link> -->
    <button  @click="btn"  class="w-100 btn btn-lg btn-primary zbtn mt-4">Continue</button>
    <div class="text-center p-2">
       <span> Have an account ?</span> <router-link to="/login">Log in</router-link>
    </div>
  </section>  

  <section v-if="form2Visible" class="animate__animated animate__bounce">
     <div class="search mb-3">
         <i class="mdi mdi-face text-info icon"></i>
          <input v-model="firstName" type="text" class="inp bg-light input-field" placeholder="First Name" required > 
       </div>
    
    
      <div class="search mb-3">
         <i class="mdi mdi-account text-info icon"></i> 
         <input v-model="lastName" type="text" class="inp bg-light input-field" placeholder="Last Name" required> 
       </div>

       <div class="search">
         <i class="mdi mdi-phone text-success icon"></i> 
         <input v-model="phone" type="text" class="inp bg-light input-field" placeholder="Phone" required> 
       </div>
    
 
    <div class="text-muted mb-1 mt-1" style="font-size:14px">
      <p class="text-muted p-0 mb-2 mt-3 ">Registration Type (required)</p>
     
      <input class="mr-1" type="checkbox" id="talent" value="Talent" v-model="checkedUserType">
      <label class="mr-1" for="talent">Talent</label>
      <input class="mr-1" type="checkbox" id="vendor" value="Vendor" v-model="checkedUserType">
      <label class="mr-1" for="vendor">Vendor</label>
      <input class="mr-1" type="checkbox" id="affiliate" value="Affiliate" v-model="checkedUserType">
      <label class="mr-1" for="affilate">Affiliate</label>
      <input class="mr-1" type="checkbox" id="customer" value="Customer" v-model="checkedUserType">
      <label class="mr-1" for="customer">Customer</label>
    </div>
 
     
    
    <button  class="w-100 btn btn-lg btn-primary zbtn mt-1" type="submit">Complete Sign Up</button>
   </section>
   
  </form>

  <!-- <button @click="btn"  class="w-100 btn btn-lg btn-primary zbtn mt-4">Continue</button> -->
</main>

</div>
  
<div class="col-md-6  bimg  d-none d-md-block">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column animate__animated animate__fadeInRight">
  <header class="mb-auto">
    <div>
     
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a href="" class="nav-link a1"><i class="fa fa-bag-shopping text-light"></i></a>
         <router-link class="nav-link active a1" to="/register">Register</router-link>
         <router-link class="nav-link a1" to="/login">Login</router-link>
      </nav>
    </div>

  </header>

  <div class="container m-0 p-5 mt-5 text-light">
    <div class="col-md-8">
      <p style="font-size:24px">______ &nbsp;  Join the club</p>
     <h1>Join millions of people</h1>
    </div>
    <p class="mt-4" > </p>
     <p class="mt-4">
     <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/login">login</router-link>
    </p>

  </div>
   
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
  name: 'register',
  created(){
    this.$store.dispatch('clearRegistrationError')
  },
  computed:{
    getLoader() {
       return this.$store.getters.getLoader
     },
     getRegistrationError(){
       return this.$store.getters.getRegistrationError
     }
  },
  data(){
    return{
      form1Visible: true,
      form2Visible: false,
      
      name:'',
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      
      firstName: '',
      lastName: '',
      phone: '',
      checkedUserType: [],

      errStatus: '',
      // regStatus: '',
      // regMessage: ''
    }
  },
  methods:{
     btn(){
      this.form1Visible = false
      this.form2Visible = true
    },
     btn2(){
      this.form1Visible = true
      this.form2Visible = false
     },
     register(e){
             e.preventDefault();

             this.$store.dispatch('register', {
                name: this.firstName + " " + this.lastName,
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirmation,
                //phone: this.phone,
                user_type: this.checkedUserType
             })
             .then(response => {
              this.$router.push({ name: 'registrationsuccess'})
             })
             .catch(error => { 
                 this.errStatus  = error.response.data.success
                 if(this.errStatus == false){
                    this.form1Visible = true
                    this.form2Visible = false
                 }
             })
       }

  },

   components: { Loader }

}
</script>



<style scoped>

.col-md-6{
  height: 100vh !important;
}
.diva{
   box-shadow: 0px 1px 3px 0px rgb(217, 219, 219);
   border-radius: 8px;
   justify-content: center;
   text-align: justify;
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

/* .search button {
    position: absolute;
    top: 5px;
    right: 5px;
    height: 50px;
    width: 110px;
    background: blue
} */


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