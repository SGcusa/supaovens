<script>
export default {
  name: "banner",
};
</script>



<template>
  <div class="max-w-[1280px] flex flex-col md:flex-row gap-[20px] px-[20px] mx-auto my-0">
    <router-link to="/products" class="card-block relative flex justify-center w-full md:w-1/2 columns-[400px] flex-row text-white items-end overflow-hidden">
      <img
        class="w-full h-full object-cover" 
        src="https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png" 
        alt="mp4"
      >
      <div class="absolute z-10 card-title text-center w-full min-h-[100px] mx-auto flex items-center justify-center">
        <h1 class="text-[24px] md:text-[32px] leading-[90%]">Shop Ovens</h1>
        <span class="hidden md:block card-arrow pl-[14px] pt-[6px]">
          <img 
            src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" 
            class="arrow-icon w-[20px]" 
            height="100%" 
            width="100%" 
            alt="">
        </span>
      </div>
    </router-link>
    <router-link to="/accessories" class="card-block relative flex justify-center w-full md:w-1/2 columns-[400px] flex-row text-white items-end overflow-hidden">
      <img
        class="w-full h-full object-cover" 
        src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/Screenshot_2025-02-21_at_18.56.48.png?v=1740226650" 
        alt="mp4"
      >
      <div class="absolute z-10 card-title text-center w-full min-h-[100px] mx-auto flex items-center justify-center">
        <h1 class="text-[24px] md:text-[32px] leading-[90%]">Shop Accessories</h1>
        <span class="hidden md:block card-arrow pl-[14px] pt-[6px]">
          <img 
            src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159" 
            class="arrow-icon w-[20px]" 
            height="100%" 
            width="100%" 
            alt=""
          >
        </span>
      </div>
    </router-link>
  </div>
</template>


<style>
  .card-title {
    background: linear-gradient(to top, rgb(42, 42, 42) 30%, transparent 100%);
  }
  .card-arrow{
    opacity: 0;
    transition: opacity 0.3s ease;
  }

@media screen and (min-width: 767px) {
  .card-block:hover .card-title{
    padding-right: 10px;
    background: linear-gradient(to top, rgb(42, 42, 42) 40%, transparent 100%);
  }
  .card-block:hover .card-arrow{
    opacity: 1;
  }
}
</style>
