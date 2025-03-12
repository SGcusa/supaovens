<template>
  <section>
    <div class="text-center items-center z-10 m-4 ">
      <div class="max-w-[600px] mx-auto">
        <h1 class="flex flex-col justify-center items-center text-[40px] md:text-[60px] leading-[90%] stroke-black">
          <span class="text-[16px] leading-[100%] uppercase pt-[20px] text-left text-[#b1b1b1]">Shop Our Range of Premium</span>
           Ovens Accessories
        </h1>
      </div>
    </div>
    <div class="flex flex-row gap-4 mx-auto pt-0 pb-[40px] md:pt-[40px] px-[20px] max-w-[1280px]">
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
          <a href="#" class="w-full block relative overflow-hidden">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover" loading="lazy">
          </a>
          <div class="content flex flex-col justify-evenly h-[120px] text-left">
            <div class="card-header text-[20px]">{{ product.name }}</div>
            <div class="card-content">{{ product.description }}</div>
            <div class="card-price"><span class="text-[8px] pr-[4px]">FROM</span>{{ product.price }}</div>
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
          name: 'Pizza Spade',
          description: 'Perfect for sliding pizzas in and out of the oven.',
          price: 'R200',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.37_2_b11b7ef1-ecb6-4fdd-a446-12e5f8aee07e.jpg?v=1741682181',
        },
        {
          name: 'Oven Door',
          description: 'Keep your oven hot and cooking efficiently.',
          price: 'R250',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.35_3.jpg?v=1741610293',
        },
        {
          name: 'Protection Gloves',
          description: 'Protect your hands from the heat.',
          price: 'R150',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.33.jpg?v=1741681958',
        },
        {
          name: 'Protection Gloves',
          description: 'Protect your hands from the heat.',
          price: 'R150',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.33.jpg?v=1741681958',
        },
        {
          name: 'Protection Gloves',
          description: 'Protect your hands from the heat.',
          price: 'R150',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.33.jpg?v=1741681958',
        },
        {
          name: 'Protection Gloves',
          description: 'Protect your hands from the heat.',
          price: 'R150',
          image: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/WhatsApp_Image_2025-03-10_at_14.33.33.jpg?v=1741681958',
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
