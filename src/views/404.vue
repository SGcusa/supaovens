<template>
    <div class="container">
      <h1 
        id="errorText"
        ref="errorText"
        @mousemove="moveText"
        @mouseleave="resetText"
      >
        404
      </h1>
      <p>Oh no! Looks like this page got a little too crispy...</p>
      <a href="/products" class="border-1 border-white min-w-[150px] p-[10px] text-white">Shop Ovens</a>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      moveText(event) {
        const text = this.$refs.errorText;
        const rect = text.getBoundingClientRect();
        const offsetX = event.clientX - (rect.left + rect.width / 2);
        const offsetY = event.clientY - (rect.top + rect.height / 2);
        const moveX = (offsetX / rect.width) * 100;
        const moveY = (offsetY / rect.height) * 100;
  
        text.style.transform = `translate(${moveX}px, ${moveY}px)`;
      },
      resetText() {
        this.$refs.errorText.style.transform = 'translate(0, 0)';
      }
    }
  };
  </script>
  
  <style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 76vh;
    background-color: #2d2d2d;
    text-align: center;
    overflow: hidden;
  }
  
  h1 {
    font-size: 150px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    text-transform: uppercase;
    transition: transform 0.2s ease-out;
  }
  
  p {
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
  }
  </style>
  