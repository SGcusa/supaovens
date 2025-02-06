<template>
  <section>
  <div class="py-[4vw]">
    <h1 class="md:text-[20px]">Get in Touch</h1>
    <hr class="mt-2 mb-4">
    <p>Let's chat</p>
  </div>
  <form action="https://submit-form.com/awGwRjsGh" method="POST">
    <div class="h-[50vh] text-left pt-10 px-[10vw] text-[18px]">
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
</section>

  <section>
    <div class="mt-40">
      <h1><router-link to="/">Supa Ovens</router-link></h1>
      <p class="mb-4">Founded in 2019 By Simphiwe Bhusa</p>
    </div>
    <footer>
      <div class="flex flex-col md:flex-row my-10 md:m-0">
        <div class="w-full md:w-1/2 footer-sec">
        <hr>
        <div class="flex flex-col md:flex-row text-left py-[4vw] px-10">
          <div class="w-full md:w-1/2">
            <h5 class="pb-3">Contact</h5>
            <p>Strand, Cape Town, 7140</p>
            <p>069-292-9578</p>
            <p>gcusaaa@gmail.com</p>
          </div>
          <div class="w-full md:w-1/2 mt-8 md:mt-0">
            <h5 class="pb-3">Working Hours</h5>
            <p>Monday - Friday 09:00 - 17:00</p>
            <p>Saturday 09:00 - 17:00</p>
            <p>Sunday CLOSED</p>
          </div>
        </div>
      </div>

        <div class="w-full md:w-1/2">
          <hr class="hidden md:block">
          <div class="text-left py-[4vw] px-10 text-[18px]">
            <div class="flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 md:flex-row">
                <h5 class="pb-3">Menu</h5>
                <div class="menu-1">
                  <router-link to="/products"><button class="tracking-normal hover:tracking-[0.2rem]">Our Services</button></router-link>
                </div>
                <div class="menu-2">
                  <router-link to="/team"><button class="tracking-normal hover:tracking-[0.2rem]">Meet the Team</button></router-link>
                </div>
                <div class="menu-3">
                  <router-link to="/about"><button class="tracking-normal hover:tracking-[0.2rem]">About Us</button></router-link>
                </div>
              </div>
              <div class="w-full md:w-1/2 md:flex-row mt-8 md:mt-0">
                <h5 class="pb-3">Socials</h5>
                <div class="social-1">
                  <button class="tracking-normal hover:tracking-[0.2rem]">Facebook</button>
                </div>
                <div class="social-2">
                  <button class="tracking-normal hover:tracking-[0.2rem]">Instagram</button>
                </div>
                <div class="social-3">
                  <button class="tracking-normal hover:tracking-[0.2rem]">LinkedIn</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="py-8 bg-gray-300">
      <div class="flex flex-row justify-between">
        <div class="flex flex-row justify-between pl-10">
          <p>Terms & Conditions</p>
          <p class="pl-10">Privacy Policy</p>
        </div>
        <div class="pr-10">
          <p>© 2024 All Rights Reserved</p>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
export default {
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



<style scoped>  
h1{
  font-size: 4.6vw;
  font-weight: 700;
}

h2 {
  font-size: 3.6vw;
  font-weight: 700;
}

h3 {
  font-size: 2.8vw;
  font-weight: 700;
}

h4 {
  font-size: 2vw;
  font-weight: 700;
}

h5 {
  font-size: 1.5vw;
  font-weight: 700;
}

h6 {
  font-size: 1.2vw;
  font-weight: 700;
}


.round{
  border: 1px solid black;
  border-radius: 10px;
}

.footer-sec{
  border-right: 1px solid rgb(184, 184, 184);
}





.contacts {
  font-family: "Nanum Myeongjo", serif;
  color: whitesmoke;
  height: 100vh;
}
tr td {
  color: aliceblue;
}
.col iframe {
  width: 280px;
  height: 280px;
  border-radius: 5px;
}
@media screen and (max-width: 300px) {
  .col iframe {
    width: 250px;
    height: 250px;
  }
}
@media screen and (max-width: 768px) {
  .contacts {
    height: fit-content;
  }
}
</style>