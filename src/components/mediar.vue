<template>
  <section>
    <div 
      v-if="!showForm" 
      @click="showForm = true" 
      :class="['first-button relative sm:w-[180px] overflow-hidden flex flex-row justify-start items-center', borderClass]"
      :style="{ backgroundColor: backgroundColor }"
    >
      <a 
        :class="['button-text text-[14px] md:text-[16px] text-center leading-[140%] min-w-[100px] sm:w-[180px] md:p-3 p-[10px] uppercase w-[135px]', textColorClass]"
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

    <div v-if="showForm" class="fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center z-50 overflow-scroll">
      <div class="w-full h-full bg-white px-[20px] pt-[100px] md:pt-0 pb-[60px] md:pb-0 shado relative">
        <div @click="showForm = false" class="close-btn absolute top-5 left-5 text-black font-bold cursor-pointer">
          Back
        </div>

        <div class="flex flex-col md:flex-row gap-20 h-full md:justify-center items-center overflow-scroll">
          <div class="w-full md:w-6/12 text-start">
            <form action="https://formspree.io/f/mblgrpkb" method="POST" class="w-full h-full mx-auto text-black flex flex-col justify-center max-w-[600px]">
              <div v-if="currentStep === 1">
                <h2 class="text-2xl font-bold text-center mb-[40px] md:mb-[60px] flex flex-col">
                  <span class="text-[14px] md:text-[16px] uppercase leading-[120%] text-[#b1b1b1]">Step 1:</span>
                   Choose Your Oven Options
                </h2>
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
  
                <button @click="nextStep" type="button" class="bg-black md:hover:bg-slate-600 text-white px-6 py-3 w-full">
                  Next
                </button>
              </div>
  
              <div v-if="currentStep === 2">
                <h2 class="text-2xl font-bold text-center mb-4 flex flex-col">
                  <span class="text-[14px] md:text-[16px] uppercase leading-[120%] text-[#b1b1b1]">Step 2:</span>
                  Choose Your Accessories
                </h2>
                <div v-for="(accessory, index) in accessories" :key="index" class="flex items-center mb-2">
                  <input type="checkbox" v-model="form.accessories" :value="accessory" class="mr-2">
                  <span>{{ accessory }}</span>
                </div>
  
                <button @click="nextStep" type="button" class="bg-red-600 text-white px-6 py-3 w-full">
                  Next
                </button>
              </div>
  
              <div v-if="currentStep === 3">
                <h2 class="text-2xl font-bold text-center mb-4 flex flex-col">
                  <span class="text-[14px] md:text-[16px] uppercase leading-[120%] text-[#b1b1b1]">Step 3:</span>
                  Finalize Your Enquiry
                </h2>
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
  
          <div class="w-full md:w-4/12 text-center md:!text-start">
            <p class="text-black font-semibold text-xl">Ordering Your Supa Oven</p>
            <p class="text-black mt-2">
              To place your order, please fill in the checkout form with your details, 
              including your name, contact information, and delivery address. 
              Once submitted, we will contact you within 24 hours to confirm your order and discuss delivery or pickup options.
            </p>
            
            <p class="text-black font-semibold text-lg mt-4">Pizza Oven Capacities</p>
            <div class="overflow-x-auto mt-2">
              <table class="w-full border-collapse border border-gray-300 text-black">
                <thead class="bg-gray-200">
                  <tr>
                    <th class="border border-gray-300 px-4 py-2 text-start">Inside Diameter</th>
                    <th class="border border-gray-300 px-4 py-2 text-start">Outside (cm)</th>
                    <th class="border border-gray-300 px-4 py-2 text-start">Pizza Capacity</th>
                  </tr>
                </thead>
                <tbody class="bg-white">
                  <tr>
                    <td class="border border-gray-300 px-4 py-2">60cm</td>
                    <td class="border border-gray-300 px-4 py-2">900cm by 1m</td>
                    <td class="border border-gray-300 px-4 py-2">1 large pizzas</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">70cmm</td>
                    <td class="border border-gray-300 px-4 py-2">1m by 1.1m</td>
                    <td class="border border-gray-300 px-4 py-2">2 large pizzas</td>
                  </tr>
                  <tr>
                    <td class="border border-gray-300 px-4 py-2">90cm</td>
                    <td class="border border-gray-300 px-4 py-2">1.2m by 1.3m</td>
                    <td class="border border-gray-300 px-4 py-2">3 large pizzas</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">1m</td>
                    <td class="border border-gray-300 px-4 py-2">1.3m by 1.4m</td>
                    <td class="border border-gray-300 px-4 py-2">4 large pizzas</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">1.1m</td>
                    <td class="border border-gray-300 px-4 py-2">1.4m by 1.5m</td>
                    <td class="border border-gray-300 px-4 py-2">4 large pizzas</td>
                  </tr>
                  <tr class="bg-gray-50">
                    <td class="border border-gray-300 px-4 py-2">1.2m</td>
                    <td class="border border-gray-300 px-4 py-2">1.5m by 1.6m</td>
                    <td class="border border-gray-300 px-4 py-2">6 large pizzas</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p class="text-black mt-4">
              Make sure to choose the right oven size for your needs. 
              If you have any questions, feel free to reach out before placing your order.
            </p>
          </div>
        </div>
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

