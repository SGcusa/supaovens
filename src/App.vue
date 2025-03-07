<template>
  <nav class="bg-[#000]">
    <div class="hidden md:flex flex-row justify-center items-center md:gap-14 text-white w-full">
      <a href="tel:+27764167815" class="text-white hover:underline">
        +27 76 416 7815 
      </a> |
      <a href="mailto:supaovens@gmail.com" class="text-white hover:underline">
        supaovens@gmail.com
      </a> |
      <a href="https://www.facebook.com/p/Supa-Ovens-100063959528797/" target="_blank" class="text-white hover:underline">
        @Supa_Ovens
      </a>
    </div>
    <div class="md:hidden relative w-full overflow-hidden md:justify-center md:gap-10 lg:gap-14 flex flex-row items-center" style="text-wrap: pretty;">
      <div class="flex w-full mobile-slider">
        <a href="tel:+27764167815" class="text-white hover:underline min-w-full text-center">
          +27 76 416 7815 
        </a> |
        <a href="mailto:supaovens@gmail.com" class="text-white hover:underline min-w-full text-center">
          supaovens@gmail.com
        </a> |
        <a href="https://www.facebook.com/p/Supa-Ovens-100063959528797/" target="_blank" class="text-white hover:underline min-w-full text-center">
          @Supa_Ovens
        </a>
      </div>
    </div>
  </nav>
  <nav class="relative flex items-center justify-between px-[4vw]  mx-auto text-black">
    <!-- Left section: Logo -->
    <div class="nav-left__logo">
      <router-link to="/" class="flex items-center">
        <img src="https://i.ibb.co/60tc1q7/logo3.png" alt="logo" class="w-[8vw] md:w-[60px]" />
      </router-link>
    </div>

    <!-- Toggler Button for Small Screens -->
    <div class="block ">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Center and Right section: Navigation Links (Hidden on small screens) -->
    <div id="nav-content" class="hidden md:space-x-8 items-center overflow-hidden">
      <router-link to="/products" class="text-[16px] hover:scale-105 transition-colors duration-200">Our Services</router-link>
      <router-link to="/about" class="text-[16px] hover:scale-105 transition-colors duration-200">About Us</router-link>
      <router-link to="/contact" class="text-[16px] hover:scale-105 transition-colors duration-200">Contact</router-link>
    </div>

    <!-- Dropdown Menu for Small Screens -->
    <div v-if="isMenuOpen" class="absolute w-[200px] top-14 right-[10px] md:right-[20px] xl:right-10 bg-blend-darken bg-white shadow-lg z-50 flex flex-col space-y-4 p-4">
      <router-link to="/products" class="text-gray-800 text-right hover:scale-105 text-lg p-2 transition-all duration-200">Our Services</router-link>
      <router-link to="/about" class="text-gray-800 text-right hover:scale-105 text-lg p-2 transition-all duration-200">About Us</router-link>
      <router-link to="/contact" class="text-gray-800 text-right hover:scale-105 text-lg p-2 transition-all duration-200">Contact</router-link>
    </div>
  </nav>

  <router-view />
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false, // Controls if the dropdown menu is open
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // Toggles the menu open and closed
    },
  },
};
</script>

<style>
#app {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  overflow-x: hidden;
  overflow-y: hidden;
  color: black;
}

nav {
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
}
#mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 50;
}

nav a {
  font-weight: bold;
  color: #000000; 
}

nav a.router-link-exact-active {
  font-weight: bold;
  position: relative;
}

nav a.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background: #000000;
  animation: grow 0.5s ease-in-out;
}

@keyframes grow {
  0% { width: 0; }
  100% { width: 100%; }
}

@media (max-width: 768px) {
  .mobile-slider {
    animation: slide 9s infinite;
  }
}

@media (max-width: 768px) {
  @keyframes slide {
    0%, 33% { transform: translateX(0); }
    34%, 66% { transform: translateX(-100%); }
    67%, 100% { transform: translateX(-200%); }
  }
}

.nav-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.round{
  border: 1px solid black;
  border-radius: 10px;
}

.footer-sec{
  border-right: 1px solid rgb(184, 184, 184);
}
</style>
