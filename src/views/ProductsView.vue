<script>
import mediar from '@/components/mediar.vue';

export default {
  components: {
    mediar,
  },
  data() {
    return {
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
    <div class="text-center items-center">
      <div class="px-[3vw] z-10 m-4 max-w-[600px] mx-auto pb-[60px]">
        <h1 class="flex flex-col justify-center items-center text-[40px] md:text-[60px] leading-[90%] stroke-black">
          <span class="text-[16px] leading-[100%] uppercase pt-[20px] text-left text-[#b1b1b1]">Shop Our Range of Premium</span>
           Pizza Ovens
        </h1>
      </div>
    </div>
  </section>
  
  <section>
    <div class=" px-[20px]">
      <div class="carousel-container relative flex flex-col gap-[20px] items-center max-w-[1280px] mx-auto my-[20px] overflow-hidden">
        <button class="absolute carousel-btn prev" @click="movePrev">&#10094;</button>
        <div class="carousel-track flex flex-row overflow-x-scroll" ref="track">
          <div v-for="(item, index) in items" :key="index" :class="['carousel-item', {'middle': index === 2}]">
            <img :src="item.image" :alt="item.text" class="h-full object-cover rounded-lg max-w-[400px]" />
          </div>
        </div>
        <button class="absolute carousel-btn next" @click="moveNext">&#10095;</button>
        <div class="bg-black"><mediar/></div>
      </div>
    </div>
  </section>
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
  border-radius: 10px;
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

.first-button {
  border: 1px solid black !important;
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
</style>
