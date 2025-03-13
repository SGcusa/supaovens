<template>
  <div class="snap-container">
    <section class="snap-section">
      <div class="px-[10vw] z-6 m-4 mx-auto md:pb-[160px]">
        <h1 class="flex flex-col justify-center items-center text-[20px] md:text-[60px] md:leading-[90%] stroke-black fade-in">
          <span class="text-[14px] md:text-[16px] uppercase md:py-[20px] leading-[120%] text-left text-[#b1b1b1]">From a Spark to a Flame</span>
          Supa Ovens started in 2019 as more than just a business — it was a dream fueled by a love for wood-fired pizza. Founded by Simphiwe Bhusa in Strand, Cape Town, our goal has always been simple: to craft quality pizza ovens that bring people together.
        </h1>
      </div>
    </section>
    
    <section class="snap-section">
      <div class="flex flex-row gap-[60px] items-center px-[10vw] z-10 m-4 mx-auto md:pb-[160px] text-start text-[20px] md:text-[40px] md:leading-[90%]">
        <div class="w-1/2">
          <figure class="slide-up">
            <img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/470244202_1158317082331701_7680353135610417328_n_enhanced-removebg-preview.png?v=1741096065" alt="">
          </figure>
        </div>
        <div class="w-1/2">
          <h2 class="slide-up">Our Mission</h2>
          <p class="slide-up mb-[100px] text-[20px]">At Supa Ovens, our mission is simple yet powerful: to bring people together through the art of wood-fired cooking.</p>
        </div>
      </div>
    </section>

    <section class="snap-section">
      <div class="flex flex-row gap-[60px] items-center px-[10vw] z-10 m-4 mx-auto md:pb-[160px] text-start text-[20px] md:text-[40px] md:leading-[90%]">
        <div class="w-1/2">
          <figure class="slide-up">
            <img src="https://cdn.shopify.com/s/files/1/0900/4875/8049/files/470244202_1158317082331701_7680353135610417328_n_enhanced-removebg-preview.png?v=1741096065" alt="">
          </figure>
        </div>
        <div class="w-1/2">
          <h2 class="slide-up">Our Story</h2>
          <p class="slide-up mb-[100px] text-[20px]">What began as a small team with big dreams is now a passionate family of creators.</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
export default {
  mounted() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    const slideUpElements = document.querySelectorAll('.slide-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.3 });

    fadeInElements.forEach((el) => observer.observe(el));
    slideUpElements.forEach((el) => observer.observe(el));
  }
};
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}

.slide-up {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;
}

.slide-up.visible {
  opacity: 1;
  transform: translateY(0);
}

.snap-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
}

.snap-section {
  height: screen;
  scroll-snap-align: start;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>