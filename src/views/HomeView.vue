
<template>
<!-- row px-5 m-0 -->
     <div class="px-0 bg-light text-black">
       <Loader v-if="getLoader" class="text-center"></Loader> 
       <header class="d-flex py-2 px-5 mx-auto align-items-center justify-content-between border-bottom border-secondary bg-white">
         <div class="logo w-25">
          <router-link to="/"><img class="w-100" src="/assets/images/zhivago-logo.png" alt=""></router-link>
         </div>
        <div class="d-flex flex-grow-1 align-items-center justify-content-between pl-5">
          <div class="search w-75 d-flex p-2 rounded align-items-center shadow bg-body rounded">
            <!-- <font-awesome-icon icon="fa-thin fa-magnifying-glass" /> -->
            <span class="iconify" data-icon="charm:search"></span>
            <input type="text" placeholder="Search" class="w-100 p-2 flex-grow-1 outline-0 border-0 bg-transparent">
          </div>
          <div class="login-signup">
            <router-link class="nav-link active a1" to="/login"><button type="button" class="btn btn-outline-primary">Log in</button></router-link>
            
            <router-link class="nav-link a1" to="/register"><button type="button" class="btn btn-primary">Sign up</button></router-link>
          </div>
        </div>
       </header>

       <main class="p-4 grid">
          <!-- side menu -->
         <div class="side-menu g-col-3 g-col-md-3">
           <button class="btn btn-primary w-100 text-left d-flex align-items-center"><span class="iconify me-2" data-icon="bytesize:home"></span>Home</button>
           <div class="side-menu-list-parent">

             <div class="side-menu-list member">
               <p>
                 <span class="iconify text-secondary fw-bolder" data-icon="eva:arrow-right-fill" href="#collapseExample" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample"></span>
                 <a href="#">Members Central</a>               
               </p>
               
               <div class="member_collapsed collapse" id="collapseExample">
                  <a href="" class="individual-member"><span >👋</span>Start here</a>
                  <a href="" class="individual-member"><span>😏</span>Introduce Yourself</a>
               </div>
             </div>

             <div class="side-menu-list vip-group">
               <p>
                 <span class="iconify text-secondary fw-normal" data-icon="eva:arrow-right-fill" href="#collapseExample2" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample2"></span>
                 <a href="#">VIP GROUPS</a>
               </p>
               <div class="member_collapsed collapse" id="collapseExample2">
                  <a href="" class="individual-member"><span >🙋</span>Las Vegas Singles</a>
                  <a href="" class="individual-member"><span>💱</span>No mint Mark</a>
               </div>
             </div>

             <div class="side-menu-list vip-group">
               <p>
                 <span class="iconify text-secondary fw-normal" data-icon="eva:arrow-right-fill" href="#collapseExample3" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample3"></span>
                 <a href="">Admins</a>
               </p>
               <div class="member_collapsed collapse" id="collapseExample3">
                  <a href="" class="individual-member"><span >😎</span>Zhivago Admins</a>
               </div>
             </div>
             
             
             
           </div>

         </div>

            <!-- main posts -->
         <div class="main-posts g-col-6 g-col-md-6">
           <div class="w-100 d-flex justify-space-between">
             <h4>Home</h4>
            <!-- div to select type of post -->
            <div></div>
           </div>

          <div class="w-100 p-3 bg-white">

            <div class="d-flex justify-content-between w-100">
                  <!-- detail of poster -->
                <div class="d-flex align-items-center py-2">
                
                <div class="tp_img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face3.jpg" alt="" class="w-100">
                </div>
                <div class="tp_details text-black px-2">
                  <h5 class="">Black girl Wonder</h5>
                  <small class="username_tp text-muted">Posted in Start here.</small>
                </div>
              </div>
              <a href="" class="text-black sharebtn">Share</a>
            </div>
                  <!-- post conent i.e post image, likes and commenr -->
            <div class="post-content pt-2 pb-4">
              <p>Is anyone here to like me?</p>
              <div class="main-post-img overflow-hidden rounded">
                <img src="/assets/images/faces/face3.jpg" alt="" class="w-100">
              </div>
            </div>

            <div class="likes_comments d-flex justify-content-between border-top border-bottom border-secondary py-2">
              <a href="" class="likebtn d-flex align-items-center"><span class="iconify" data-icon="fa-regular:thumbs-up"></span>Like</a>
              <a class="flex-grow-1 ps-3 commentbtn d-flex align-items-center" data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample4"><span class="iconify me-2" data-icon="bx:message"></span>Comment</a>
              <a href="" class="commentbtn">1 comment</a>
            </div>

           <div class="collapse comment-section" id="collapseExample4">
            <div class="text-center my-3">
              <h3>Post a comment</h3>
              <div class="login-signup comment-login justify-content-around m-auto">
                <button type="button" class="btn btn-outline-primary">Log in</button>
                <button type="button" class="btn btn-primary">Sign up</button>
              </div>
            </div>
          </div>

            <div class="ad-space text-black text-center">
              <em>-advertisement-</em>
              <div class="_ad_inner_space post-ad-inner-space">
                  730 x 90
              </div>
            </div>
          </div>

         </div>

          <!-- Trending posts -->
         <div class="g-col-3 g-col-md-6">
           <div class="trending-post bg-white shadow-sm rounded p-3">
           <h5 class="text-black">Trending posts</h5>
              <!-- tp means trending posts -->
            <div class="individual_tp d-flex align-items-center py-2">
              
             <div class="tp_img rounded-circle overflow-hidden" >
               <img src="/assets/images/faces/face3.jpg" alt="" class="w-100">
             </div>
             <div class="tp_details text-black px-2">
               <h5 class="">What's up now???</h5>
               <small class="username_tp text-muted">Black Girl Wonder</small>
             </div>
            </div>

             <div class="individual_tp d-flex align-items-center py-2">
              
             <div class="tp_img rounded-circle overflow-hidden" >
               <img src="/assets/images/faces/face5.jpg" alt="" class="w-100">
             </div>
             <div class="tp_details text-black px-2">
               <h5 class="">Is anyone here to like me?</h5>
               <small class="username_tp text-muted">Black Girl Wonder</small>
             </div>
            </div>

          </div>

              <!-- space for advert -->
          <div class="ad-space text-black text-center mt-2">
            <em>-advertisement-</em>
            <div class="_ad_inner_space">
                250 x 250
            </div>
          </div>

          <div class="ad-space text-black text-center mt-2">
            <em>-advertisement-</em>
            <div class="_ad_inner_space">
                250 x 250
            </div>
          </div>
         </div>
       </main>
     </div>
