<template>
  <section>
    <div class="relative flex flex-row text-white text-start items-center max-h-[400px] overflow-hidden">
      <img class="top-0 left-0 w-full h-full object-coverrounded-md" 
        src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/cc1103d7-5868-4165-8583-7b469c2c12cd-2_1.jpg?v=1740816979"
        >
      <div class="absolute px-[3vw] z-10 m-4 max-w-[600px]">
        <h1 class="text-[40px] md:text-[60px] leading-[90%] stroke-white">Shop Our Range of Premium Pizza Ovens</h1>
        <div class="first-button relative sm:w-[180px] border-[1px] bg-white border-white overflow-hidden flex flex-row justify-start items-center mt-8">
          <a class="button-text text-center leading-[140%] min-w-[100px] bg-white text-black  sm:w-[180px] py-3 uppercase"
             href=".button_url">
            Enquire Now!
          </a>
          <span class="arrow absolute right-4 transition-opacity duration-300 ease-in-out">
            <img 
              class="arrow-icon w-[20px] h-full" 
              src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-arrow.png?v=1740996158" 
              width="100%" 
              height="100%" 
              alt="">
          </span>
        </div>
      </div>
    </div>
  </section>

 <section>
  <div class="max-w-[1280px] mx-auto my-[60px]">
    <div class="flex flex-row items-center justify-center gap-[20px]">
      <div class="w-1/3">
        <h4>Home</h4>
        <img class="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/461747022_952026406939335_4267264655225207363_n_enhanced.png?v=1741096066" alt="">
      </div>
      <div class="w-1/3">
        <h4>Commercial</h4>
        <img class="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/473417469_1174953707334705_4396058158015343406_n_enhanced.png?v=1741096067" alt="">
      </div>
      <div class="w-1/3">
        <h4>On-The-Go</h4>
        <img class="w-full h-full object-cover" src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/470244202_1158317082331701_7680353135610417328_n_enhanced.png?v=1741096068" alt="">
      </div>
    </div>
  </div>
 </section> 
</template>



<!-- <script>
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
});
</script> -->





<style scoped>

.round{
  border: 1px solid black;
  border-radius: 10px;
}

.footer-sec{
  border-right: 1px solid rgb(184, 184, 184);
}
.first-button, .WhatsApp-button img {
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
/* .fade-in {
  opacity: 0;
  transition: opacity 1s ease-out;
}

.fade-in.visible {
  opacity: 1;
} */
</style>