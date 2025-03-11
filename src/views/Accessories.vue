<template>
  <section>
    <div class="products-section">
      <div class="products-container my-10">
        <div class="text-center items-center">
          <div class="px-[3vw] z-10 m-4 max-w-[600px] mx-auto pb-[60px]">
            <h1 class="flex flex-col justify-center items-center text-[40px] md:text-[60px] leading-[90%] stroke-black">
              <span class="text-[16px] leading-[100%] uppercase pt-[20px] text-left text-[#b1b1b1]">Shop Our Range of Premium</span>
              Oven Accessories
            </h1>
          </div>
        </div>
        <div class="content-block flex justify-center py-4">
          <div class="product-card w-[1300px] grid grid-cols-4 grid-rows-1 gap-4">
            <div class="flex flex-col columns-[400px]">
              <div class="image">
                <a href="w-full relative overflow-hidden">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0718/7313/4828/files/WhatsApp_Image_2025-03-10_at_14.33.31_1.jpg?v=1741610293" 
                    alt=""
                    class="w-full h-full object-cover"
                    loading="lazy"
                  >
                </a>
              </div>
              <div class="content flex flex-col justify-evenly h-[180px]">
                <div class="card-header text-[20px]">Aromatherapy Massage Oil</div>
                <div class="card-content">Essential oils blended for relaxation, stress relief, or energy.</div>
                <div class="card-price"><span class="text-[8px] pr-[4px]">FROM</span>R200</div>
              </div>
            </div>
            <div class="flex flex-col columns-[400px]">
              <div class="image">
                <a href="w-full relative overflow-hidden">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0718/7313/4828/files/WhatsApp_Image_2025-03-10_at_14.33.38.jpg?v=1741610293" 
                    alt=""
                    class="w-full h-full object-cover"
                    loading="lazy"
                  >
                </a>
              </div>
              <div class="content flex flex-col justify-evenly h-[180px]">
                <div class="card-header text-[20px]">Pizza Spade</div>
                <div class="card-content">Essential oils blended for relaxation, stress relief, or energy.</div>
                <div class="card-price"><span class="text-[8px] pr-[4px]">FROM</span>R200</div>
              </div>
            </div>
            <div class="flex flex-col columns-[400px]">
              <div class="image">
                <a href="w-full relative overflow-hidden">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0718/7313/4828/files/WhatsApp_Image_2025-03-10_at_14.33.35_3.jpg?v=1741610293" 
                    alt=""
                    class="w-full h-full object-cover"
                    loading="lazy"
                  >
                </a>
              </div>
              <div class="content flex flex-col justify-evenly h-[180px]">
                <div class="card-header text-[20px]">Aromatherapy Massage Oil</div>
                <div class="card-content">Essential oils blended for relaxation, stress relief, or energy.</div>
                <div class="card-price"><span class="text-[8px] pr-[4px]">FROM</span>R200</div>
              </div>
            </div>
            <div class="flex flex-col columns-[400px]">
              <div class="image">
                <a href="w-full relative overflow-hidden">
                  <img 
                    src="https://cdn.shopify.com/s/files/1/0718/7313/4828/files/WhatsApp_Image_2025-03-10_at_14.33.38_1.jpg?v=1741610294" 
                    alt=""
                    class="w-full h-full object-cover"
                    loading="lazy"
                  >
                </a>
              </div>
              <div class="content flex flex-col justify-evenly h-[180px]">
                <div class="card-header text-[20px]">Aromatherapy Massage Oil</div>
                <div class="card-content">Essential oils blended for relaxation, stress relief, or energy.</div>
                <div class="card-price"><span class="text-[8px] pr-[4px]">FROM</span>R200</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
  elements.forEach(element => {
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      element.classList.add('visible');
    }
  });
});
</script>


<style scoped>

</style>