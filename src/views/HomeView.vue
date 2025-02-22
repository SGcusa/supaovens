<script>
import gallery from '@/components/gallery.vue';
import sub_footer from '@/components/subscribtion.vue';
import banner from '@/components/banner.vue';
import bannerad from '@/components/bannerad.vue';

export default {
  components: {
    gallery,
    sub_footer,
    banner,
    bannerad,
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
      <div class="absolute z-10 m-4">
        <h1 class="px-[3vw] text-[40px] lg:text-[60px] xl:text-[80px] leading-[90%] stroke-white" style="-webkit-text-stroke: 2px white;">SUPA<br/> OVENS</h1>
    </div>
  </div>


  <div class="flex flex-col justify-center items-center z-10 my-0 mx-auto pl-[200px]">
    <h1 class="py-[4vw] max-w-[500px] text-[40px] text-left">We deliver nationwide,<br/> Get your pizza oven delivered to your door step</h1>
 </div>
  </section>
  
  <banner />
  <bannerad />
  <gallery />

  
  <sub_footer />

</template>


<style scoped>
body{
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>
