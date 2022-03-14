<template>
     <div class="row p-0 m-0 bg-light">
       <Loader v-if="getLoader" class="text-center"></Loader> 
       <header class="d-flex p-4 align-items-center justify-content-between">
         <div class="logo w-25">
          <router-link to="/"><img class="w-100" src="/assets/images/zhivago-logo.png" alt=""></router-link>
         </div>
        <div class="search flex-grow-1">
          <img src="" alt="">
          <input type="text" placeholder="Search">
        </div>
        <div class="login-signup">
          <button type="button" class="btn btn-outline-primary">Log in</button>
          <button type="button" class="btn btn-primary">Sign up</button>
        </div>
       </header>
     </div>
</template>

<script>
import Loader from "./Loader.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import LoginView from './LoginView.vue';
import RegisterView from './RegisterView.vue';
export default{
  data(){

  },
  //components: { Loader }
}


</script>

<style scoped>
.logo{
  width: 20% !important;
}


</style>