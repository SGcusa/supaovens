<script>
export default {
  name: "mediar",
};
</script>

<template>
    <div class="banner-section w-full h-[600px] md:h-[600px] lg:h-[900px] bg-cover relative flex flex-col"
        style="background-image: url('')">
    
      <div class="content-wrapper absolute bg-[#000] opacity-[0.65] h-4/4 sm:h-3/4 md:h-full md:w-1/2 bottom-0 md:top-0 left-0 pt-[20px] md:pt-0 flex flex-col md:justify-center">
          <div class="px-4 md:px-12 lg:px-20 min-h-[360px] flex flex-col justify-around">
            <div class="header-wrapper overflow-x-clip">
              <h1 class="text-[50px] lg:text-[100px] uppercase leading-[120%]  md:py-8 py-0"
                  style="color: 
                  text_color;">
                  header
              </h1>
            </div>
            <div class="text-wrapper text-justify text-[16px] lg:text-[18px]"
                 style="color: red;">
                 subheader
            </div>
            <div class="button-section sm:mt-10 flex flex-row gap-4 md:gap-6">
              <div class="btn-1 w-1/2">
                <div class="w-full h-full flex flex-row text-center sm:px-4 p-2 sm:py-4 bg-white bg-opacity-80 mx-auto">
                  <a class="text-[12px] sm:text-[16px] w-full uppercase leading-[100%]" href="">
                    MAKE RESERVATION  
                  </a>
                </div>
              </div>
              <div class="btn-2 w-1/2">
                <div class="w-full h-full flex flex-row items-center text-center sm:px-4 p-2 sm:py-4 bg-white bg-opacity-80 m-auto">
                  <a class="text-[12px] sm:text-[16px] w-full uppercase leading-[100%]" href="">
                    OUR TREATMENTS  
                  </a>
                </div>
              </div>
            </div>  
          </div>
      </div>
    </div>
</template>
