<template>
  <div>
<section
  class="h-screen relative bg-[url(../../assets/img/proper/Nat.webp)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute col-start-1 row-start-1 bg-white/75 bg-opacity-70 w-full h-full   sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      
      <headtext />
      <!-- Button Starts -->
      <div class="mt-8 flex justify-center">
        <a
          href="#"
          class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get to know us
        </a>
      </div>
      <!-- Button Ends -->
    </div>
  </div>
</section>

   
    <nav id="topNav" ref="navBar" :class="{ 'sticky top-0 z-10 shadow-md': isSticky }" class="bg-black text-center  transition-all duration-500">
      <ul class="list-none font-semibold text-uppercase">
        <navbars />
      </ul>
    </nav>
    </div>
  </template>
  
  <script>
import navbars from './navbars.vue';
import headtext from './headtext.vue';
import { ref, onMounted, computed } from 'vue';

export default {
  components: {
    navbars,
    headtext,
  },
  setup() {
    const navBar = ref(null);
    const headerHeight = ref(0);
    const isSticky = ref(false);

    onMounted(() => {
      headerHeight.value = navBar.value?.offsetHeight;
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', () => {
          isSticky.value = window.scrollY >= headerHeight.value;
        });
      }
    });

    return {
      navBar,
      headerHeight,
      isSticky: computed(() => isSticky.value),
    };
  },
};
</script>
  