<script>
export default {
  name: "sub_footer",
};
</script>


<template>
  <div class="subscribtion-section bg-black px-[20px] py-[30px] sm:p-8">
    <div class="subscribtion-container mx-auto max-w-[1440px] flex flex-col">
      <div class="header-block pt-[40px] md:mb-4 text-left">
        <div class="text-[32px] md:text-[60px] text-white leading-[100%] ">SUPA OVENS</div>
        <!-- <div class="subheader-block text-[12px] sm:text-[16px] text-white max-w-[940px]">
          Become a part of our Sweet Spa family by joining our loyalty program. Enjoy exclusive discounts, priority bookings, and special offers reserved just for our members. 
        </div> -->
      </div>
      <div class="flex flex-col md:flex-row gap-4 min-h-[200px] my-10">
        <div class="w-full md:w-1/2 flex flex-col justify-end items-start">
          <div class="flex flex-col items-start text-left">
            <div class="below-text md:max-w-[404px] text-[14px] sm:text-[16px] text-white">We’re here for more than just purchases — let’s connect! Whether you have a question, need technical support, or want to share feedback and ideas, we’d love to hear from you.</div>  
            <div class="flex flex-col justify-center items-center mt-3">
              <a class="text-center leading-[140%] min-w-[200px] bg-white text-black sm:min-w-[300px] py-3 uppercase md:hover:tracking-[1px]"
                 href="/contact">
                Get In Touch
              </a>  
            </div> 
          </div>
        </div>
        <div class="w-full md:w-1/2 mt-[20px] md:mt-0">
          <div class="w-full flex flex-col sm:flex-row gap-8 sm:gap-0">
            <div class="w-full sm:w-1/2 text-left">
              <div class="right-header text-white text-[16px] md:text-[20px] mb-[16px]">Orders and Support</div>
                <div class="right-content text-white text-[14px] sm:text-[16px] my-1">
                  <p class="md:hover:tracking-[1px]">Terms & Conditions</p> 
                  <p class="md:hover:tracking-[1px]">Privacy Policy</p> 
                </div>
            </div>
            <div class="w-full sm:w-1/2 text-left">
              <div class="right-header text-white text-[16px] md:text-[20px] mb-[16px]">Operating Hours</div>
                <div class="right-content text-white text-[14px] sm:text-[16px] my-1">
                  <p>Monday - Friday: 09:00 - 17:00</p>
                  <p>Saturday: 10:00 - 17:00</p> 
                  <p>Sunday: CLOSED</p> 
                </div>
            </div>  
          </div>
        </div>  
      </div>
      <hr class="text-white">
      <div class="footer-block mt-8">
        <div class="flex flex-row justify-between">
          <div class="left-content text-[#979797] text">
            © 2024 All Rights Reserved 
          </div>
          <!-- <div class="right-content text-white uppercase">
            .footer_text_2   
          </div> -->
        </div>  
      </div>
    </div>  
  </div>
</template>