
<template>
  <section>
  <div class="pt-[4vw]">
    <h1 class="md:text-[60px] stroke-black">Get in Touch</h1>
    <hr class="mt-2">
  </div>
  <div class="flex flex-row items-center gap-[20px]">
    <div class="w-full md:w-1/2">
      <img 
        class="object-cover"
        src="https://i.ibb.co/C1ghFjv/Whats-App-Image-2024-06-20-at-20-30-11.png" 
        alt=""
        width="100%"
        height="100%"
      >
    </div>
    <div class="w-full md:w-1/2">
      <form action="https://submit-form.com/awGwRjsGh" method="POST">
        <div class="h-[50vh] text-left px-[10vw] text-[18px]">
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
            <label for="message">Message</label>
            <textarea class="form-control border-gray-400 text-gray-200 border-2 h-28" 
                      id="message" 
                      name="message" 
                      placeholder="Message" required>
            </textarea>
            <button class="py-2 my-4 bg-black text-white w-full border-2 round" type="submit">Send</button>
          </div>
      
        <!-- <fieldset>
          <legend>Select items:</legend>
          <input type="checkbox" id="brush" name="items" value="Brush" />
          <label for="brush">Brush</label><br/>
          <input type="checkbox" id="spade" name="items" value="Spade" />
          <label for="spade">Spade</label><br/>
          <input type="checkbox" id="glove" name="items" value="Glove" />
          <label for="glove">Glove</label><br/>
          <input type="checkbox" id="door" name="items" value="Oven Door" />
          <label for="door">Oven Door</label><br/>
        </fieldset> -->
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


