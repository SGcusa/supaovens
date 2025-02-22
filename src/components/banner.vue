<script>
export default {
  name: "banner",
};
</script>



<template>
  <div class="max-w-[1280px] flex flex-col md:flex-row gap-[20px] px-[20px] mx-auto my-0">
    <div class="relative flex w-full md:w-1/2 columns-[400px] flex-row text-white items-end overflow-hidden">
      <img
        class="w-full h-full object-cover" 
        src="https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png" 
        alt="mp4"
      > 
      <div class="absolute z-10 card-title w-full py-[40px] px-[20px]">
        <h1 class="text-start text-[24px] md:text-[32px] leading-[90%]">Shop Ovens</h1>
      </div>
    </div>
    <div class="relative flex w-full md:w-1/2 columns-[400px] flex-row text-white items-end overflow-hidden">
      <img
        class="w-full h-full object-cover" 
        src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/Screenshot_2025-02-21_at_18.56.48.png?v=1740226650" 
        alt="mp4"
      >
      <div class="absolute z-10 card-title w-full py-[40px] px-[20px]">
        <h1 class="text-start text-[24px] md:text-[32px] leading-[90%]">Shop Accessories</h1>
      </div>
    </div>
  </div>
</template>


<style>
  .card-title {
    background: linear-gradient(to top, rgb(42, 42, 42) 30%, transparent 100%);
  }
</style>
