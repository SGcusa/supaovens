<template>
  <section>
    <div class="">
      <div class="px-[10vw] z-10 m-4 mx-auto md:pb-[160px]">
        <h1 class="flex flex-col justify-center items-center text-[20px] md:text-[60px] leading-[90%] stroke-black">
          <span class="text-[12px] md:text-[16px] uppercase md:py-[20px] leading-[120%] text-left text-[#b1b1b1]">From a Spark to a Flame</span>
          Supa Ovens started in 2019 as more than just a business — it was a dream fueled by a love for wood-fired pizza. Founded by Simphiwe Bhusa in Strand, Cape Town, our goal has always been simple: to craft quality pizza ovens that bring people together.

          What began as a small team with big dreams is now a passionate family of creators, building ovens that carry our story — and we can’t wait to be part of yours
        </h1>
      </div>
    </div>
  </section>

  <section>
    <div class="p-[20px] bg-black">
      <div class="carousel-container max-w-[1280px] md:max-h-[700px] h-full w-full relative flex flex-col md:flex-row gap-[20px] items-end mx-auto  overflow-hidden">
        <div class="w-full md:w-5/12 flex flex-col md:items-start justify-start gap-4 md:gap-14">
          <h3 class="md:absolute md:top-0 md:py-[20px] py-[10px] text-center text-white text-[20px] md:text-[48px]">Why Supa Ovens?</h3>
          <div class="carousel-item-text text-white md:text-start lg:pr-[80px]">{{ items[currentIndex].text }}</div>
          <div class="flex flex-row md:justify-start justify-center gap-4">
            <button class="carousel-btn prev" @click="movePrev">&#10094; Prev</button>
            <button class="carousel-btn next" @click="moveNext">Next &#10095;</button>
          </div>
        </div>
        <div class="w-full md:w-7/12 flex justify-center items-center md:pl-[80px]">
          <img :src="items[currentIndex].image" :alt="items[currentIndex].text" class="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        { image: 'https://i.ibb.co/5sg34TR/Whats-App-Image-2024-06-20-at-20-39-04.png', text: 'The expertly designed Supa Ovens bring together innovation and tradition. Personalize your cooking experience with versatile sizes and premium craftsmanship, turning every bake into a masterpiece.' },
        { image: 'https://i.ibb.co/r0hsVJj/Whats-App-Image-2024-06-20-at-20-30-16.png', text: 'From sizzling backyard gatherings to bustling restaurant kitchens, Supa Ovens deliver flawless heat distribution and wood-fired perfection — because every pizza deserves the perfect cook.' },
        { image: 'https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png', text: 'Our pizza ovens blend stylish design with unbeatable performance. Built for both home chefs and professionals, they bring bold flavors and brilliant aesthetics to every cooking space.' },
        { image: 'https://i.ibb.co/Wnh99YZ/Whats-App-Image-2024-06-20-at-20-39-05-1.png', text: 'Unleash the power of wood-fired cooking with Supa Ovens. Whether it’s a crisp crust or a smoky finish, our ovens turn every meal into an unforgettable experience.' },
        { image: 'https://i.ibb.co/w4LyX3P/Whats-App-Image-2024-06-20-at-20-39-06-1.png', text: 'Supa Ovens offer more than just heat — they deliver precision, consistency, and charm. Designed for those who value both function and flair, each oven takes your pizza game to the next level.' }
      ],
    };
  },
  methods: {
    moveNext() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    movePrev() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
};
</script>

<style scoped>
.carousel-btn {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.carousel-btn:hover {
  background-color: #555;
}
</style>
