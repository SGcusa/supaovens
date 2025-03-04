<script>
export default {
  data() {
    return {
      images: [
        "https://cdn.shopify.com/s/files/1/0718/7313/4828/files/461747022_952026406939335_4267264655225207363_n_enhanced-removebg-preview.png?v=1741090935",
        "https://cdn.shopify.com/s/files/1/0718/7313/4828/files/473417469_1174953707334705_4396058158015343406_n_enhanced-removebg-preview.png?v=1741090935",
        "https://cdn.shopify.com/s/files/1/0718/7313/4828/files/470244202_1158317082331701_7680353135610417328_n_enhanced-removebg-preview.png?v=1741090935"
      ],
      currentIndex: 0
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
};
</script>



<template>
  <section>
    <div class="banner max-w-[1280px] mx-auto my-[60px]">
      <div class="slider-container flex overflow-hidden">
        <div class="slider flex transition-transform duration-500" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
          <img v-for="(img, index) in images" :key="index" :src="img" alt="" class="w-full shrink-0">
        </div>
      </div>
      <div class="arrows flex justify-center gap-4 mt-4">
        <button @click="prevSlide" class="p-2 bg-gray-800 text-white rounded">←</button>
        <button @click="nextSlide" class="p-2 bg-gray-800 text-white rounded">→</button>
      </div>
    </div>
  </section>
</template>



<style scoped>
.slider img {
  width: 100%;
  flex: 0 0 100%;
  object-fit: cover;
}

.slider-container {
  width: 100%;
}

.slider {
  display: flex;
  transition: transform 0.5s ease;
}
</style>