</template>

<script>
import Loader from "./Loader.vue";
import TheWelcome from "@/components/TheWelcome.vue";
import LoginView from './LoginView.vue';
import RegisterView from './RegisterView.vue';
export default{
  data(){
    return{

    }
  },
  //components: { Loader }
}

</script>

<style scoped>
*{
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: hsl(0, 0%, 23.1%);
}

header, main{
  max-width: 1440px;
}
.logo{
  width: 15% !important;
}

.login-signup{
  width: 16%;
  display: flex;
  justify-content: space-between;
}

main{
  display: grid;
  grid-template-columns: 270px 1fr 270px;
  gap: 2em;
  background: #fff;
  margin-inline: auto;
}

/* .search{
  background: #EFFFFD  !important;
} */

.tp_img{
  width: 18%

}

.tp_details h5{
  font-size: 0.9rem;
  margin-bottom: 0.3em;
  margin-top: 0.5em;
}

.username_tp{
  font-size: 0.8rem;
  opacity: 0.9;
}

.sharebtn, .likebtn, .commentbtn{
  color: hsl(219, 14%, 50%);
  text-decoration: none;
}

.sharebtn:hover, .likebtn:hover, .commentbtn{
  color: #000;
}

.main-posts{
  height: 100vh;
  max-height: 100vh;
  position: relative;
}

.post-ad-inner-space{
  height: 90px!important;
  width: 730px!important;
}

._ad_inner_space{
  background: #eee;
  height: 250px;
  width: 250px;
  margin-inline: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.side-menu-list{
  margin: 2em 0.5em;
}

.side-menu-list p{
  display: flex;
  align-items: center;
  margin-bottom: 0;
}
.side-menu-list a{
  text-decoration: none;
  color: #000;
  font-weight: 500;
  font-size: 1.1rem;
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
}

.member_collapsed{
  margin: 0 1em;

}

.member_collapsed a{
  text-decoration: none;
  color: hsl(219, 14%, 50%);
  margin: 0.5em 0;
  display: flex;
  font-size: 0.9rem;
}

.member_collapsed a span{
  margin-right: 0.5em;
}

.main-post-img{
  height: 500px;
}

.comment-login{
  width: 26%;
}

.nav-link{
  padding: 0;
}

@media screen and (max-width: 1200px){
  main{
  grid-template-columns: 250px 1fr 250px;
  gap: 1em;
  }

  .main-post-img{
  height: 100%;
  }

  .login-signup{
  width: 21%;
  }

  .pos_absolute{
    width: 45%;
    left: 28%;
  }

  .comment-login{
    width: 40%;
  }

}

</style>