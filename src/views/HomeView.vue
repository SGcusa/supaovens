<script>
import gallery from '@/components/gallery.vue';
import sub_footer from '@/components/subscribtion.vue';
import banner from '@/components/banner.vue';
import bannerad from '@/components/bannerad.vue';
import commentsection from '@/components/comment-section.vue';
import badge from '@/components/blogs.vue';
import mediar from '@/components/mediar.vue';

export default {
  components: {
    gallery,
    sub_footer,
    banner,
    bannerad,
    commentsection,
    badge,
    mediar,
  },
};
</script>



<template>
  <section>
    <div class="relative flex flex-row text-white text-start items-center max-h-[600px] overflow-hidden">
      <video autoplay muted loop class="top-0 left-0 w-full h-full object-cover">
        <source class="" src="https://i.imgur.com/SOZINP0.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute px-[3vw] z-10 m-4">
        <h1 class="text-[40px] md:text-[60px] lg:text-[80px] mb-[10px] leading-[90%] stroke-white" style="-webkit-text-stroke: 2px white;">SUPA<br/> OVENS</h1>
        <mediar/>
      </div>
    </div>

    <div class="flex flex-col justify-center items-center z-10 my-0 mx-auto md:pl-[200px]">
      <h1 class="max-w-[500px] py-12 px-[20px] text-[24px] md:text-[40px] text-center md:!text-left">We deliver nationwide,<br/> Get your pizza oven delivered to your door step</h1>
    </div>
  </section>
  
  <banner />
  <bannerad />
  <!-- <gallery /> -->

  <section>
    <div class="fixed bottom-5 right-5 z-50 space-y-2 animate-interval-shake">
      <a class="WhatsApp-button flex flex-row justify-start items-center gap-2 " href="https://wa.me/+27692929578" target="_blank">
        <div class="md:hover:bg-green-500 text-green-500 hover:text-white uppercase text-sm font-medium px-3 py-1 mt-2 rounded-lg shadow-lg">
          Need Help?
        </div>
        <img 
          src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/whatsapp.png?v=1741077507" 
          class="w-[40px] h-[40px]"
          loading="lazy"
          alt="WhatsApp Button">
      </a>
    </div>
  </section>
  <section>
    <div class="max-w-[1280px] mx-auto my-[60px] px-[20px]">
      <h1 class="text-[40px] md:text-[40px] text-center leading-[90%] py-[60px]" style="-webkit-text-stroke: 1px black;">Bring The Heat - With Confidence</h1>
      <div class="flex flex-col lg:flex-row lg:gap-[60px] mt-[20px] md:mt-[80px]">
        <div class="lg:w-1/2 w-full flex items-center justify-center">
          <img class="heat-img" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/Group_245.png?v=1741010550" alt="">
        </div>
        <div class="lg:w-1/2 w-full flex flex-col gap-[20px] justify-start items-start">
          <div class="item-1 flex flex-col min-[480px]:flex-row text-start">
            <span class="uppercase font-semibold min-w-[100px] min-[480px]:min-w-[200px]">Oven Pipe:</span> 
            Designed for optimal airflow, our oven pipes ensure smoke is efficiently directed away, keeping your cooking experience clean and smooth.
          </div>
          <div class="item-1 flex flex-col min-[480px]:flex-row text-start">
            <span class="uppercase font-semibold min-w-[100px] min-[480px]:min-w-[200px]">Color Blend/Oven Coat:</span> 
            Each oven features a high-quality color coat, offering both durability and a sleek finish that complements any outdoor space.
          </div>
          <div class="item-1 flex flex-col min-[480px]:flex-row text-start">
            <span class="uppercase font-semibold min-w-[100px] min-[480px]:min-w-[200px]">Inside Diameter:</span>
            Ranging from 0.8m to 2m, our ovens provide ample cooking space, catering to both personal use and larger gatherings.
          </div>
          <div class="item-1 flex flex-col min-[480px]:flex-row text-start">
            <span class="uppercase font-semibold min-w-[100px] min-[480px]:min-w-[200px]">Brick Decoration:</span>
            Carefully crafted brick designs not only enhance the oven’s structural strength but also add a refined, timeless look to your setup.
          </div>
          <div class="flex flex-row gap-[20px] w-full">
            <div class="first-button relative w-1/2 md:w-[180px] border-[1px] bg-black overflow-hidden flex flex-row justify-start items-center mt-8">
              <router-link to="/about" class="button-text text-center leading-[140%] min-w-[100px]  text-white w-full md:w-[180px] py-3 uppercase">
                Read More
              </router-link>
              <span class="hidden md:block arrow absolute right-4 transition-opacity duration-300 ease-in-out">
                <img class="arrow-icon w-[20px] h-full" height="100%" width="100%" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" alt="">
              </span>
            </div>
            <div class="first-button relative w-1/2 md:w-[180px] border-[1px] bg-black overflow-hidden flex flex-row justify-start items-center mt-8">
              <router-link to="/404" class="button-text text-center leading-[140%] min-w-[100px] text-white w-full md:w-[180px] py-3 uppercase">
                Enquire Now!
              </router-link>
              <span class="hidden md:block arrow absolute right-4 transition-opacity duration-300 ease-in-out">
                <img class="arrow-icon w-[20px] h-full" height="100%" width="100%" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" alt="">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <badge />
  <commentsection />
  <sub_footer />

</template>



<style scoped>
  body{
    overflow-x: hidden;
    overflow-y: hidden;
  }

@media screen and (min-width: 767px) {
  .first-button {
    transition: width 0.3s ease;
  }

  .arrow {
    opacity: 0;
  }

  .first-button {
    justify-content: center;
    display: flex;
  }

  .first-button:hover {
    width: 210px;
  }

  .first-button:hover .arrow {
    opacity: 1;
  }
}

  @media screen and (max-width: 1024px) {
    .heat-img{
      max-height: 500px;
    }
  }
  @keyframes interval-shake {
    0%, 100% { transform: translateX(0); }
    10% { transform: translateX(-10px); }
    20% { transform: translateX(10px); }
    30% { transform: translateX(-5px); }
    40% { transform: translateX(5px); }
    50% { transform: translateX(0); }
  }

  .animate-interval-shake {
    animation: interval-shake 0.6s ease-in-out infinite;
    animation-delay: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-duration: 4s;
  }
</style>
