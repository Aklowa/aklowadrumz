<template>
  <div>
    <section class="h-screen relative bg-white">
      <img
        src="../../assets/img/proper/Nat.webp"
        class="absolute inset-0 object-cover w-full h-full z-0"
        alt="background image"
      >
      <div
        class="absolute col-start-1 row-start-1 bg-white/75 bg-opacity-70 w-full h-full   sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
      />

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
      >
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <headtext />
          <!-- Button Starts -->
          <div class="mt-8 flex justify-center">
            <NuxtLink
              to="/blog/history"
              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Get to know us
            </NuxtLink>
          </div>
          <!-- Button Ends -->
        </div>
      </div>
    </section>


    <nav
      id="topNav"
      :class="{ 'sticky-nav': isSticky }"
      class="bg-rose-100 text-center transition-all duration-500"
    >
      <ul class="list-none font-semibold text-uppercase">
        <navbars />
      </ul>
    </nav>
  </div>
</template>

  <script>
import navbars from './navbars.vue';
import headtext from './headtext.vue';
import { ref, onMounted } from 'vue';

export default {
  components: {
    navbars,
    headtext,
  },
  setup() {
    const isSticky = ref(false);

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
      isSticky.value = window.pageYOffset > 0;
    };

    return {
      isSticky,
    };
  },
};
</script>

<style scoped>
.sticky-nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
}
</style>