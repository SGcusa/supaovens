<script>
import gallery from '@/components/gallery.vue';
import sub_footer from '@/components/subscribtion.vue';
import banner from '@/components/banner.vue';
import bannerad from '@/components/bannerad.vue';
import commentsection from '@/components/comment-section.vue';

export default {
  components: {
    gallery,
    sub_footer,
    banner,
    bannerad,
    commentsection,
  },
};
</script>



<template>
  <section>
    <div class="relative flex flex-row text-white text-start items-center max-h-[600px] overflow-hidden px-[20px] HTYO">
      <video autoplay muted loop class="top-0 left-0 w-full h-full object-cover">
        <source class="!rounded-md" src="https://i.imgur.com/SOZINP0.mp4" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <div class="absolute px-[3vw] z-10 m-4">
        <h1 class="text-[40px] md:text-[60px] lg:text-[80px] leading-[90%] stroke-white" style="-webkit-text-stroke: 2px white;">SUPA<br/> OVENS</h1>
        <div class="first-button relative sm:w-[180px] border-[1px] border-white overflow-hidden flex flex-row justify-start items-center mt-8">
          <a class="button-text text-center leading-[140%] min-w-[100px] bg-transparent text-white  sm:w-[180px] py-3 uppercase"
             href=".button_url">
            Enquire Now!
          </a>
          <span class="arrow absolute right-4 transition-opacity duration-300 ease-in-out">
            <img class="arrow-icon w-[20px] h-full" height="100%" width="100%" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" alt="">
          </span>
        </div>
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
    <div class="max-w-[1280px] mx-auto my-[60px] px-[20px]">
      <h1 class="text-[40px] md:text-[40px] text-center leading-[90%] py-[60px]" style="-webkit-text-stroke: 1px black;">Bring The Heat - With Confidence</h1>
      <div class="flex flex-col lg:flex-row lg:gap-[60px] mt-[80px]">
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
          <div class="flex flex-row gap-[20px]">
            <div class="first-button relative sm:w-[180px] border-[1px] bg-black overflow-hidden flex flex-row justify-start items-center mt-8">
              <a class="button-text text-center leading-[140%] min-w-[100px]  text-white  sm:w-[180px] py-3 uppercase"
                href=".button_url">
                Read More
              </a>
              <span class="arrow absolute right-4 transition-opacity duration-300 ease-in-out">
                <img class="arrow-icon w-[20px] h-full" height="100%" width="100%" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" alt="">
              </span>
            </div>
            <div class="first-button relative sm:w-[180px] border-[1px] bg-black overflow-hidden flex flex-row justify-start items-center mt-8">
              <a class="button-text text-center leading-[140%] min-w-[100px]  text-white  sm:w-[180px] py-3 uppercase"
                href=".button_url">
                Enquire Now!
              </a>
              <span class="arrow absolute right-4 transition-opacity duration-300 ease-in-out">
                <img class="arrow-icon w-[20px] h-full" height="100%" width="100%" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" alt="">
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <commentsection />
  <sub_footer />

</template>


<style scoped>
  body{
    overflow-x: hidden;
    overflow-y: hidden;
  }
  .first-button {
    transition: width 0.3s ease;
  }

  .arrow {
    opacity: 0;
  }

  .first-button:hover {
    width: 210px;
  }

  .first-button:hover .arrow {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    .heat-img{
      max-height: 500px;
    }
  }
</style>
