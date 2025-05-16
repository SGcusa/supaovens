<template>
  <section>
    <div class="text-center items-center z-10 m-4 ">
      <div class="max-w-[600px] mx-auto">
        <h1 class="flex flex-col justify-center items-center text-[24px] md:text-[60px] leading-[90%] stroke-black gap-[10px]">
          <span class="text-[14px] md:text-[16px] leading-[100%] uppercase pt-[20px] text-left text-[#b1b1b1]">Shop Our Range of Premium</span>
           Ovens Accessories
        </h1>
      </div>
    </div>
    <div class="flex flex-row gap-4 mx-auto pt-[20px] pb-[100px] md:pt-[40px] px-[20px] max-w-[1280px]">
      <router-link 
        to="/products" 
        class="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-black after:transition-all after:duration-300 md:hover:after:w-full">
        Shop Ovens
      </router-link>
    </div>
  </section>

  <section>
    <div class="content-block flex justify-center mb-[60px]">
      <div class="columns-[200px] sm:columns-[280px] lg:columns-[320px] w-full max-w-[1280px] px-[20px]">
        <div v-for="(product, index) in products" :key="index" class="product-card">
          <div href="#" class="w-full block relative overflow-hidden">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" loading="lazy">
          </div>
          <div class="content flex flex-col justify-evenly h-[80px] text-left">
            <div class="card-header text-[20px]">{{ product.name }}</div>
            <!-- <div class="card-content">{{ product.description }}</div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <sub_footer />
</template>

<script>
import sub_footer from '@/components/subscribtion.vue';

export default {
  
  components: {
    sub_footer,
  },
  data() {
    return {
      products: [
        {
          name: 'SupaFlex Triple-Bend Flue Pipe',
          description: 'Maximize airflow with the SupaFlex Triple-Bend Flue Pipe from Supa Ovens.',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.36_3-removebg-preview.png?v=1744792861',
        },
        {
          name: 'SupaSeal Pizza Oven Door',
          description: 'Seal in heat and boost efficiency with our durable Supa Ovens Pizza Oven Door',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.38_1-removebg-preview.png?v=1744792862',
        },
        {
          name: 'SupaTurning Pizza Spade',
          description: 'Easily rotate your pizza like a pro with the Supa Ovens Pizza Turning Shovel.',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.37_2-removebg-preview.png?v=1744792862',
        },
        {
          name: 'SupaRoll Wooden Pizza Dough Roller',
          description: 'Roll out perfect pizza bases with ease using the SupaRoll Wooden Pizza Dough Roller from Supa Ovens',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.32-removebg-preview.png?v=1744792857',
        },
        {
          name: 'SupaBend 45° Oven Flue Elbow',
          description: 'Control your chimney direction with the SupaBend 45° Oven Flue Elbow from Supa Ovens.',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.35_1-removebg-preview.png?v=1744792860',
        },
        {
          name: 'SupaShield Flue Collar Plate',
          description: 'Secure and seal your chimney base with the SupaShield Flue Collar Plate from Supa Ovens.',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.35_3-removebg-preview.png?v=1744792860',
        },
      ],
    };
  },
};
</script>

<style scoped>
.product-card {
  margin-bottom: 20px;
}
</style>
