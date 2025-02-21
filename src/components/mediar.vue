<script>
export default {
  name: "mediar",
};
</script>

<template>
  <div class="secvices-section mx-auto max-w-[1280px] my-[40px] ">
      <!-- <div class="header-block my-8 flex flex-col justify-between items-start pl-[20px]">
        <div class="header leading-[100%] uppercase text-start text-[40px]">
          <span class="text-[16px] leading-[40%] text-[#999]">HOW TO</span>  
          <h1>USE YOU OVEN</h1>  
        </div>
      </div> -->
    <div class="services-container flex flex-row xl:justify-center items-center gap-[20px] overflow-x-scroll px-6">
        <div class="card-block text-start w-2/2 md:w-full hover:text-white bg-cover bg-[#f4f4f4] p-4 sm:px-6 sm:py-4 min-w-[200px] sm:min-w-[260px] min-h-[200px] sm:min-h-[240px] flex flex-col justify-between"
             style="background-image: none;"
             onmouseover="this.style.backgroundImage = url('https://i.ibb.co/MVQCwwK/Screenshot-2024-09-09-at-10-08-57.png');"
             onmouseout="this.style.backgroundImage = 'none';">
          <div class="card-header text-[20px] sm:text-[24px] leading-[140%] mt-4">
            <span class="text-[16px] leading-[40%] text-[#999]">Day 1</span>  
            <h1>After Installation</h1>
          </div>
          <div class="card-text text-[12px] sm:text-[14px] leading-[120%] py-2 sm:pb-5">
            After installation, a client is required to wait a maximum of 7 days for a dry out
          </div>
        </div>
        <div class="card-block text-start w-2/2 md:w-full hover:text-white bg-cover bg-[#f4f4f4] p-4 sm:px-6 sm:py-4 min-w-[200px] sm:min-w-[260px] min-h-[200px] sm:min-h-[240px] flex flex-col justify-between"
             style="background-image: none;"
             onmouseover="this.style.backgroundImage = 'url(https://i.ibb.co/MVQCwwK/Screenshot-2024-09-09-at-10-08-57.png)';"
             onmouseout="this.style.backgroundImage = 'none';">
          <div class="card-header text-[20px] sm:text-[24px] leading-[140%] mt-4">
            Day 7 - Preheat process
          </div>
          <div class="card-text text-[12px] sm:text-[14px] leading-[120%] py-2 sm:pb-5">
            then the client can begin to do curing, burning a maximum of 4 blocks of wood at the centre of the oven, let it burn for 3 HT hours for 7 days.
          </div>
        </div>
        <div class="card-block text-start w-2/2 md:w-full hover:text-white bg-cover bg-[#f4f4f4] p-4 sm:px-6 sm:py-4 min-w-[200px] sm:min-w-[260px] min-h-[200px] sm:min-h-[240px] flex flex-col justify-between"
             style="background-image: none;"
             onmouseover="this.style.backgroundImage = 'url(https://i.ibb.co/MVQCwwK/Screenshot-2024-09-09-at-10-08-57.png)';"
             onmouseout="this.style.backgroundImage = 'none';">
          <div class="card-header text-[20px] sm:text-[24px] leading-[140%] mt-4">
            Day 14 - Ready for use
          </div>
          <div class="card-text text-[12px] sm:text-[14px] leading-[120%] py-2 sm:pb-5">
            After 14 days, the client can begin to use the oven for cooking.
          </div>
        </div>
    </div>  
  </div>
</template>

