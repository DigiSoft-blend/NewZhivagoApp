
<template>
<!-- row px-5 m-0 -->
     <div class="px-0 bg-light text-black">
       <Loader v-if="getLoader" class="text-center"></Loader> 
       <header class="d-flex py-2 px-lg-5 mx-auto align-items-center justify-content-between border-bottom border-secondary bg-white">
         <div class="logo w-25">
          <router-link to="/"><img class="w-100" src="/assets/images/zhivago-logo.png" alt=""></router-link>
         </div>
        <div class="d-flex flex-grow-1 align-items-center justify-content-between pl-5">
          <div class="search w-75 d-lg-flex d-md-none d-none d-sm-none p-2 rounded align-items-center shadow bg-body rounded">
            <!-- <font-awesome-icon icon="fa-thin fa-magnifying-glass" /> -->
            <span class="iconify" data-icon="charm:search"></span>
            <input type="text" placeholder="Search" class="w-100 p-2 flex-grow-1 outline-0 border-0 bg-transparent">
          </div>
          <div class="user-profile position-relative align-items-center">
            <a href="#"><span class="iconify hover d-md-none d-none d-sm-none d-lg-block" style="font-size: 1.5rem;" data-icon="mi:notification"></span></a>
            <a href="#"><span class="iconify hover d-md-none d-none d-sm-none d-lg-block" style="font-size: 1.2rem;" data-icon="bi:chat-left-text"></span></a>
            <div class="profile overflow-hidden rounded-circle">
              <img src="/assets/images/faces/face1.jpg" alt="" class="w-100 ">
            </div>
            <div v-if="false" class="profile-details position-absolute ">
              <div class="d-flex align-items-center justify-content-between border-bottom border-top border-secondary">
                <div class="profile overflow-hidden rounded-circle" style="width: 23%;">
                  <img src="/assets/images/faces/face1.jpg" alt="" class="w-100 ">
                </div>
                <h5>{{ getUser.username || customUsername }}</h5>
                <!-- <h5>Asabeneh</h5> -->
              </div>
                <!-- Authentication -->
              <div class="authentication p-4">
                <ul>
                  <li><a href="#">My profile</a></li>
                  <li><a href="#">Edit profile</a></li>
                  <li><a href="#">Notifications</a></li>
                  <li><a href="#">Authentication</a></li>
                </ul>
              </div>
                <!-- sign out -->
              <div class="signout">
                <p>Sign out</p>
              </div>
            </div>
          </div>
        </div>
       </header>

       <main class="py-4 px-2">
          <!-- side menu -->
         <div class="side-menu g-col-3 g-col-md-3  d-sm-none d-none d-lg-block">
           <button class="btn btn-primary w-100 text-left d-flex align-items-center py-2"><span class="iconify me-2" style="color: #fff;" data-icon="bytesize:home"></span>Home</button>
           <div class="side-menu-list-parent">

             <div class="side-menu-list member">
               <p>
                 <span class="iconify text-black-50 fw-bolder me-2" data-icon="eva:arrow-right-fill" href="#collapseExample" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample"></span>
                 <a href="" class="text-muted">Members Central</a>               
               </p>
               
               <div class="member_collapsed collapse" id="collapseExample">
                  <a href="" class="individual-member"><span >👋</span>Start here</a>
                  <a href="" class="individual-member"><span>😏</span>Introduce Yourself</a>
               </div>
             </div>

             <div class="side-menu-list vip-group">
               <p>
                 <span class="iconify text-black-50 fw-bolder me-2" data-icon="eva:arrow-right-fill" href="#collapseExample2" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample2"></span>
                 <a href="" class="text-muted">VIP GROUPS</a>
                 <span type="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Create a space">
                  <span class="iconify text-dark-50" style="font-size: 1rem;" data-icon="carbon:add-alt"></span>
                </span>
               </p>
               <div class="member_collapsed collapse" id="collapseExample2">
                  <a href="" class="individual-member"><span >🙋</span>Las Vegas Singles</a>
                  <a href="" class="individual-member"><span>💱</span>No mint Mark</a>
               </div>
             </div>

             <div class="side-menu-list vip-group">
               <p>
                 <span class="iconify text-black-50 fw-bolder me-2" data-icon="eva:arrow-right-fill" href="#collapseExample3" data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="collapseExample3"></span>
                 <a href="" class="text-muted">Admins</a>
               </p>
               <div class="member_collapsed collapse" id="collapseExample3">
                  <a href="" class="individual-member"><span >😎</span>Zhivago Admins</a>
               </div>
             </div>
             
             
             
           </div>

         </div>

            <!-- main posts -->
         <div class="main-posts g-col-6 g-col-md-6 shadow p-3 bg-body rounded">
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
              <div class="d-flex flex-grow-1 py-2 position-relative">
                <span class="text-muted flex-grow-1 ms-3 text-left flex-grow-1" style="font-size: 0.8rem;">7 days ago</span>
                <a href="" class="text-black sharebtn hover mx-3">Share</a>
                <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                <div v-if="false" class="share-post d-flex justify-content-between position-absolute border border-secondary border-1 rounded-1 shadow-sm">
                  <div>
                    <p>Share to web</p>
                    <small class="text-muted">This post is Public.</small>
                  </div>
                  <button class="btn btn-outine-secondary">Copy link</button>
                </div>
              </div>
            </div>
                  <!-- post content i.e post image, likes and commenr -->
            <div class="post-content pt-2 pb-4">
              <p class="fs-3">Is anyone here to like me?</p>
              <div class="main-post-img overflow-hidden rounded">
                <img src="/img/IMG-20220314-WA0028.jpg" alt="" class="w-100">
              </div>
            </div>

            <div class="post-likes d-flex my-2">
              <div class="post-likes-img-parent">
                <div class="post-likes-img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face3.jpg" alt="" class="w-100">
                </div>
              </div>
              <p>LIked by Black, shadrach & others</p>
            </div>

            <div class="likes_comments d-flex justify-content-between border-top border-bottom border-secondary py-2">
              <a href="" class="likebtn d-flex align-items-center"><span class="iconify" data-icon="fa-regular:thumbs-up"></span>Like</a>
              <a class="flex-grow-1 ps-3 commentbtn d-flex align-items-center" data-bs-toggle="collapse" href="#col1-input" role="button" aria-expanded="false" aria-controls="col1-input"><span class="iconify me-2" data-icon="bx:message"></span>Comment</a>
              <a class="commentbtn" data-bs-toggle="collapse" href="#col1" role="button" aria-expanded="false" aria-controls="collapseExample4">1 comment</a>
            </div>

           <div class="collapse comment-section" id="col1">
            <div class="comment-text text-center py-3 border-bottom border-secondary">
              <div class="individual-comment-parent">
                <div class="individual-comment d-flex justify-content-between align-items-start">
                  <div class="profileImg overflow-hidden rounded-circle me-4">
                    <img src="/assets/images/faces/face4.jpg" alt="" class="w-100">
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <span class="fw-normal">Junior Sam</span>
                      <span class="text-muted flex-grow-1 ms-3 text-left" style="font-size: 0.8rem;">a month ago</span>
                      <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                    </div>
                    <p class="my-2 text-start">Thanks alot, this was very helpful</p>
                    <div class="my-1 text-start">
                       <span class="commentbtn ms-2">Reply</span>
                       <span class="commentbtn ms-2">Like</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-comment justify-content-around m-auto">
                <button type="button" class="btn btn-outline-dark">Show more comment</button>
              </div>
            </div>
            <div class="newcomment d-flex justify-content-between align-items-start py-3">
               <div class="profileImg overflow-hidden rounded-circle me-4">
                  <img src="/assets/images/faces/face4.jpg" alt="" class="w-100">
                </div>
                <div class="flex-grow-1 border-secondary border rounded p-3">
                  <input type="text" id="#col1-input" placeholder="What are your thoughts?" class="new-comment-input text-break w-100 p-2">
                  <div class="d-flex justify-content-between mt-2">
                    <span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="akar-icons:video"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="bi:image"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:gif-20-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:emoji-28-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="teenyicons:attach-solid"></span>
                    </span>
                    <button class="btn btn-primary px-4 py-2 fw-normal">Post</button>
                  </div>
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

          <div class="w-100 p-3 bg-white">

            <div class="d-flex justify-content-between w-100">
                  <!-- detail of poster -->
                <div class="d-flex align-items-center py-2">
                
                <div class="tp_img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face1.jpg" alt="" class="w-100">
                </div>
                <div class="tp_details text-black px-2">
                  <h5 class="">Black girl Wonder</h5>
                  <small class="username_tp text-muted">Posted in Start here.</small>
                </div>
              </div>
              <div class="d-flex flex-grow-1 py-2">
                <span class="text-muted flex-grow-1 ms-3 text-left flex-grow-1" style="font-size: 0.8rem;">7 days ago</span>
                <a href="" class="text-black sharebtn hover mx-3">Share</a>
                <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
              </div>
            </div>
                  <!-- post content i.e post image, likes and commenr -->
            <div class="post-content pt-2 pb-4">
              <p class="fs-3">Is anyone here to like me?</p>
              <div class="main-post-img overflow-hidden rounded">
                <img src="/img/IMG-20220314-WA0027.jpg" alt="" class="">
                <img src="/img/IMG-20220314-WA0026.jpg" alt="" class="">
              </div>
            </div>

            <div class="post-likes d-flex my-2">
              <div class="post-likes-img-parent">
                <div class="post-likes-img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face6.jpg" alt="" class="w-100">
                </div>
              </div>
              <p>LIked by Black</p>
            </div>

            <div class="likes_comments d-flex justify-content-between border-top border-bottom border-secondary py-2">
              <a href="" class="likebtn d-flex align-items-center"><span class="iconify" data-icon="fa-regular:thumbs-up"></span>Like</a>
              <a class="flex-grow-1 ps-3 commentbtn d-flex align-items-center" data-bs-toggle="collapse" href="#col1-input" role="button" aria-expanded="false" aria-controls="col1-input"><span class="iconify me-2" data-icon="bx:message"></span>Comment</a>
              <a class="commentbtn" data-bs-toggle="collapse" href="#col2" role="button" aria-expanded="false" aria-controls="collapseExample4">1 comment</a>
            </div>

           <div class="collapse comment-section" id="col2">
            <div class="comment-text text-center py-3 border-bottom border-secondary">
              <div class="individual-comment-parent">
                <div class="individual-comment d-flex justify-content-between align-items-start">
                  <div class="profileImg overflow-hidden rounded-circle me-4">
                    <img src="/assets/images/faces/face5.jpg" alt="" class="w-100">
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <span class="fw-normal">Junior Sam</span>
                      <span class="text-muted flex-grow-1 ms-3 text-left" style="font-size: 0.8rem;">a month ago</span>
                      <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                    </div>
                    <p class="my-2 text-start">Thanks alot, this was very helpful</p>
                    <div class="my-1 text-start">
                       <span class="commentbtn ms-2">Reply</span>
                       <span class="commentbtn ms-2">Like</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-comment justify-content-around m-auto">
                <button type="button" class="btn btn-outline-dark">Show more comment</button>
              </div>
            </div>
            <div class="newcomment d-flex justify-content-between align-items-start py-3">
               <div class="profileImg overflow-hidden rounded-circle me-4">
                  <img src="/assets/images/faces/face5.jpg" alt="" class="w-100">
                </div>
                <div class="flex-grow-1 border-secondary border rounded p-3">
                  <input type="text" id="#col1-input" placeholder="What are your thoughts?" class="new-comment-input text-break w-100 p-2">
                  <div class="d-flex justify-content-between mt-2">
                    <span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="akar-icons:video"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="bi:image"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:gif-20-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:emoji-28-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="teenyicons:attach-solid"></span>
                    </span>
                    <button class="btn btn-primary px-4 py-2 fw-normal">Post</button>
                  </div>
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
              <div class="d-flex flex-grow-1 py-2">
                <span class="text-muted flex-grow-1 ms-3 text-left flex-grow-1" style="font-size: 0.8rem;">7 days ago</span>
                <a href="" class="text-black sharebtn hover mx-3">Share</a>
                <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
              </div>
            </div>
                  <!-- post content i.e post image, likes and commenr -->
            <div class="post-content pt-2 pb-4">
              <p class="fs-3">Is anyone here to like me?</p>
              <div class="main-post-img overflow-hidden rounded">
                <img src="/img/IMG-20220314-WA0019.jpg" alt="" class="w-100">
              </div>
            </div>

            <div class="post-likes d-flex my-2">
              <div class="post-likes-img-parent">
                <div class="post-likes-img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face6.jpg" alt="" class="w-100">
                </div>
              </div>
              <p>LIked by Black, shadrach & others</p>
            </div>

            <div class="likes_comments d-flex justify-content-between border-top border-bottom border-secondary py-2">
              <a href="" class="likebtn d-flex align-items-center"><span class="iconify" data-icon="fa-regular:thumbs-up"></span>Like</a>
              <a class="flex-grow-1 ps-3 commentbtn d-flex align-items-center" data-bs-toggle="collapse" href="#col1-input" role="button" aria-expanded="false" aria-controls="col1-input"><span class="iconify me-2" data-icon="bx:message"></span>Comment</a>
              <a class="commentbtn" data-bs-toggle="collapse" href="#col3" role="button" aria-expanded="false" aria-controls="collapseExample4">3 comment</a>
            </div>

           <div class="collapse comment-section" id="col3">
            <div class="comment-text text-center py-3 border-bottom border-secondary">
              <div class="individual-comment-parent">
                <div class="individual-comment d-flex justify-content-between align-items-start">
                  <div class="profileImg overflow-hidden rounded-circle me-4">
                    <img src="/assets/images/faces/face4.jpg" alt="" class="w-100">
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <span class="fw-normal">Junior Sam</span>
                      <span class="text-muted flex-grow-1 ms-3 text-left" style="font-size: 0.8rem;">3 days ago</span>
                      <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                    </div>
                    <p class="my-2 text-start">Yes I am!!!</p>
                    <div class="my-1 text-start">
                       <span class="commentbtn ms-2">Reply</span>
                       <span class="commentbtn ms-2">Like</span>
                    </div>
                  </div>
                </div>
                <div class="individual-comment d-flex justify-content-between align-items-start">
                  <div class="profileImg overflow-hidden rounded-circle me-4">
                    <img src="/assets/images/faces/face6.jpg" alt="" class="w-100">
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <span class="fw-normal">Black Jr</span>
                      <span class="text-muted flex-grow-1 ms-3 text-left" style="font-size: 0.8rem;">3 days ago</span>
                      <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                    </div>
                    <p class="my-2 text-start">You look so beautiful</p>
                    <div class="my-1 text-start">
                       <span class="commentbtn ms-2">Reply</span>
                       <span class="commentbtn ms-2">Like</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-comment justify-content-around m-auto">
                <button type="button" class="btn btn-outline-dark">Show more comment</button>
              </div>
            </div>
            <div class="newcomment d-flex justify-content-between align-items-start py-3">
               <div class="profileImg overflow-hidden rounded-circle me-4">
                  <img src="/assets/images/faces/face4.jpg" alt="" class="w-100">
                </div>
                <div class="flex-grow-1 border-secondary border rounded p-3">
                  <input type="text" id="#col1-input" placeholder="What are your thoughts?" class="new-comment-input text-break w-100 p-2">
                  <div class="d-flex justify-content-between mt-2">
                    <span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="akar-icons:video"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="bi:image"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:gif-20-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:emoji-28-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="teenyicons:attach-solid"></span>
                    </span>
                    <button class="btn btn-primary px-4 py-2 fw-normal">Post</button>
                  </div>
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
              <div class="d-flex flex-grow-1 py-2">
                <span class="text-muted flex-grow-1 ms-3 text-left flex-grow-1" style="font-size: 0.8rem;">7 days ago</span>
                <a href="" class="text-black sharebtn hover mx-3">Share</a>
                <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
              </div>
            </div>
                  <!-- post content i.e post image, likes and commenr -->
            <div class="post-content pt-2 pb-4">
              <p class="fs-3">Is anyone here to like me?</p>
              <div class="main-post-img overflow-hidden rounded">
                <img src="/img/IMG-20220314-WA0022.jpg" alt="" class="w-100">
              </div>
            </div>

            <div class="post-likes d-flex my-2">
              <div class="post-likes-img-parent">
                <div class="post-likes-img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face3.jpg" alt="" class="w-100">
                </div>
              </div>
              <p>LIked by Black, shadrach</p>
            </div>

            <div class="likes_comments d-flex justify-content-between border-top border-bottom border-secondary py-2">
              <a href="" class="likebtn d-flex align-items-center"><span class="iconify" data-icon="fa-regular:thumbs-up"></span>Like</a>
              <a class="flex-grow-1 ps-3 commentbtn d-flex align-items-center" data-bs-toggle="collapse" href="#col1-input" role="button" aria-expanded="false" aria-controls="col1-input"><span class="iconify me-2" data-icon="bx:message"></span>Comment</a>
              <a class="commentbtn" data-bs-toggle="collapse" href="#col4" role="button" aria-expanded="false" aria-controls="collapseExample4">1 comment</a>
            </div>

           <div class="collapse comment-section" id="col4">
            <div class="comment-text text-center py-3 border-bottom border-secondary">
              <div class="individual-comment-parent">
                <div class="individual-comment d-flex justify-content-between align-items-start">
                  <div class="profileImg overflow-hidden rounded-circle me-4">
                    <img src="/assets/images/faces/face5.jpg" alt="" class="w-100">
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <span class="fw-normal">Junior Sam</span>
                      <span class="text-muted flex-grow-1 ms-3 text-left" style="font-size: 0.8rem;">a month ago</span>
                      <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                    </div>
                    <p class="my-2 text-start">Thanks alot, this was very helpful</p>
                    <div class="my-1 text-start">
                       <span class="commentbtn ms-2">Reply</span>
                       <span class="commentbtn ms-2">Like</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-comment justify-content-around m-auto">
                <button type="button" class="btn btn-outline-dark">Show more comment</button>
              </div>
            </div>
            <div class="newcomment d-flex justify-content-between align-items-start py-3">
               <div class="profileImg overflow-hidden rounded-circle me-4">
                  <img src="/assets/images/faces/face4.jpg" alt="" class="w-100">
                </div>
                <div class="flex-grow-1 border-secondary border rounded p-3">
                  <input type="text" id="#col1-input" placeholder="What are your thoughts?" class="new-comment-input text-break w-100 p-2">
                  <div class="d-flex justify-content-between mt-2">
                    <span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="akar-icons:video"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="bi:image"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:gif-20-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:emoji-28-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="teenyicons:attach-solid"></span>
                    </span>
                    <button class="btn btn-primary px-4 py-2 fw-normal">Post</button>
                  </div>
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

          <div class="w-100 p-3 bg-white">

            <div class="d-flex justify-content-between w-100">
                  <!-- detail of poster -->
                <div class="d-flex align-items-center py-2">
                
                <div class="tp_img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face1.jpg" alt="" class="w-100">
                </div>
                <div class="tp_details text-black px-2">
                  <h5 class="">Black girl Wonder</h5>
                  <small class="username_tp text-muted">Posted in Start here.</small>
                </div>
              </div>
              <div class="d-flex flex-grow-1 py-2">
                <span class="text-muted flex-grow-1 ms-3 text-left flex-grow-1" style="font-size: 0.8rem;">7 days ago</span>
                <a href="" class="text-black sharebtn hover mx-3">Share</a>
                <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
              </div>
            </div>
                  <!-- post content i.e post image, likes and commenr -->
            <div class="post-content pt-2 pb-4">
              <p class="fs-3">Is anyone here to like me?</p>
              <div class="main-post-img overflow-hidden rounded">
                <img src="/img/IMG-20220314-WA0029.jpg" alt="" class="">
                <img src="/img/IMG-20220314-WA0023.jpg" alt="" class="">
              </div>
            </div>

            <div class="post-likes d-flex my-2">
              <div class="post-likes-img-parent">
                <div class="post-likes-img rounded-circle overflow-hidden" >
                  <img src="/assets/images/faces/face6.jpg" alt="" class="w-100">
                </div>
              </div>
              <p>LIked by Black</p>
            </div>

            <div class="likes_comments d-flex justify-content-between border-top border-bottom border-secondary py-2">
              <a href="" class="likebtn d-flex align-items-center"><span class="iconify" data-icon="fa-regular:thumbs-up"></span>Like</a>
              <a class="flex-grow-1 ps-3 commentbtn d-flex align-items-center" data-bs-toggle="collapse" href="#col1-input" role="button" aria-expanded="false" aria-controls="col1-input"><span class="iconify me-2" data-icon="bx:message"></span>Comment</a>
              <a class="commentbtn" data-bs-toggle="collapse" href="#col5" role="button" aria-expanded="false" aria-controls="collapseExample4">1 comment</a>
            </div>

           <div class="collapse comment-section" id="col5">
            <div class="comment-text text-center py-3 border-bottom border-secondary">
              <div class="individual-comment-parent">
                <div class="individual-comment d-flex justify-content-between align-items-start">
                  <div class="profileImg overflow-hidden rounded-circle me-4">
                    <img src="/assets/images/faces/face5.jpg" alt="" class="w-100">
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <span class="fw-normal">Junior Sam</span>
                      <span class="text-muted flex-grow-1 ms-3 text-left" style="font-size: 0.8rem;">a month ago</span>
                      <span class="iconify text-muted hover" style="font-size: 1.7rem;" data-icon="mi:options-horizontal"></span>
                    </div>
                    <p class="my-2 text-start">Thanks alot, this was very helpful</p>
                    <div class="my-1 text-start">
                       <span class="commentbtn ms-2">Reply</span>
                       <span class="commentbtn ms-2">Like</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="show-comment justify-content-around m-auto">
                <button type="button" class="btn btn-outline-dark">Show more comment</button>
              </div>
            </div>
            <div class="newcomment d-flex justify-content-between align-items-start py-3">
               <div class="profileImg overflow-hidden rounded-circle me-4">
                  <img src="/assets/images/faces/face5.jpg" alt="" class="w-100">
                </div>
                <div class="flex-grow-1 border-secondary border rounded p-3">
                  <input type="text" id="#col1-input" placeholder="What are your thoughts?" class="new-comment-input text-break w-100 p-2">
                  <div class="d-flex justify-content-between mt-2">
                    <span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="akar-icons:video"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="bi:image"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:gif-20-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="fluent:emoji-28-regular"></span>
                      <span class="iconify me-2 text-muted" style="font-size: 1.3rem;" data-icon="teenyicons:attach-solid"></span>
                    </span>
                    <button class="btn btn-primary px-4 py-2 fw-normal">Post</button>
                  </div>
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
         <div class="g-col-3 g-col-md-6 d-md-none d-sm-none d-none d-lg-block">
           <button class="btn btn-primary w-100 text-center py-3 px-4 fw-bold">New Post</button>
           <div class="trending-post bg-white shadow-sm rounded p-3 mt-4">
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

          <!-- <div class="ad-space text-black text-center mt-2">
            <em>-advertisement-</em>
            <div class="_ad_inner_space">
                250 x 250
            </div>
          </div> -->
         </div>
       </main>
     </div>
