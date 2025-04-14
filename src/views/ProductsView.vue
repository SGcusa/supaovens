<script>
import mediar from '@/components/mediar.vue';
import sub_footer from '@/components/subscribtion.vue';


export default {
  
  components: {
    mediar,
    sub_footer,
  },
  data() {
    return {
      currentIndex: 0,
      carouselItems: [
        { 
          picture: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/470215450_1158317448998331_6934975351814482433_n_enhanced.png?v=1742908184', 
          picture2: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/470215450_1158317448998331_6934975351814482433_n_enhanced_1.png?v=1742908184', 
          header: 'Intelligently Crafted.',
          text: 'The expertly designed Supa Ovens bring together innovation and tradition. Personalize your cooking experience with versatile sizes and premium craftsmanship, turning every bake into a masterpiece.' 
        },
        { 
          picture: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/468449497_1143993643764045_7061827701529264989_n_enhanced.png?v=1742908184', 
          picture2: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/468449497_1143993643764045_7061827701529264989_n_enhanced_1.png?v=1742908184', 
          header: 'Performance in Every Bite.',
          text: 'From sizzling backyard gatherings to bustling restaurant kitchens, Supa Ovens deliver flawless heat distribution and wood-fired perfection — because every pizza deserves the perfect cook.' 
        },
        { 
          picture: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/461747022_952026406939335_4267264655225207363_n_enhanced_e15254f6-755f-4369-83cc-3722cc761a6b.png?v=1742908184', 
          picture2: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/461747022_952026406939335_4267264655225207363_n_enhanced_1.png?v=1742908184', 
          header: 'Where Design Meets Flavor.',
          text: 'Our pizza ovens blend stylish design with unbeatable performance. Built for both home chefs and professionals, they bring bold flavors and brilliant aesthetics to every cooking space.' 
        },
        { 
          picture: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/473417469_1174953707334705_4396058158015343406_n_enhanced_33781fbb-3d62-4553-a844-b03b86734143.png?v=1742908184', 
          picture2: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/473417469_1174953707334705_4396058158015343406_n_enhanced_1.png?v=1742908184', 
          header: 'Ignite Your Culinary Passion.',
          text: 'Unleash the power of wood-fired cooking with Supa Ovens. Whether it’s a crisp crust or a smoky finish, our ovens turn every meal into an unforgettable experience.' 
        },
        { 
          picture: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/468503932_1144013700428706_6703190742923299966_n_enhanced_9d3906de-755c-459c-9324-b36a0d12fcd9.png?v=1742908184', 
          picture2: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/468503932_1144013700428706_6703190742923299966_n_enhanced_1.png?v=1742908184', 
          header: 'Engineered for Excellence.',
          text: 'Supa Ovens offer more than just heat — they deliver precision, consistency, and charm. Designed for those who value both function and flair, each oven takes your pizza game to the next level.' 
        }
      ],
      items: [
        { image: 'https://i.ibb.co/5sg34TR/Whats-App-Image-2024-06-20-at-20-39-04.png'},
        { image: 'https://i.ibb.co/r0hsVJj/Whats-App-Image-2024-06-20-at-20-30-16.png'},
        { image: 'https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png'},
        { image: 'https://i.ibb.co/Wnh99YZ/Whats-App-Image-2024-06-20-at-20-39-05-1.png'},
        { image: 'https://i.ibb.co/w4LyX3P/Whats-App-Image-2024-06-20-at-20-39-06-1.png'},
        { image: 'https://i.ibb.co/C1ghFjv/Whats-App-Image-2024-06-20-at-20-30-11.png'},
        { image: 'https://i.ibb.co/4SW4hk5/cc1103d7-5868-4165-8583-7b469c2c12cd-1.jpg'}
      ],
    };
  },
  methods: {
    moveNexxt() {
      this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
    },
    movePrevv() {
      this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
    },
    moveNext() {
      const track = this.$refs.track;
      if (track) {
        track.appendChild(track.firstElementChild);
      }
    },
    movePrev() {
      const track = this.$refs.track;
      if (track) {
        track.prepend(track.lastElementChild);
      }
    },
    autoSlide() {
      setInterval(() => {
        this.moveNext();
      }, 20000);
    }
  },
  mounted() {
    this.autoSlide();
  }
};
</script>



