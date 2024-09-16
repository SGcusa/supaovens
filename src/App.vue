<template>
  <nav class="relative flex items-center justify-between p-4 text-black">
    <!-- Left section: Logo -->
    <div class="nav-left__logo">
      <router-link to="/" class="flex items-center">
        <img src="https://i.ibb.co/60tc1q7/logo3.png" alt="logo" class="w-[8vw] md:w-[60px]" />
        <span class="ml-2 text-[4vw] md:text-[16px]">Supa Ovens</span>
      </router-link>
    </div>

    <!-- Toggler Button for Small Screens -->
    <div class="block md:hidden">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Center and Right section: Navigation Links (Hidden on small screens) -->
    <div id="nav-content" class="hidden md:flex md:space-x-8 items-center">
      <router-link to="/products" class="hover:uppercase hover:text-gray-700 text-[16px] transition-colors duration-200">Our Services</router-link>
      <router-link to="/team" class="hover:uppercase hover:text-gray-700 text-[16px] transition-colors duration-200">Meet The Team</router-link>
      <router-link to="/about" class="hover:uppercase hover:text-gray-700 text-[16px] transition-colors duration-200">About Us</router-link>
      <router-link to="/contact" class="hover:uppercase hover:text-gray-700 text-[16px] transition-colors duration-200">Contact</router-link>
    </div>

    <!-- Dropdown Menu for Small Screens -->
    <div v-if="isMenuOpen" class="absolute top-full left-0 right-0 bg-white shadow-lg z-50 md:hidden flex flex-col space-y-4 p-4">
      <router-link to="/products" class="hover:uppercase hover:bg-gray-200 text-gray-800 text-lg p-2 transition-all duration-200">Our Services</router-link>
      <router-link to="/team" class="hover:uppercase hover:bg-gray-200 text-gray-800 text-lg p-2 transition-all duration-200">Meet The Team</router-link>
      <router-link to="/about" class="hover:uppercase hover:bg-gray-200 text-gray-800 text-lg p-2 transition-all duration-200">About Us</router-link>
      <router-link to="/contact" class="hover:uppercase hover:bg-gray-200 text-gray-800 text-lg p-2 transition-all duration-200">Contact</router-link>
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
  padding: 40px 50px;
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
  background: linear-gradient(90deg, #007bff, #ff073a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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
  background: linear-gradient(90deg, #007bff, #ff073a);
  animation: grow 0.5s ease-in-out;
}

@keyframes grow {
  0% { width: 0; }
  100% { width: 100%; }
}


.nav-center {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nc-2{
  margin: 0px 20px 0px 20px;
}
</style>
