<template>
  <nav>
    <div class="nav-left__logo w-[8.2vw]">
      <router-link to="/" class="hover:underline flex flex-row items-center"><img src="https://i.ibb.co/60tc1q7/logo3.png" alt="logo" width="60"/> Supa Ovens</router-link>      
    </div>
    
    <div class="nav-center">
      <div class="nc-1 w-[8.2vw]">
        <router-link to="/products" class="hover:underline">Our Services</router-link>
      </div>
      <div class="nc-2 w-[8.2vw]">
        <router-link to="/team" class="hover:underline">Meet-The-Team</router-link>
      </div>
      <div class="nc-3 w-[8.2vw]">
        <router-link to="/about" class="hover:underline">About Us</router-link>
      </div>
    </div>
    <div class="nav-right w-[8.2vw]">
      <router-link to="/contact" class="hover:underline">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</template>

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
