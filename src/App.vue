<template>
  <nav>
    <div class="nav-left__logo">
      <router-link to="/"><img src="https://i.ibb.co/60tc1q7/logo3.png" alt="logo" width="60"/> Supa Ovens</router-link>      
    </div>
    
    <div class="nav-center">
      <div class="nc-1">
        <router-link to="/products">Our Services</router-link>
      </div>
      <div class="nc-2">
        <router-link to="/team">Meet-The-Team</router-link>
      </div>
      <div class="nc-3">
        <router-link to="/about">About Us</router-link>
      </div>
    </div>
    <div class="nav-right">
      <router-link to="/contact">Contact</router-link>
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
  padding: 40px 50px 10px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a {
  font-weight: bold;
  color: #000000; 
}

nav a.router-link-exact-active {
  color: #42b983;
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
