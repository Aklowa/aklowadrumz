<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="space-y-12 dark:bg-gray-100 dark:text-gray-800">
    <header class=" bg-rose-100 p-4">
      <div class="container flex justify-between h-16 mx-auto">
        <logo />
        <ul class="items-stretch hidden space-x-3 md:flex">
          <li class="flex">
            <NuxtLink
              to="/"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >
              Home
            </NuxtLink>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border- dark:text-violet-600 dark:border-violet-600"
            >Blog</a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >Projects</a>
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1 border-b-2 dark:border-"
            >Contact</a>
          </li>
        </ul>
        <button class="flex justify-end p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>

    <section>
      <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          class="flex justify-center "
          title="Woman holding a mug"
        >
          <img
            src="~/assets/img/ak_img/int_eent.jpg"
            class="rounded-lg"
          >
        </div>
        <div class="max-w-3xl mx-auto">
          <div
            class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"
          >
            <div class="bg-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1
                href="#"
                class="text-gray-900 font-bold text-3xl mb-2"
              >
                Acrobatics
              </h1>
              <p class="text-gray-700 text-xs mt-2">
                Written By:
                <a
                  href="#"
                  class="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Osahene Blackmore
                </a> In
                <a
                  href="#"
                  class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Entertainment
                </a>
              </p>

              <p class="text-base leading-8 my-5">
                In the vibrant tapestry of Ghanaian culture, the Aklowa Drum Band stands out as a beacon of rhythmic brilliance and mesmerizing acrobatics. Led by a cadre of talented performers including Benjamin Borketey, Daniel Kpakpo, Ebenezer Tawiah, and Odoi Nmai, this ensemble has become synonymous with electrifying dance performances that blend tradition with innovation.
              </p>

              <!-- <h3 class="text-2xl font-bold my-5"> The feeling</h3> -->

              <p class="text-base leading-8 my-5">
                At the heart of the Aklowa Drum Band's allure lies their mastery of acrobatic dance, a spectacle that captivates audiences and transcends cultural boundaries. With each beat of the drum and every graceful leap, they weave a narrative that celebrates Ghana's rich heritage while pushing artistic boundaries.
              </p>

              <!-- <blockquote class="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s
                </blockquote> -->

              <p class="text-base leading-8 my-5">
                Their performances are a testament to the enduring spirit of Ghanaian tradition, infused with a contemporary flair that resonates with audiences worldwide. Benjamin Borketey, Daniel Kpakpo, Ebenezer Tawiah, and Odoi Nmai, along with their fellow band members, have honed their craft to perfection, captivating audiences with their synchronicity and agility.
              </p>


              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Acrobatics
              </a>,
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Tradition
              </a>,
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #African
              </a>,
              <a
                href="#"
                class="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Workshop
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section>
      <div class="container  p-6 space-y-6 sm:space-y-12">
        <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <div class="relative rounded-lg overflow-hidden">
              <!-- Video -->
              <video
                id="video1"
                ref="video1"
                class=" inset-0 w-full h-full object-cover cursor-pointer"
                controls
                @click="playVideo"
              >
                <source
                  src="../../assets/img/ak_img/vids/VID-20240329-WA0005.mp4"
                  type="video/mp4"
                >
                Your browser does not support the video tag.
              </video>
              <!-- Play Button Overlay -->
              <div
                v-if="!isPlaying"
                class="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 cursor-pointer"
              >
                <svg
                  class="h-12 w-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  @click="playVideo"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v18l14-9L5 3z"
                  />
                </svg>
              </div>
            </div>
            <div class="p-6 space-y-2">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                African Dance
              </h3>
              <span class="text-xs dark:text-gray-600">May 21, 2022</span>
              <p />
            </div>
          </div>
          <div class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              class="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="../../assets/img/ak_img/IMG-20240329-WA0015.jpg"
            >
            <div class="p-6 space-y-2">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                Drumming Lesson for kids
              </h3>
              <span class="text-xs dark:text-gray-600">December 22, 2000</span>
            </div>
          </div>
          <div class="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
            <img
              role="presentation"
              class="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="../../assets/img/ak_img/IMG-20240329-WA0007.jpg"
            >
            <div class="p-6 space-y-2">
              <h3 class="text-2xl font-semibold group-hover:underline group-focus:underline">
                Dancing lessons
              </h3>
              <span class="text-xs dark:text-gray-600">January 23, 2002</span>
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button class="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">
            Load more posts...
          </button>
        </div>
      </div>
    </section>

    <section class="py-6 dark:bg-gray-100 dark:text-gray-900">
      <div class="container flex flex-col justify-center p-4 mx-auto space-y-8 md:p-10 lg:space-y-0 lg:space-x-12 lg:justify-between lg:flex-row">
        <div class="flex flex-col space-y-4 text-center lg:text-left">
          <h1 class="text-5xl font-bold leading-none">
            Get free weekly tips
          </h1>
          <p class="text-lg">
            Subscribe to our monthly newsletter to find out about the latest events!
          </p>
        </div>
        <div class="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
          <div class="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              class="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            >
            <button
              type="button"
              class="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-pink-600 dark:text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>

    <footer class="bg-blue-100">
      <div class="container flex flex-col  p-4 mx-auto md:p-8 lg:flex-row">
        <ul class="self-center text-black py-6 space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
          <li>About</li>
          <li>Blog</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <div class="flex flex-col justify-center pt-6 lg:pt-0">
          <div class="flex justify-center space-x-4">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-pink-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                class="w-4 h-4"
              >
                <path d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-pink-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                class="w-4 h-4"
              >
                <path d="M16.021 0c-8.828 0-15.984 7.156-15.984 15.984 0 6.771 4.214 12.552 10.161 14.88-0.141-1.266-0.266-3.203 0.052-4.583 0.292-1.25 1.875-7.943 1.875-7.943s-0.479-0.964-0.479-2.375c0-2.219 1.292-3.88 2.891-3.88 1.365 0 2.026 1.021 2.026 2.25 0 1.37-0.87 3.422-1.323 5.323-0.38 1.589 0.797 2.885 2.365 2.885 2.839 0 5.026-2.995 5.026-7.318 0-3.813-2.75-6.49-6.677-6.49-4.547 0-7.214 3.417-7.214 6.932 0 1.375 0.526 2.854 1.188 3.651 0.13 0.161 0.146 0.302 0.109 0.464-0.12 0.5-0.391 1.599-0.443 1.818-0.073 0.297-0.229 0.359-0.536 0.219-1.99-0.922-3.245-3.839-3.245-6.193 0-5.036 3.667-9.672 10.563-9.672 5.542 0 9.854 3.958 9.854 9.229 0 5.516-3.474 9.953-8.307 9.953-1.62 0-3.141-0.839-3.677-1.839l-1 3.797c-0.359 1.391-1.339 3.135-2 4.193 1.5 0.458 3.078 0.714 4.734 0.714 8.813 0 15.979-7.151 15.979-15.984 0-8.828-7.167-15.979-15.979-15.979z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-pink-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                class="w-4 h-4"
              >
                <path d="M31.937 6.093c-1.177 0.516-2.437 0.871-3.765 1.032 1.355-0.813 2.391-2.099 2.885-3.631-1.271 0.74-2.677 1.276-4.172 1.579-1.192-1.276-2.896-2.079-4.787-2.079-3.625 0-6.563 2.937-6.563 6.557 0 0.521 0.063 1.021 0.172 1.495-5.453-0.255-10.287-2.875-13.52-6.833-0.568 0.964-0.891 2.084-0.891 3.303 0 2.281 1.161 4.281 2.916 5.457-1.073-0.031-2.083-0.328-2.968-0.817v0.079c0 3.181 2.26 5.833 5.26 6.437-0.547 0.145-1.131 0.229-1.724 0.229-0.421 0-0.823-0.041-1.224-0.115 0.844 2.604 3.26 4.5 6.14 4.557-2.239 1.755-5.077 2.801-8.135 2.801-0.521 0-1.041-0.025-1.563-0.088 2.917 1.86 6.36 2.948 10.079 2.948 12.067 0 18.661-9.995 18.661-18.651 0-0.276 0-0.557-0.021-0.839 1.287-0.917 2.401-2.079 3.281-3.396z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-pink-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                class="w-4 h-4"
              >
                <path d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z" />
              </svg>
            </a>
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-pink-600 dark:text-gray-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 32 32"
                class="w-4 h-4"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import logo from '~/components/main/logo.vue';
import { ref, onMounted } from 'vue';

const isPlaying = ref(false);

// Define video refs
const video1 = ref(null);

// Attach video elements to their respective refs after component mount
onMounted(() => {
  video1.value = document.querySelector('#video1');
});

// Function to play video 1
const playVideo = () => {
  if (video1.value && video1.value.play) {
    video1.value.play();
    isPlaying.value = true;
  } else {
    isPlaying.value = false;
  }
};

</script>