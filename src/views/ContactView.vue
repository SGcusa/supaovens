<template>
  <section>
  <div class="py-20">
    <h1 class="">Get in Touch</h1>
    <hr class="mt-2 mb-4">
    <p>Let's chat</p>
  </div>
  <div class="">
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
        <textarea class="form-control border-gray-400 border-2" id="exampleFormControlTextarea1" rows="6"></textarea>
      </div>
      <div class="pb-10 flex flex-row rounded-lg">
        <button class="py-2 bg-black text-white w-full border-2 round">Submit</button>
      </div>
    </div>
  </div>
</section>
  
  <section>
    <div class="mt-40">
      <h1><router-link to="/">Supa Ovens</router-link></h1>
      <h6 class="mb-4">Founded in 2019 By Simphiwe Bhusa</h6>
    </div>
    <footer>
      <div class="flex flex-row h-[30vh]">
        <div class="w-1/2 footer-sec">
          <hr>
          <div class="flex flex-row text-left pt-10 px-10">
          <div class="w-1/2">
            <h4 class="pb-3">Contact</h4>
            <p>27055 Shumani Street, Strand, Cape Town, 7140</p>
            <p>069-292-9578</p>
            <p>gcusaaa@gmail.com</p>
          </div>
          <div class="w-1/2">
            <h4 class="pb-3">Working Hours</h4>
            <p>Monday - Friday 09:00 - 17:00</p>
            <p>Saturday 09:00 - 17:00</p>
            <p>Sunday CLOSED</p>
          </div>
        </div>
        </div>
        <div class="w-1/2">
          <hr>
          <div class="text-left pt-10 px-10 text-[18px]">
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

</style>