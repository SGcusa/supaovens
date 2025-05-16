<script>
export default {
  name: "Badge",
};
</script>


<template>
  <div class="max-w-[1280px] mx-auto my-[60px] md:my-[100px] px-[20px]">
    <div class="flex flex-col md:flex-row gap-[20px] md:gap-20 justify-start items-start">
      <div class="w-full md:w-4/12 py-[20px] md:py-[60px] flex flex-col justify-between">
        <h1 class="text-[20px] md:text-[40px] text-center md:!text-start leading-[100%]" style="-webkit-text-stroke: 1px black;">Sharp Tools,<br class="hidden md:block"/> Hot Flames —<br class="hidden md:block"/> Perfect Every Slice</h1>
        <p class="hidden md:block text-[20px] uppercase pt-[20px] text-left text-[#b1b1b1]" style="-webkit-text-stroke: 1px #b1b1b1;">Hover To View Item</p>
      </div>
      <div class="w-full md:w-8/12">
        <div class="badges" style="--width: 220px; --height: 220px; --quantity: 7;">
          <div class="badge-list">
            <div style="--position: 1;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.37_2-removebg-preview.png?v=1744792862" alt="Pizza Turning Shovel" class="badges" loading="lazy"></div>
            <div style="--position: 2;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.38_1-removebg-preview.png?v=1744792862" alt="Heat-retaining SupaSeal Pizza Oven Door" class="badges" loading="lazy"></div>
            <div style="--position: 3;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.36_3-removebg-preview.png?v=1744792861" alt="SupaBend 45° Oven Flue Elbow" class="badges" loading="lazy"></div>
            <div style="--position: 4;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.35_3-removebg-preview.png?v=1744792860" alt="SupaShield Flue Collar Plate" class="badges" loading="lazy"></div>
            <div style="--position: 5;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.32-removebg-preview.png?v=1744792857" alt="SupaRoll Wooden Pizza Dough Roller" class="badges" loading="lazy"></div>
            <div style="--position: 6;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.35_1-removebg-preview.png?v=1744792860" alt="SupaFlex Triple-Bend Flue Pipe" class="badges" loading="lazy"></div>
            <div style="--position: 7;" class="badge-icon"><img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.31-removebg-preview.png?v=1744792856" alt="SupaGrip Wall Mount Bracket" class="badges" loading="lazy"></div>
          </div>
        </div>  
      </div>
    </div>
  </div>
</template>



<style scoped>
  .badges {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: 
      linear-gradient(
        to right, 
        transparent, 
        #000 10% 90%, 
        transparent
      )
    ;
  }
  .badges .badge-list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }
  .badge-icon {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 16s linear infinite;
    animation-delay: calc( (16s / var(--quantity)) * (var(--position) - 1) - 8s);
  }
  .badges .badge-list .badge-icon img {
    width: 100%;
    height: 100%;
  }
  @keyframes autoRun {
    from {
        transform: translateX(calc(-100% - var(--width) * var(--quantity)));
    }
    to {
        transform: translateX(100%);
    }
  }
  .badges:hover .badge-icon {
    animation-play-state: paused!important;
  }

@media screen and (max-width: 767px) {
  .badge-icon {
    width: calc(var(--width) - 80px);
    height: calc(var(--height) - 80px);
  }
  .badges {
    width: 100%;
    height: calc(var(--height) - 80px);
  }
}
</style>
