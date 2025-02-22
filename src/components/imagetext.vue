<script>
export default {
  name: "imagetext",
};
</script>


<template>
  <div class="image-text-section max-w-[1280px] mx-auto">
    <div class="container my-0 mx-auto" >
      <div class="content-wrapper flex flex-col md:flex-row justify-center md:items-center gap-10">
        <div class="image-container w-1/1 md:w-2/3 px-[10px] overflow-hidden">
          <img 
            src="https://i.ibb.co/tYLpGpW/Screenshot-2024-09-09-at-09-59-54.png" 
            alt="Image for name }}" 
            class="object-center object-cover h-full w-full rounded-md" 
            loading="lazy"
          >
        </div>
        <div class="text-container text-left w-1/1 md:w-1/3 px-[10px]">
          <div class="text-wrapper flex flex-col justify-center">
            <h2 class="text-[32px] font-semibold uppercase">header</h2>
            <div class="subheader wrap mt-[10px]">
               subheader Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam atque, quia perspiciatis iste ex nisi accusamus obcaecati quas optio facilis minus tempora unde assumenda, quo temporibus a, labore eveniet voluptatibus.
            </div>
  
            <a href="/" class="button-container w-full flex flex-row">
              <button class="px-8 py-4 rounded-[4px] {% if block.settings.button_width == 'full' %}w-full{% else %}w-fit{% endif %} md:!w-fit">
               button_label
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

