<template>
  <section>
    <div class="">
      <div class="px-[10vw] z-10 m-4 mx-auto md:pb-[160px]">
        <h1 class="flex flex-col justify-center items-center text-[20px] md:text-[60px] md:leading-[90%] stroke-black">
          <span class="text-[14px] md:text-[16px] uppercase md:py-[20px] leading-[120%] text-left text-[#b1b1b1]">From a Spark to a Flame</span>
          Supa Ovens started in 2019 as more than just a business — it was a dream fueled by a love for wood-fired pizza. Founded by Simphiwe Bhusa in Strand, Cape Town, our goal has always been simple: to craft quality pizza ovens that bring people together.

          What began as a small team with big dreams is now a passionate family of creators, building ovens that carry our story — and we can’t wait to be part of yours
        </h1>
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
        { 
          picture: 'https://i.ibb.co/5sg34TR/Whats-App-Image-2024-06-20-at-20-39-04.png', 
          header: 'Intelligently Crafted.',
          text: 'The expertly designed Supa Ovens bring together innovation and tradition. Personalize your cooking experience with versatile sizes and premium craftsmanship, turning every bake into a masterpiece.' 
        },
        { 
          picture: 'https://i.ibb.co/r0hsVJj/Whats-App-Image-2024-06-20-at-20-30-16.png', 
          header: 'Performance in Every Bite.',
          text: 'From sizzling backyard gatherings to bustling restaurant kitchens, Supa Ovens deliver flawless heat distribution and wood-fired perfection — because every pizza deserves the perfect cook.' 
        },
        { 
          picture: 'https://i.ibb.co/dksJzTP/Whats-App-Image-2024-06-20-at-20-30-22.png', 
          header: 'Where Design Meets Flavor.',
          text: 'Our pizza ovens blend stylish design with unbeatable performance. Built for both home chefs and professionals, they bring bold flavors and brilliant aesthetics to every cooking space.' 
        },
        { 
          picture: 'https://i.ibb.co/Wnh99YZ/Whats-App-Image-2024-06-20-at-20-39-05-1.png', 
          header: 'Ignite Your Culinary Passion.',
          text: 'Unleash the power of wood-fired cooking with Supa Ovens. Whether it’s a crisp crust or a smoky finish, our ovens turn every meal into an unforgettable experience.' 
        },
        { 
          picture: 'https://i.ibb.co/w4LyX3P/Whats-App-Image-2024-06-20-at-20-39-06-1.png', 
          header: 'Engineered for Excellence.',
          text: 'Supa Ovens offer more than just heat — they deliver precision, consistency, and charm. Designed for those who value both function and flair, each oven takes your pizza game to the next level.' 
        }
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

</style>
