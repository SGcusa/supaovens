<template>
  <section>
    <div 
      v-if="!showForm" 
      @click="showForm = true" 
      :class="['first-button relative md:w-[180px] overflow-hidden flex flex-row justify-start items-center', borderClass]"
      :style="{ backgroundColor: backgroundColor }"
    >
      <a 
        :class="['button-text text-[14px] md:text-[16px] text-center leading-[140%] min-w-[100px] md:w-[180px] md:p-3 p-[10px] uppercase w-[135px]', textColorClass]"
      >
        {{ buttonText }}
      </a>
      <span class="hidden md:block arrow absolute right-4 transition-opacity duration-300 ease-in-out">
        <img 
          class="arrow-icon w-[20px] h-full" 
          height="100%" 
          width="100%" 
          :src="arrowSrc" 
          alt="arrow"
        >
      </span>
    </div>

    <div v-if="showForm" class="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50">
      <div class="w-full h-full bg-white p-8 shado relative">
        <div @click="showForm = false" class="close-btn absolute top-5 left-5 text-black font-bold cursor-pointer">
          Back
        </div>

        <form action="https://formspree.io/f/mblgrpkb" method="POST" class="w-full h-full mx-auto text-black flex flex-col justify-center max-w-[600px]">
          <div v-if="currentStep === 1">
            <h2 class="text-2xl font-bold text-center mb-[40px] md:mb-[60px]">Step 1: Choose Your Oven Options</h2>
            <label class="block mb-2 text-[20px]">Inside Diameter Size:</label>
            <select v-model="form.size" class="w-full p-2 mb-4 border ">
              <option value="0.8m">0.8m</option>
              <option value="1m">1m</option>
              <option value="1.5m">1.5m</option>
              <option value="2m">2m</option>
            </select>

            <label class="block mb-2 text-[20px]">Brick Colour:</label>
            <select v-model="form.brickColor" class="w-full p-2 mb-4 border ">
              <option value="red">Red</option>
              <option value="brown">Brown</option>
              <option value="black">Black</option>
            </select>

            <label class="block mb-2 text-[20px]">Oven Location:</label>
            <select v-model="form.location" class="w-full p-2 mb-4 border ">
              <option value="inside">Inside</option>
              <option value="outside">Outside</option>
            </select>

            <label class="block mb-2 text-[20px]">Under a Roof:</label>
            <select v-model="form.roof" class="w-full p-2 mb-4 border ">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <button @click="nextStep" type="button" class="bg-slate-600 hover:bg-black text-white px-6 py-3 w-full">
              Next
            </button>
          </div>

          <div v-if="currentStep === 2">
            <h2 class="text-2xl font-bold text-center mb-4">Step 2: Choose Your Accessories</h2>
            <div v-for="(accessory, index) in accessories" :key="index" class="flex items-center mb-2">
              <input type="checkbox" v-model="form.accessories" :value="accessory" class="mr-2">
              <span>{{ accessory }}</span>
            </div>

            <button @click="nextStep" type="button" class="bg-red-600 text-white px-6 py-3 w-full">
              Next
            </button>
          </div>

          <div v-if="currentStep === 3">
            <h2 class="text-2xl font-bold text-center mb-4">Step 3: Finalize Your Enquiry</h2>
            <label class="block mb-2 text-[20px]">Full Name:</label>
            <input v-model="form.name" type="text" class="w-full p-2 mb-4 border" placeholder="Your Name" name="name">

            <label class="block mb-2 text-[20px]">Email Address:</label>
            <input v-model="form.email" type="email" class="w-full p-2 mb-4 border" placeholder="Your Email" name="email">

            <label class="block mb-2 text-[20px]">Phone Number:</label>
            <input v-model="form.phone" type="tel" class="w-full p-2 mb-4 border" placeholder="Your Phone Number" name="phone">

            <button type="submit" class="bg-green-600 text-white px-6 py-3 w-full">
              Submit Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>



<script>
export default {
  name: "mediar",
  props: {
    buttonText: {
      type: String,
      default: 'Enquire Now!'
    },
    backgroundColor: {
      type: String,
      default: 'transparent'
    },
    borderClass: {
      type: String,
      default: 'border-[1px]'
    },
    textColorClass: {
      type: String,
      default: 'text-white'
    },
    arrowSrc: {
      default: 'https://cdn.shopify.com/s/files/1/0900/4875/8049/files/right-chevron.png?v=1740996159'
    }
  },
  data() {
    return {
      showForm: false,
      currentStep: 1,
      form: {
        size: '',
        brickColor: '',
        location: '',
        roof: '',
        accessories: [],
        name: '',
        email: '',
        phone: '',
      },
      accessories: ['Brush', 'Pizza Spade', 'Oven Door', 'Pizza Cutter', 'Protection Gloves'],
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < 3) {
        this.currentStep++;
      }
    },
    submitForm() {
      console.log('Enquiry submitted:', this.form);
      alert('Your enquiry has been submitted!');
      this.showForm = false;
      this.currentStep = 1;
    },
  },
};
</script>



<style scoped>
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
  .close-btn, .first-button {
    cursor: pointer;
  }
</style>

