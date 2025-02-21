<script>
export default {
  name: "gallery",
};
</script>

<template>
  <div class="flex-grid-section flex flex-col justify-center items-center ">
    <div class="header text-center mb-10 px-[20px]">
      <h1 class=" text-[32px] sm:text-[40px] my-3">text</h1>
      <div class="subtext max-w-[800px]">
        <div class="text-[12px] sm:text-[16px]">subtext</div>
      </div>
    </div>

    <div class="hidden md:block list w-full px-[20px] my-0 mx-auto max-w-[1280px]">
        <img src="https://i.ibb.co/Wnh99YZ/Whats-App-Image-2024-06-20-at-20-39-05-1.png" alt="Gallery Image">
        <img src="https://i.ibb.co/5sg34TR/Whats-App-Image-2024-06-20-at-20-39-04.png" alt="Gallery Image">
        <img src="https://i.ibb.co/w4LyX3P/Whats-App-Image-2024-06-20-at-20-39-06-1.png" alt="Gallery Image">
        <img src="https://i.ibb.co/r0hsVJj/Whats-App-Image-2024-06-20-at-20-30-16.png" alt="Gallery Image">
        <img src="https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png" alt="Gallery Image">
        <img src="https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png" alt="Gallery Image">
        <img src="https://i.ibb.co/C1ghFjv/Whats-App-Image-2024-06-20-at-20-30-11.png" alt="Gallery Image" >
      </div>
  </div>
</template>

<style>

  .list {
    columns: 320px;
  }
  .list img {
    padding-bottom: 20px;
  }
</style>