</template>


<script>
import Loader from "./Loader.vue"
export default {
  data(){
    return{
      customUsername: 'Dummy Username'
    }
  },
   computed:{
       getUser(){
         return  this.$store.getters.getUser
       },
       getLoader() {
       return this.$store.getters.getLoader
       },
   } ,
   components:{Loader} 
}
</script>


<style scoped>
*{
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  color: hsl(0, 0%, 23.1%);
}

.hover{
  color: hsl(0, 0%, 23.1%);
  cursor: pointer;
}
.hover:hover{
  color: #0d6efd;
}

header, main{
  max-width: 1440px;
}
.logo{
  width: 15% !important;
}

.profile{
  width: 23%;
}
.user-profile{
  width: 16%;
  display: flex;
  justify-content: space-around;
}

main{
  display: grid;
  grid-template-columns: 20% 1fr 20%;
  gap: 1em;
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
  cursor: pointer;
}

.sharebtn:hover, .likebtn:hover, .commentbtn{
  color: #000;
}

/* .main-posts{
  height: 100vh;
  max-height: 100vh;
  position: relative;
} */

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
  display: flex;
  justify-content: space-between;
}

.main-post-img img{
  width: 48%;
}

.comment-text{
  width: 100%;
}

/* .profile-details{

 } */

.authentication ul li{
  list-style-type: none;

}

.profileImg{
  width: 8%;
}

.new-comment-input{
  border: none;
  outline: none;
}

.post-likes-img{
  width: 35%;
}

 
@media screen and (max-width: 1200px){
  main{
    grid-template-columns: 24% 50% 23%;
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

  .post-ad-inner-space{
  width: 100%!important;
}

}

@media screen and (max-width: 800px){
  main{
    display: block;
  }

  .profile{
    width: 35%;
  }


}

</style>