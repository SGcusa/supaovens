<template>
  <section>
    <div class="py-20">
      <h1>Our Story</h1>
      <hr class="mt-2 mb-4">
      <p>We pride ourselves on delivering high-quality, handcrafted pizza ovens to homes and businesses nationwide.</p>
    </div>
    
    <div>
      <div class="flex flex-row justify-around text-left">
        <div class="w-[40vw] px-10">
          <h3 class="py-3">Our Mission</h3>
          <p>At Supa Ovens, our mission is simple: to bring the joy of authentic, homemade pizza to everyone. We believe that you don’t need to be a qualified chef to make delicious pizza. With our expertly crafted ovens and a bit of creativity, anyone can create their own culinary masterpieces.</p>

          <img class="pt-10" src="https://i.imgur.com/Qtilvzq.jpeg" alt="">
        </div>
        <div class="border-l-2 border-gray-400"></div>
        <div class="w-[40vw] px-10">
          <h3 class="py-3">Quality Craftsmanship</h3>
          <p>Our ovens are a testament to meticulous craftsmanship and innovation. Each unit is handcrafted to perfection, combining traditional techniques with modern technology to ensure durability, efficiency, and exceptional cooking results. We offer a range of customizable options to meet your specific needs, from size and color to additional features.</p>

          <h3 class="py-3">Nationwide Delivery</h3>
          <p>We understand the importance of convenience, which is why we offer nationwide delivery. No matter where you are, we’ll bring your pizza oven right to your doorstep, so you can start enjoying homemade pizza as soon as possible.</p>

          <h3 class="py-3">Customer Satisfaction</h3>
          <p>We are committed to providing excellent customer service and support. Our dedicated team is here to help you choose the perfect oven, guide you through the installation process, and ensure your complete satisfaction. Join hundreds of satisfied customers who have chosen Supa Ovens for their reliable and efficient pizza cooking solutions.</p>

          <h3 class="py-3">Our Team</h3>
          <p>Our team at Supa Ovens is passionate about pizza and dedicated to excellence. We are here to support you every step of the way, from selecting the right oven to mastering the art of pizza making. Thank you for choosing Supa Ovens. We look forward to helping you create delicious, homemade pizza and making your cooking experience unforgettable.</p>
        </div>
      </div>
    </div>
    <!-- <div class="row">
        <marquee class="display-1" behavior="sroll" direction="right" loop="15">
          About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us - About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us  -  About Us
        </marquee>
      </div> -->
  </section>

  <section>
    <div class="mt-40">
      <h1><router-link to="/">Supa Ovens</router-link></h1>
      <h6 class="mb-4">Founded in 2019 By Simphiwe Bhusa</h6>
    </div>
    <footer>
      <hr>
      <div class="flex flex-row">
        <div class="w-1/2 footer-sec">
          <div class="h-[20vh] text-left pt-10 px-10">
            <h4 class="pb-3">Contact</h4>
            <p>27055 Shumani Street, Strand, Cape Town, 7140</p>
            <p>069-292-9578</p>
            <p>gcusaaa@gmail.com</p>
          </div>
          <hr>
          <div class=" text-left pt-10 px-10">
            <div class="flex flex-row">
              <div class="w-1/2">
                  <h4 class="pb-3">Menu</h4>
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
              <div class="w-1/2">
                <h4 class="pb-3">Socials</h4>
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
              <div class="w-1/2">
                <h4 class="mt-10 pb-3">Working Hours</h4>
                <p>Monday - Friday 09:00 - 17:00</p>
                <p>Saturday 09:00 - 17:00</p>
                <p>Sunday CLOSED</p>
              </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="h-[20vh] text-left pt-10 px-10">
            <h4>Get in Touch</h4>
          </div>
          <hr>
          <div class="h-[50vh] text-left pt-10 px-10 text-[18px]">
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





<script>
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
});
</script>






<style scoped>
body{
  overflow-x: hidden;
  overflow-y: hidden;
}

h1{
  font-size: 4.6vw;
  font-weight: 700;
}

h2{
  font-size: 70px;
  font-weight: 700;
}

h3{
  font-size: 40px;
  font-weight: 700;
}

h4{
  font-size: 32px;
  font-weight: 700;
}

h5{
  font-size: 24px;
  font-weight: 700;
}

h6{
  font-size: 20px;
  font-weight: 700;
}

.round{
  border: 1px solid black;
  border-radius: 10px;
}

.footer-sec{
  border-right: 1px solid rgb(184, 184, 184);
}



/* marquee {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  box-sizing: border-box;
  animation: marquee 15s linear infinite;
  background-color: black;
  color: white;
  text-transform: uppercase;
  letter-spacing: 8px;
  padding: 80px 0px;
  margin: 80px 0px;
} */
/* 
@keyframes marquee {
  from {
      transform: translateX(100%);
  }
  to {
      transform: translateX(-100%);
  }
} */



/* SCROLL ANIMATION */
/* .fade-in {
  opacity: 0;
  transition: opacity 1s ease-out;
}

.fade-in.visible {
  opacity: 1;
}

.slide-in-left {
  transform: translateX(-100%);
  transition: transform 1s ease-out;
}

.slide-in-left.visible {
  transform: translateX(0);
}

.slide-in-right {
  transform: translateX(100%);
  transition: transform 1s ease-out;
}

.slide-in-right.visible {
  transform: translateX(0);
} */

</style>