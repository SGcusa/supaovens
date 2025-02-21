<script>
import mediar from '@/components/mediar.vue';

export default {
  components: {
    mediar
  },
};
</script>



<template>
  <section>
    <div class="relative flex flex-row text-white text-start items-center max-h-[600px] overflow-hidden px-[20px] HTYO">
      <video autoplay muted loop class="top-0 left-0 w-full h-full object-cover rounded-md">
        <source class="!rounded-md" src="https://i.imgur.com/SOZINP0.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute z-10 m-4">
        <h1 class="px-[3vw] text-[40px] lg:text-[60px] xl:text-[80px] leading-[90%] stroke-white" style="-webkit-text-stroke: 2px white;">SUPA<br/> OVENS</h1>
    </div>
  </div>


  <div class="flex flex-col justify-center items-center z-10 my-0 mx-auto pl-[200px]">
    <h1 class="py-[4vw] max-w-[500px] text-[40px] text-left">We deliver nationwide,<br/> Get your pizza oven delivered to your door step</h1>
 </div>
  </section>
  


  <section>
    <div class="flex flex-col md:flex-row md:max-h-[500px] bg-black-900 bg-blend-overlay top-gallery max-w-[1280px] gap-[20px] px-[20px] mx-auto justify-center">
      <img src="https://i.ibb.co/4SW4hk5/cc1103d7-5868-4165-8583-7b469c2c12cd-1.jpg" class="w-full md:w-1/2">
      <img src="https://i.ibb.co/5sg34TR/Whats-App-Image-2024-06-20-at-20-39-04.png" class="w-full md:w-1/2">
    </div>
  </section>

  <mediar />

  <section>
    <div class="py-20">
      <h2>Why Our Pizza Ovens</h2>
      <hr class="mt-2 mb-4">
      <p>At Supa Ovens, we provide top-quality, handcrafted pizza ovens designed to bring the joy of homemade pizza to your home or business. Our range of services includes:</p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-start pt-20 px-[6vw]">
        <div class="p-[1vw] flex flex-col gap-[20px]">
          <div class="h-[10vh] py-2 flex flex-row justify-start">
            <img class="w-[4rem]" src="https://i.ibb.co/JB4MTys/badge.png" alt="icon-default-2">
            <h4 class="flex items-center text-[24px] pl-8">01</h4>
            <h4 class="flex items-center text-[24px] pl-8">Quality Craftsmanship</h4>
          </div>
          <p>Our ovens showcase meticulous craftsmanship, ensuring each unit meets our high standards of durability and performance.</p>
        </div>
        
        <div class="p-[1vw] flex flex-col gap-[20px]">
          <div class="h-[10vh] py-2 flex flex-row justify-start">
            <img class="w-[4rem]" src="https://i.ibb.co/Yk2pd0b/satisfaction.png" alt="icon-default-2">
            <h4 class="flex items-center text-[24px] pl-8">02</h4>
            <h4 class="flex items-center text-[24px] pl-8">Customer Satisfaction</h4>
          </div>
          <p>Join hundreds of satisfied customers who have chosen our ovens for their homes and businesses, enjoying reliable and efficient pizza cooking.</p>
        </div>
        
        <div class="p-[1vw] flex flex-col gap-[20px]">
          <div class="h-[10vh] py-2 flex flex-row justify-start">
            <img class="w-[4rem]" src="https://i.ibb.co/L6RGxwr/porcelain.png" alt="icon-default-2">
            <h4 class="flex items-center text-[24px] pl-8">03</h4>
            <h4 class="flex items-center text-[24px] pl-8">Handcrafted Excellence</h4>
          </div>
          <p>Each oven is handcrafted to perfection, combining traditional techniques with modern innovation to deliver exceptional cooking results.</p>
        </div>
        
        <div class="p-[1vw] flex flex-col gap-[20px]">
          <div class="h-[10vh] py-2 flex flex-row justify-start">
            <img class="w-[4rem]" src="https://i.ibb.co/kKt3CPR/customize.png" alt="icon-default-2">
            <h4 class="flex items-center text-[24px] pl-8">04</h4>
            <h4 class="flex items-center text-[24px] pl-8">Customizable</h4>
          </div>
          <p>Our ovens are designed to be customized to meet your specific needs, from size to color to features.</p>
        </div>
        
        <div class="p-[1vw] flex flex-col gap-[20px]">
          <div class="h-[10vh] py-2 flex flex-row justify-start">
            <img class="w-[4rem]" src="https://i.ibb.co/MGtdCnN/support.png" alt="icon-default-2">
            <h4 class="flex items-center text-[24px] pl-8">05</h4>
            <h4 class="flex items-center text-[24px] pl-8">Dedicated Support</h4>
          </div>
          <p>We're committed to providing excellent customer service and support, helping you choose the perfect oven for your needs and ensuring your satisfaction.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- <section>
    <div>
      <div class="py-[5vw]">
        <h2>Our Services</h2>
        <hr class="mt-2 mb-4">
        <p class="subtext">At Supa Ovens, we provide top-quality, handcrafted pizza ovens designed to bring the joy of homemade pizza to your home or business. Our range of services includes:</p>
      </div>
      <div class="flex flex-wrap">
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
          <img class="w-full h-[30vw] object-cover prduct-image" src="https://i.ibb.co/r0hsVJj/Whats-App-Image-2024-06-20-at-20-30-16.png" alt="">
          <div class="text-left py-4">
            <h5 class="pb-4">0.8 Meter <span class="text-[1vw]">(1 Meter's outside diameter)</span></h5>
            <p class="pb-3 text-[20px]">R7 999,99</p>
            <hr>
            <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
            <hr>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
          <img class="w-full h-[30vw] object-cover prduct-image" src="https://i.ibb.co/C1ghFjv/Whats-App-Image-2024-06-20-at-20-30-11.png" alt="">
          <div class="text-left py-4">
            <h5 class="pb-4">1 Meter <span class="text-[1vw]">(1.2 Meter's outside diameter)</span></h5>
            <p class="pb-3 text-[20px]">R9 999,99</p>
            <hr>
            <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
            <hr>
          </div>
        </div>
        <div class="w-full sm:w-1/2 lg:w-1/3 p-4">
          <img class="w-full h-[30vw] object-cover prduct-image" src="https://i.ibb.co/w4LyX3P/Whats-App-Image-2024-06-20-at-20-39-06-1.png" alt="">
          <div class="text-left py-4">
            <h5 class="pb-4">1.2 Meter <span class="text-[1vw]">(1.4 Meter's outside diameter)</span></h5>
            <p class="pb-3 text-[20px]">R13 999,99</p>
            <hr>
            <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
            <hr>
          </div>
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-1/3 p-4">
          <img class="w-full h-[30vw]" src="https://i.ibb.co/Wnh99YZ/Whats-App-Image-2024-06-20-at-20-39-05-1.png" alt="">
          <div class="text-left py-4">
            <h5 class="pb-4">1.5 Meter <span class="text-[1vw]">(1.7 - 1.8 Meter's outside diameter)</span></h5>
            <p class="pb-3 text-[20px]">R15 999,99</p>
            <hr>
          <button  class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
          <hr>
          </div>
        </div>
        <div class="w-1/3 p-4">
          <img class="w-full h-[30vw]" src="https://i.ibb.co/6NzWRnx/Whats-App-Image-2024-06-20-at-20-39-06.png" alt="">
          <div class="text-left py-4">
            <h5 class="pb-4">2 Meter <span class="text-[1vw]">(2.3 - 2.4 Meter's outside diameter)</span></h5>
            <p class="pb-3 text-[20px]">R21 999,99</p>
            <hr>
          <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
          <hr>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  

  <!-- <section>
    <div>
      <div class="py-20">
        <h1>Shop Accessories</h1>
        <hr class="mt-2 mb-4">
        <p>At Super Ovens, we provide top-quality, handcrafted pizza ovens designed to bring the joy of homemade pizza to your home or business. Our range of services includes:</p>
      </div>
      <div class="w-full overflow-x-scroll">
        <div class="flex flex-nowrap">
          <div class="min-w-[300px] w-[30vw] p-4 flex-shrink-0">
            <img class="w-full h-[40vh]" src="https://i.ibb.co/tPZxyLN/Screenshot-2024-09-09-at-10-07-45.png" alt="Brush Default">
            <div class="text-left py-4">
              <h4 class="pb-4">Brush</h4>
              <p class="text-[18px] pb-3">R149,99</p>
              <hr>
              <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
              <hr>
            </div>
          </div>
          <div class="min-w-[300px] w-[30vw] p-4 flex-shrink-0">
            <img class="w-full h-[40vh]" src="https://i.ibb.co/9Yj0vnz/Screenshot-2024-09-09-at-10-04-29.png" alt="">
            <div class="text-left py-4">
              <h4 class="pb-4">Pizza spade</h4>
              <p class="text-[18px] pb-3">R349,99</p>
              <hr>
              <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
              <hr>
            </div>
          </div>
          <div class="min-w-[300px] w-[30vw] p-4 flex-shrink-0">
            <img class="w-full h-[40vh]" src="https://i.ibb.co/tYLpGpW/Screenshot-2024-09-09-at-09-59-54.png" alt="">
            <div class="text-left py-4">
              <h4 class="pb-4">Oven Door</h4>
              <p class="text-[18px] pb-3">R1 199,99</p>
              <hr>
              <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
              <hr>
            </div>
          </div>
          <div class="min-w-[300px] w-[30vw] p-4 flex-shrink-0">
            <img class="w-full h-[40vh]" src="https://i.ibb.co/D71YdL9/Screenshot-2024-09-06-at-12-04-33.png" alt="">
            <div class="text-left py-4">
              <h4 class="pb-4">Pizza Cutter</h4>
              <p class="text-[18px] pb-3">R84,99</p>
              <hr>
              <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
              <hr>
            </div>
          </div>
          <div class="min-w-[300px] w-[30vw] p-4 flex-shrink-0">
            <img class="w-full h-[40vh]" src="https://i.ibb.co/3zB9RRs/Screenshot-2024-09-09-at-10-08-57-removebg-preview.png" alt="">
            <div class="text-left py-4">
              <h4 class="pb-4">Protection Gloves</h4>
              <p class="text-[18px] pb-3">R249,99</p>
              <hr>
              <button class="tracking-normal p-3 font-bold hover:tracking-[0.2rem]">Order Now</button>
              <hr>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->

  

  <!-- <section>
    <div class="flex flex-row justify-center items-center bg-black">
      <div class="w-full">
        <div class="text-white">
          <h2 >Follow us on Instagram</h2>
          <hr class="mt-2 mb-4">
          <p class="mb-4">Checkout our cool cheesy feed on Instagram</p>
        </div>
        <div class="flex flex-row">
          <img class="w-1/6 h-[40vh] object-cover" src="https://i.imgur.com/dhR7Ssj.jpeg" alt="">
          <video class="w-1/6 h-[40vh] object-cover" autoplay muted loop>
            <source src="https://i.imgur.com/oCk8M8P.mp4" type="video/mp4">
          </video>
          <img class="w-1/6 h-[40vh] object-cover" src="https://i.imgur.com/bASpUct.jpeg" alt="">
          <img class="w-1/6 h-[40vh] object-cover" src="https://i.imgur.com/OnmQLB3.jpeg" alt="">
          <video class="w-1/6 h-[40vh] object-cover" autoplay muted loop>
            <source src="https://i.imgur.com/dBVc6h6.mp4" type="video/mp4">
          </video>
          <img class="w-1/6 h-[40vh] object-cover" src="https://i.imgur.com/0FgFfkF.jpeg" alt="">
        </div>
      </div>
    </div>
  </section> -->

  <section>
    <!-- <div class="mt-40">
      <h2>Supa Ovens</h2>
      <p class="mb-4">Founded in 2019 By Simphiwe Bhusa</p>
    </div> -->
    <footer>
      <hr>
      <div class="flex flex-col md:flex-row">
        <div class="w-full md:w-1/2 footer-sec">
          <div class="md:h-[20vh] text-left m-10 md:m-0 md:pt-10 md:px-10">
            <h6 class="pb-3 text-[20px]">Contact</h6>
            <p>27055 Shumani Street, Strand, Cape Town, 7140</p>
            <p>069-292-9578</p>
            <p>gcusaaa@gmail.com</p>
          </div>
          <hr>
          <div class=" text-left m-10 md:m-0 md:pt-10 md:px-10">
            <div class="flex min-[440px]:flex-row">
              <div class="w-full md:w-1/2">
                  <h6 class="pb-3 text-[20px]">Menu</h6>
                  <div class="menu-1">
                    <router-link to="/products"><button class="tracking-normal hover:tracking-[0.2rem]">Our Services</button></router-link>
                  </div>
                  <div class="menu-2">
                    <router-link to="/team"><button class="tracking-normal hover:tracking-[0.2rem]">Meet the Team</button></router-link>
                  </div>
                  <div class="menu-3">
                    <router-link to="/about"><button class="tracking-normal hover:tracking-[0.2rem]">About Us</button></router-link>
                  </div>
                </div>
              <div class="w-full min-[440px]:w-1/2">
                <h6 class="pb-3 text-[20px]">Socials</h6>
                <div class="social-1">
                  <button class="tracking-normal hover:tracking-[0.2rem]">Facebook</button>
                </div>
                <div class="social-2">
                  <button class="tracking-normal hover:tracking-[0.2rem]">Instagram</button>
                </div>
                <div class="social-3">
                  <button class="tracking-normal hover:tracking-[0.2rem]">Linkedin</button>
                </div>
              </div>
            </div>
              <div class="w-full md:w-1/2">
                <h6 class="mt-10 pb-3">Working Hours</h6>
                <p>Monday - Friday 09:00 - 17:00</p>
                <p>Saturday 09:00 - 17:00</p>
                <p>Sunday CLOSED</p>
              </div>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="hidden md:block md:h-[20vh] md:text-left md:p-10 md:pt-10 md:px-10">
            <h6>Get in Touch</h6>
          </div>
          <hr>
          <div class="md:h-[50vh] text-left m-10 text-[18px]">
            <div class="mb-4">
              <div class="row">
                <div class="w-1/2">
                  <label for="exampleFormControlInput1" class="form-label pl-3 flex flex-row items-start">First name <i class="bi bi-asterisk px-2" style="font-size: 0.5rem;"></i></label>
                  <input type="text" class="form-control border-gray-400 border-2" id="exampleFormControlInput1">
                </div>
                <div class="w-1/2">
                  <label for="exampleFormControlInput1" class="form-label pl-3 flex flex-row items-start">Last name <i class="bi bi-asterisk px-2" style="font-size: 0.5rem;"></i></label>
                  <input type="text" class="form-control border-gray-400 border-2" id="exampleFormControlInput1">
                </div>
              </div>
            </div>
            <div class="mb-4">
              <label for="exampleFormControlInput1" class="form-label pl-3 flex flex-row items-start">Email address <i class="bi bi-asterisk px-2" style="font-size: 0.5rem;"></i></label>
              <input type="email" class="form-control border-gray-400 border-2" id="exampleFormControlInput1" placeholder="email@gmail.com">
            </div>
            <div class="mb-4">
              <label for="exampleFormControlTextarea1" class="form-label pl-3">Query</label>
              <textarea class="form-control border-gray-400 border-2" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="pb-10 flex flex-row rounded-lg">
              <button class="py-2 bg-black text-white w-full border-2 round">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="py-8 bg-gray-300">
      <div class="flex flex-row justify-between">
        <div class="flex flex-row justify-between pl-10">
          <p>Terms & Conditions</p>
          <p class="pl-10">Privacy Policy</p>
        </div>
        <div class="pr-10">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
body{
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
