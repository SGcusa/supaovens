<script>
export default {
  name: "Badge",
};
</script>


<template>
  <div class="badges" style="--width: 160px; --height: 160px; --quantity: 22;">
    <div class="badge-list">
      <div style="--position: 1;" class="badge-icon"><img src="https://i.ibb.co/7ynjv4V/SCRUM.png" alt="icon" class="badges" loading="lazy"></div>
      <div style="--position: 2;" class="badge-icon"><img src="https://i.ibb.co/QcC8Pr5/Figma-1.png" alt="icon" class="badges" loading="lazy"></div>
      <div style="--position: 3;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/3b/8c/d3/ME18SVEM_t.png" alt="icon" class="badges" loading="lazy"></div>
      <div style="--position: 4;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/9f/23/34/ME18SX5N_t.png" alt="icon" class="badges" loading="lazy"></div>
      <div style="--position: 5;" class="badge-icon"><img src="https://i.ibb.co/3RNxFqF/Screenshot-2024-06-25-114005-removebg-preview.png" alt="icon" class="badges" loading="lazy"></div>
      <div style="--position: 6;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/2a/2f/db/ME18SVEW_t.png" alt="icon" class="badges" loading="lazy"></div>
      <div style="--position: 7;" class="badge-icon"><img src="https://i.ibb.co/pXGW8Jp/icons8-html-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 8;" class="badge-icon"><img src="https://i.ibb.co/YDW5rr9/icons8-css-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 9;" class="badge-icon"><img src="https://i.ibb.co/VwtVMMN/icons8-bootstrap-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 10;" class="badge-icon"><img src="https://i.ibb.co/C8z52hz/icons8-js-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 11;" class="badge-icon"><img src="https://i.ibb.co/wpW236s/icons8-mysql-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 12;" class="badge-icon"><img src="https://i.ibb.co/MGFkCRy/icons8-node-js-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 13;" class="badge-icon"><img src="https://i.ibb.co/G3DNphW/icons8-vue-js-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 14;" class="badge-icon"><img src="https://i.ibb.co/ThgfnV7/icons8-git-48.png" alt="icon" loading="lazy"></div>
      <div style="--position: 15;" class="badge-icon"><img src="https://i.ibb.co/brX374p/python-1.png" alt="icon" loading="lazy"></div>
      <div style="--position: 16;" class="badge-icon"><img src="https://i.ibb.co/n0CmCpc/c-1.png" alt="icon" loading="lazy"></div>
      <div style="--position: 17;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/37/c8/a4/ME18MRYK_t.png" alt="icon" loading="lazy"></div>
      <div style="--position: 18;" class="badge-icon"><img src="https://i.ibb.co/Wp4JQ0p/linux.png" alt="icon" loading="lazy"></div>
      <div style="--position: 19;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/88/d0/c9/ME18SVFE_t.png" alt="icon" loading="lazy"></div>
      <div style="--position: 20;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/cf/c2/e4/ME18SVFF_t.png" alt="icon" loading="lazy"></div>
      <div style="--position: 21;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/8f/92/f8/ME18SVFD_t.png" alt="icon" loading="lazy"></div>
      <div style="--position: 22;" class="badge-icon"><img src="https://cdn-thumbs.imagevenue.com/c6/0e/15/ME18SVFC_t.png" alt="icon" loading="lazy"></div>
    </div>
  </div>  
</template>

<style scoped>
  .badges {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: 
      linear-gradient(
        to right, 
        transparent, 
        #000 10% 90%, 
        transparent
      )
    ;
  }
  .badges .badge-list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }
  .badge-icon {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 40s linear infinite;
    animation-delay: calc( (40s / var(--quantity)) * (var(--position) - 1) - 8s);
  }
  .badges .badge-list .badge-icon img {
    width: 80%;
    height: 80%;
    filter: grayscale(100%);
  }
  @keyframes autoRun {
    from {
        transform: translateX(calc(-100% - var(--width) * var(--quantity)));
    }
    to {
        transform: translateX(100%);
    }
  }
  .badges:hover .badge-icon {
    animation-play-state: paused!important;
  }
</style>
