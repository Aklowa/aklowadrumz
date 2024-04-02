<template>
    <div class="relative flex flex-wrap items-center justify-between px-2 ">
      <div class="flex items-center">
        <img class="h-20 mr-4" src="../../assets/img/proper/aklowa_logo.svg" alt="Aklowa Logo" />
        <p class="main_text text-white">
          <span>A</span>
          <span>K</span>
          <span>L</span>
          <span>O</span>
          <span>W</span>
          <span>A</span>
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useNuxtApp } from "#app";
  
  const { $gsap } = useNuxtApp();
  
  onMounted(() => {
    const tl = $gsap.timeline({ repeat: 0 }); // No repeat
  
    // Animate opacity of each letter one after another
    tl.fromTo(
      ".main_text span",
      {
        x: 50,
        opacity: 0,
      },
      {
        delay: 2, //
        duration: 1, //
        x: 0,
        opacity: 1,
        ease: "power2.easeOut",
        stagger: {
          from: "start", //
          amount: 0.5, //
        },
      }
    );
  });
  </script>
  