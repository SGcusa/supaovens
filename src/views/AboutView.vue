<template>
  <section>
    <div class="py-20">
      <h1>Our Story</h1>
      <hr class="mt-2 mb-4">
      <p>We pride ourselves on delivering high-quality, handcrafted pizza ovens to homes and businesses nationwide.</p>
    </div>
    
    <div>
      <div class="flex flex-col md:flex-row justify-around text-left px-[20px] md:px-0 ">
        <div class="w-full md:w-[44vw] md:pl-10">
          <h4 class="py-3">Our Mission</h4>
          <p>At Supa Ovens, our mission is simple: to bring the joy of authentic, homemade pizza to everyone. We believe that you don’t need to be a qualified chef to make delicious pizza. With our expertly crafted ovens and a bit of creativity, anyone can create their own culinary masterpieces.</p>

          <img class="pt-10" src="https://i.imgur.com/Qtilvzq.jpeg" alt="">
        </div>
        <div class="border-l-2 border-gray-400"></div>
        <div class="w-full md:w-[44vw] md:pr-10">
          <h4 class="py-3">Quality Craftsmanship</h4>
          <p>Our ovens are a testament to meticulous craftsmanship and innovation. Each unit is handcrafted to perfection, combining traditional techniques with modern technology to ensure durability, efficiency, and exceptional cooking results. We offer a range of customizable options to meet your specific needs, from size and color to additional features.</p>

          <h4 class="py-3">Nationwide Delivery</h4>
          <p>We understand the importance of convenience, which is why we offer nationwide delivery. No matter where you are, we’ll bring your pizza oven right to your doorstep, so you can start enjoying homemade pizza as soon as possible.</p>

          <h4 class="py-3">Customer Satisfaction</h4>
          <p>We are committed to providing excellent customer service and support. Our dedicated team is here to help you choose the perfect oven, guide you through the installation process, and ensure your complete satisfaction. Join hundreds of satisfied customers who have chosen Supa Ovens for their reliable and efficient pizza cooking solutions.</p>

          <h4 class="py-3">Our Team</h4>
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
    <FooterComponent />
  </section>
</template>





<script>
import FooterComponent from "@/components/footer.vue";

export default {
  components: {
    FooterComponent
  }
};


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



