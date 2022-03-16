<template>
 <div class="row p-0 m-0">
    
   <Loader v-if="getLoader" class="text-center"></Loader>

   <div class="col-md-12 bimg">

 <div class="cover-container d-flex w-100 hight p-3 mx-auto flex-column animate__animated animate__fadeInRight">
  <header class="mb-auto">
    <div>
     
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <a href="" class="nav-link a1"><i class="fa fa-bag-shopping text-light"></i></a>
        <router-link class="nav-link active a1" to="/login">Log out</router-link>
        <!-- <router-link class="nav-link a1" to="/register"></router-link> -->
      </nav>
    </div>

  </header>

  <div class="container m-0 p-5 mt-5 text-light">
    <div class="col-md-8">
      <p style="font-size:24px">______ &nbsp; Awsome! you just Joined the club</p>
     <h1>Welcome {{ getUser.name }} </h1>
    </div>

       <li>{{ getUser.name }}</li>
       <li>{{ getUser.username }}</li>
       <li>{{ getUser.email }}</li> 

    <!-- <p class="mt-4" > At vero eos et accusamus et iusto cadreto margoposito ensextaro marcopolo abokina nigeria and rusia</p>
     <p class="mt-4">
      <router-link class="btn btn-secondary  border-white bg-transparent btnz2 text-light" to="/register">Register</router-link>
    </p> -->

    
  </div>
    
 
</div>
 </div>
 </div>

 
</template>