<template>
  <section>
    <div class="text-center items-center z-10 m-4 ">
      <div class="max-w-[600px] mx-auto">
        <h1 class="flex flex-col justify-center items-center text-[40px] md:text-[60px] leading-[90%] stroke-black">
          <span class="text-[16px] leading-[100%] uppercase pt-[20px] text-left text-[#b1b1b1]">Shop Our Range of Premium</span>
           Supa Ovens
        </h1>
      </div>
    </div>
    <div class="flex flex-row gap-4 mx-auto pt-0 pb-[40px] md:pt-[40px] px-[20px] max-w-[1280px]">
      <router-link 
        to="/accessories" 
        class="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 md:hover:after:w-full">
        Shop Accessories
      </router-link>
    </div>
  </section>
  
  <section>
    <div class="px-[20px]">
      <div class="carousel-container relative flex flex-col gap-[20px] items-center max-w-[1280px] min-h-[400px] mx-auto mb-[20px] overflow-hidden">
        <button class="absolute carousel-btn prev" @click="movePrev">&#10094;</button>
        <div class="carousel-track flex flex-row" ref="track">
          <div v-for="(item, index) in items" :key="index" :class="['carousel-item', {'middle': index === 2}]">
            <img :src="item.image" :alt="item.text" class="h-full object-cover max-w-[400px]" loading="lazy" />
          </div>
        </div>
        <button class="absolute carousel-btn next" @click="moveNext">&#10095;</button>
      </div>
    </div>
  </section>
  <div class="flex flex-row items-center justify-center"><mediar class="bg-black"/></div>
  
  <section>
    <div class="secvices-section mx-auto max-w-[1280px] my-[60px] md:my-[120px] px-[20px]">
      <div class="services-container flex flex-row xl:justify-center gap-[10px] md:gap-[24px] min-h-[180px] overflow-x-scroll">
        <div class="card-block relative text-start md:w-full bg-cover bg-[#f4f4f4] p-[20px] min-w-[200px] lg:h-[140px] md:h-[200px] flex flex-col lg:flex-row lg:items-end gap-[10px]">
          <div class="text-[20px] sm:text-[24px] leading-[140%]">
            <span class="text-[12px] md:text-[16px] leading-[40%] text-[#999]">Day 1</span>  
            <h4 class="text-[20px] md:text-[24px]">After Installation</h4>
          </div>
          <div class="card-text lg:relative text-[14px] sm:text-[14px] leading-[120%] pl-[20px]">
            After installation, a client is required to wait a maximum of 7 days for a dry out.
          </div>
        </div>
        <div class="card-block relative text-start md:w-full bg-cover bg-[#f4f4f4] p-[20px] min-w-[200px] lg:h-[140px] md:h-[200px] flex flex-col lg:flex-row lg:items-end gap-[10px]">
          <div class="text-[20px] sm:text-[24px] leading-[140%]">
            <span class="text-[12px] md:text-[16px] leading-[40%] text-[#999]">Day 7</span>  
            <h4 class="text-[20px] md:text-[24px]">Preheat process</h4>
          </div>
          <div class="card-text lg:relative text-[14px] sm:text-[14px] leading-[120%] pl-[20px]">
            then the client can begin to do curing, burning a maximum of 4 blocks of wood at the centre of the oven, let it burn for 3 HT hours for 7 days.
          </div>
        </div>
        <div class="card-block relative text-start md:w-full bg-cover bg-[#f4f4f4] p-[20px] min-w-[200px] lg:h-[140px] md:h-[200px] flex flex-col lg:flex-row lg:items-end gap-[10px]">
          <div class="text-[20px] sm:text-[24px] leading-[140%]">
            <span class="text-[12px] md:text-[16px] leading-[40%] text-[#999]">Day 14</span>  
            <h4 class="text-[20px] md:text-[24px]">Ready for-use</h4>
          </div>
          <div class="card-text lg:relative text-[14px] sm:text-[14px] leading-[120%] pl-[20px]">
            After 14 days, the client can begin to use the oven for cooking.
          </div>
        </div>
      </div>  
    </div>
  </section>

  <section>
      <div class="carousel-container max-w-[1280px] md:max-h-[700px] h-full w-full relative flex flex-col md:flex-row gap-[20px] items-end mx-auto pb-[60px] md:pb-[120px] overflow-hidden">
        <div class="w-full md:w-5/12 flex flex-col md:items-start justify-start gap-4 md:gap-14 md:pl-[40px]">
          <h3 class="md:absolute md:top-0 md:py-[20px] py-[10px] text-center text-[20px] md:text-[48px]">Why Supa Ovens?</h3>
          <div class="md:hidden w-full md:w-7/12 flex justify-center max-h-[400px] py-[10px] items-center md:pl-[60px] lg:pl-[80px] overflow-hidden">
            <img :src="carouselItems[currentIndex].picture" alt="" class="h-full md:w-full object-cover" loading="lazy" />
          </div>
          <div class="carousel-item-text text-[20px] md:text-start lg:pr-[80px]">{{ carouselItems[currentIndex].header }}</div>
          <div class="carousel-item-text md:text-start lg:pr-[80px] px-[20px] md:px-0">{{ carouselItems[currentIndex].text }}</div>
          <div class="flex flex-row md:justify-start justify-center gap-4">
            <button class="carousel-button prev" @click="movePrevv">&#10094; Prev</button>
            <button class="carousel-button next" @click="moveNexxt">Next &#10095;</button>
          </div>
        </div>
        <div class="hidden w-full md:w-7/12 md:flex justify-center items-center overflow-hidden">
          <img :src="carouselItems[currentIndex].picture2" alt="" class="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
  </section>

  <sub_footer/>
</template>



<style scoped>
.carousel-track {
  transition: transform 0.5s ease-in-out;
}
.carousel-item {
  margin: 10px;
  flex-direction: column;
  opacity: 0.4;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  transition: all 0.3s ease-in-out;
}
.carousel-item:nth-child(4)  {
  height: 360px;
  width: 360px;
  opacity: 1;
}
.carousel-item:nth-child(4) img {
  height: 360px;
  width: 360px;
  opacity: 1;
}
.carousel-text{
  display: none;
}
.carousel-btn {
  position: absolute;
  top: 100px;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  z-index: 10;
}
.carousel-btn.prev {
  left: 0px;
}
.carousel-btn.next {
  right: 0px;
}

@media screen and (min-width: 767px) {
  .first-button {
    transition: width 0.3s ease;
  }

  .arrow {
    opacity: 0;
  }

  .first-button {
    justify-content: center;
    display: flex;
  }

  .first-button:hover {
    width: 210px;
  }

  .first-button:hover .arrow {
    opacity: 1;
  }
}



.carousel-button {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}
.carousel-button:hover {
  background-color: #555;
}

.arrow {
  opacity: 0;
}
  
.card-block:hover .arrow {
  opacity: 1;
  transition: width 1.6s ease;
}
</style>
