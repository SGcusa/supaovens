
<template>
  <section>
  <div class="text-center items-center">
    <div class="px-[3vw] z-10 m-4 max-w-[600px] mx-auto pb-[60px]">
      <h1 class="flex flex-col justify-center items-center text-[40px] md:text-[60px] leading-[90%] stroke-black">
        <span class="text-[16px] leading-[100%] uppercase pt-[20px] text-left text-[#b1b1b1]">Leave a supa comment</span>
         Get In Touch
      </h1>
    </div>
  </div>
  <div class="flex flex-row items-center gap-[20px] mb-[60px]">
    <div class="w-full md:max-w-[1100px] mx-auto ">
      <form action="https://formspree.io/f/xrbpzolj" method="POST">
        <div class="text-left px-[10vw] text-[18px]">
          <div class="flex flex-col md:flex-row justify-center text-start items-start">
            <div class="w-full md:w-1/2 flex flex-col pr-0 md:pr-4 mb-4 md:mb-0">
              <label for="name1">Name</label>
              <input class="form-control border-gray-400 text-gray-800 border-2 p-2"
                    type="text" 
                    id="name1" 
                    name="name" 
                    placeholder="Name" required />
            </div>
            <div class="w-full md:w-1/2 flex flex-col pl-0 md:pl-4 mb-4">
              <label for="name2">Surname</label>
              <input class="form-control border-gray-400 text-gray-800 border-2 p-2" 
                    type="text" 
                    id="name2" 
                    name="name" 
                    placeholder="Surname" required />
            </div>
          </div>
          <div class="mb-4">
            <label for="email">Email</label>
            <input class="form-control border-gray-400 text-gray-200 border-2" 
                   type="email" 
                   id="email" 
                   name="email" 
                   placeholder="Email" required />
          </div>
          <div class="mb-4">
            <label class="block">About:</label>
            <select class="w-full p-2 border-gray-400 text-gray-600 border-2">
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Pricing & Quotes">Pricing & Quotes</option>
              <option value="Feedback & Suggestions">Feedback & Suggestions</option>
            </select>
          </div>
          
          <div class="mb-4">
            <label for="message">Message</label>
            <textarea class="form-control border-gray-400 text-gray-200 border-2 h-28" 
                      id="message" 
                      name="message" 
                      placeholder="Message" required>
            </textarea>
            <button class="py-2 my-4 bg-black text-white w-full border-2 round" type="submit">Send</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</section>

<section>
  <sub_footer />
</section>
</template>



<script>
import sub_footer from '@/components/subscribtion.vue';

export default {
  components: {
    sub_footer,
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      emailAddress: "",
      message: "",
      checklistItems: ["Brush", "Spade", "Glove", "Door"],
      selectedItems: []
    };
  },
  methods: {
    reloadForm() {
      alert("Form submitted");
      // Reset form fields
      this.firstName = "";
      this.lastName = "";
      this.emailAddress = "";
      this.message = "";
      this.selectedItems = [];
    }
  }
};
</script>


