<template>
  <div id="album">
  <div class="dark:bg-gray-100">
  <div class="max-w-8xl mx-auto container pt-16">
    <div role="contentinfo" class="flex items-center flex-col px-4 py-5 mb-10">
            <div tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Our Albums</div>
        </div>
  <swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }"
    :loop="true"
    :spaceBetween="4"
    :navigation="true"
    :thumbs="{ swiper: thumbsSwiper.value }"
    :modules="modules"
    class="mySwiper2"
  >
    <swiper-slide>
<section
  class="relative w-full bg-[url(../../assets/img/proper/ak2.webp)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute bg-white/75 bg-opacity-70 w-full h-full   sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl text-center font-extrabold sm:text-5xl">
        Aklowa Djormo

        <strong class="block font-extrabold text-rose-700"> Cross Tradition </strong>
      </h1>

      
      <p class="mt-10  max-w-lg text-left sm:text-xl/relaxed">
        Get the tracks on:
      </p>

      <div class="mt-2 flex flex-nowrap align-center gap-4 text-center">
        <a
          href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" 
          class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
        <img class="text-primary" src="../../assets/img/proper/amazon.svg"></img>
        </a>

        <a
          href="https://www.boomplay.com/artists/2882588"
          class="block rounded-full bg-white text-sm font-medium text-white shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/boomplay.svg"></img>
        </a>
        <a
          href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/qobuz.svg"></img>
        </a>
        <a
          href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/youtube.svg"></img>
        </a>
      </div>
    </div>
  </div>
</section>
</swiper-slide
    ><swiper-slide
      ><section
  class="relative w-full bg-[url(../../assets/img/proper/ak3.webp)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute bg-white/75 bg-opacity-70 w-full h-full   sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl text-center font-extrabold sm:text-5xl">
        Aklowa Djormo

        <strong class="block font-extrabold text-rose-700"> Near and Far </strong>
      </h1>

      
      <p class="mt-10  max-w-lg text-left sm:text-xl/relaxed">
        Get the tracks on:
      </p>

      <div class="mt-2 flex flex-nowrap align-center gap-4 text-center">
        <a
          href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" 
          class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
        <img class="text-primary" src="../../assets/img/proper/amazon.svg"></img>
        </a>

        <a
          href="https://www.boomplay.com/artists/2882588"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/boomplay.svg"></img>
        </a>
        <a
          href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/qobuz.svg"></img>
        </a>
        <a
          href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/youtube.svg"></img>
        </a>
      </div>
    </div>
  </div>
</section></swiper-slide
    ><swiper-slide
      ><section
  class="relative w-full bg-[url(../../assets/img/proper/ak4.webp)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute bg-white/75 bg-opacity-70 w-full h-full   sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl text-center font-extrabold sm:text-5xl">
        Aklowa Drum Band

        <strong class="block font-extrabold text-rose-700"> Kpo keke </strong>
      </h1>

      
      <p class="mt-10  max-w-lg text-left sm:text-xl/relaxed">
        Get the tracks on:
      </p>

      <div class="mt-2 flex flex-nowrap align-center gap-4 text-center">
        <a
          href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" 
          class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
        <img class="text-primary" src="../../assets/img/proper/amazon.svg"></img>
        </a>

        <a
          href="https://www.boomplay.com/artists/2882588"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/boomplay.svg"></img>
        </a>
        <a
          href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/qobuz.svg"></img>
        </a>
        <a
          href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/youtube.svg"></img>
        </a>
      </div>
    </div>
  </div>
</section></swiper-slide
    ><swiper-slide
      ><section
  class="relative w-full bg-[url(../../assets/img/proper/ak1.jpg)] bg-cover bg-center bg-no-repeat"
>
  <div
    class="absolute bg-white/75 bg-opacity-70 w-full h-full   sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="text-3xl text-center font-extrabold sm:text-5xl">
        Aklowa Drum Band

        <strong class="block font-extrabold text-rose-700"> Hot African Drum Beat </strong>
      </h1>

      
      <p class="mt-10  max-w-lg text-left sm:text-xl/relaxed">
        Get the tracks on:
      </p>

      <div class="mt-2 flex flex-nowrap align-center gap-4 text-center">
        <a
          href="https://music.apple.com/us/artist/aklowa-drum-band/1397843030" 
          class="block rounded-full bg-white text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
        <img class="text-primary" src="../../assets/img/proper/amazon.svg"></img>
        </a>

        <a
          href="https://www.boomplay.com/artists/2882588"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/boomplay.svg"></img>
        </a>
        <a
          href="https://www.qobuz.com/nz-en/album/hot-african-drum-beat-aklowa-drum-band-ghana-djorwaa-dancers/s6rbj6ndtw7ab"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/qobuz.svg"></img>
        </a>
        <a
          href="https://www.youtube.com/channel/UC2vl70mOgd_UHartdQme3BQ"
          class="block rounded-full bg-white text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
        <img class="serv_img_2 text-primary" src="../../assets/img/proper/youtube.svg"></img>
        </a>
      </div>
    </div>
  </div>
</section></swiper-slide
    >
  </swiper>
  <swiper
    @swiper="setThumbsSwiper"
    :loop="true"
    :spaceBetween="4"
    :slidesPerView="4"
    :freeMode="true"
    :watchSlidesProgress="true"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="../../assets/img/proper/ak2.webp" /></swiper-slide
    ><swiper-slide
      ><img
        src="../../assets/img/proper/ak3.webp" /></swiper-slide
    ><swiper-slide
      ><img
        src="../../assets/img/proper/ak4.webp" /></swiper-slide
    ><swiper-slide
      ><img
        src="../../assets/img/proper/ak1.jpg" /></swiper-slide
    >
  </swiper>
  </div>
  </div>
  </div>
</template>
<script>
  import { ref } from 'vue';
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/free-mode';
  import 'swiper/css/navigation';
  import 'swiper/css/thumbs';

  // import './style.css';

  // import required modules
  import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const thumbsSwiper = ref(0);

      const setThumbsSwiper = (swiper) => {
        thumbsSwiper.value = swiper;
      };

      return {
        thumbsSwiper,
        setThumbsSwiper,
        modules: [Autoplay, FreeMode, Navigation, Thumbs],
      };
    },
  };
</script>
<style scoped>
/* 
.swiper {
  width: 100%;
  height: 100%;
} */

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

body {
  background: #000;
  color: #000;
}

.swiper {
  width: 100%;
  height: 400px;
  margin-left: auto;
  margin-right: auto;
}

.swiper-slide {
  background-size: cover;
  background-position: center;
}

/* .mySwiper2 {
  height: 80%;
  width: 100%;
} */

.mySwiper {
  /* opacity: 0.4; */
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  padding: 10px 0;
}

/* .mySwiper .swiper-slide {
  width: 100%;
  height: 20%;
}

.mySwiper .swiper-slide img {
  width: 100%;
  height: 20%;
  opacity: 0.4;
} */

.mySwiper .swiper-slide-thumb-active {
  opacity: 5;
}

/* .swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

</style>