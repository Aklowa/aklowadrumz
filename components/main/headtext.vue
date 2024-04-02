<!-- HeroSection.vue -->
<template>
    <!-- <div class="relative h-screen flex items-center justify-center"> -->
      <div class="text-center">
        <h1 class="text-3xl font-extrabold sm:text-5xl" ref="headline">
            Your Best Cultural Troupe
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed" ref="subheadline">
        An African Cultural Heritage group with over decades of outstanding
            performances in music, dance and folk music. Aklowa Drum Band have
            performed in many countries, as well as global events.
      </p>
      </div>
    <!-- </div> -->
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const headline = ref(null);
  const subheadline = ref(null);
  
  onMounted(() => {
    gsap.from(headline.value, { duration: 1, opacity: 0, y: 50 });
    gsap.from(subheadline.value, { duration: 1, delay: 0.5, opacity: 0, y: 50 });
  });
  </script>
  
  <!-- <style scoped>
  .hero-section {
    background-image: url('/hero-background.jpg');
    background-size: cover;
    background-position: center;
  }
  </style> -->

