<script>
export default {
  name: "Badge",
};
</script>


<template>
  <div class="max-w-[1280px] mx-auto my-[100px] px-[20px]">
    <div class="flex flex-row gap-20 justify-start items-start">
      <div class="w-full md:w-4/12 py-[60px] flex flex-col justify-between">
        <h1 class="text-[40px] md:text-[40px] text-start leading-[100%]" style="-webkit-text-stroke: 1px black;">Sharp Tools,<br/> Hot Flames —<br/> Perfect Every Slice</h1>
        <p class="text-[20px] uppercase pt-[20px] text-left text-[#b1b1b1]" style="-webkit-text-stroke: 1px #b1b1b1;">Hover To View Item</p>
      </div>
      <div class="w-full md:w-8/12">
        <div class="badges" style="--width: 220px; --height: 220px; --quantity: 5;">
          <div class="badge-list">
            <div style="--position: 1;" class="badge-icon"><img src="https://i.ibb.co/D71YdL9/Screenshot-2024-09-06-at-12-04-33.png" alt="icon" class="badges" loading="lazy"></div>
            <div style="--position: 2;" class="badge-icon"><img src="https://i.ibb.co/tYLpGpW/Screenshot-2024-09-09-at-09-59-54.png" alt="icon" class="badges" loading="lazy"></div>
            <div style="--position: 3;" class="badge-icon"><img src="https://i.ibb.co/gg15DgF/Screenshot-2024-09-09-at-10-02-07.png" alt="icon" class="badges" loading="lazy"></div>
            <div style="--position: 4;" class="badge-icon"><img src="https://i.ibb.co/LZmLPy0/Screenshot-2024-09-09-at-10-04-07.png" alt="icon" class="badges" loading="lazy"></div>
            <div style="--position: 5;" class="badge-icon"><img src="https://i.ibb.co/tPZxyLN/Screenshot-2024-09-09-at-10-07-45.png" alt="icon" class="badges" loading="lazy"></div>
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
</style>
