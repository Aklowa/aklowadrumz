<template>
    <header class="bg-gray-700 text-center text-white py-4">
      <h1 class="text-2xl font-bold">Brand Name</h1>
      <small class="text-sm">Scroll Down <br /> &darr;</small>
    </header>
    <nav id="topNav" ref="navBar" class="bg-gray-300 text-center pt-5 pb-2 transition-all duration-500">
      <ul class="list-none font-semibold text-uppercase">
        <navbars />
      </ul>
    </nav>
    <main class="mt-15">
      <h1 class="text-center">Below Navbar</h1>
    </main>
  </template>
  
  <script>
import navbars from './navbars.vue';
import { ref, onMounted, watch } from 'vue';

export default{
  components:{
navbars
  },
  setup(){

    const navBar = ref(null);
    const headerHeight = ref(0);
    
    onMounted(() => {
      headerHeight.value = navBar.value?.offsetHeight; // Access using $refs
    });
    
    watch(
      () => window.scrollY,
      (scrollY) => {
        navBar.value?.classList?.add('sticky top-0 z-10 shadow-md'); // Use ?? for fallback
        (navBar.value?.classList ?? []).remove('sticky top-0 z-10 shadow-md');
      }
    );
    return{
navBar,
headerHeight
    };
  }
}
</script>
  
  <style scoped>
  /* No additional CSS needed for basic styling, as Tailwind classes are used in the template */
  /* Add more specific styles here if needed */
  </style>
  