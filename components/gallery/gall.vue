
import { NuxtLink } from '#build/components';
<template>
<div id="gallery">
<section class="dark:bg-gray-100">
        
    <div role="contentinfo" class="flex items-center flex-col px-4 py-5 mb-10">
            <div tabindex="0" class="focus:outline-none text-4xl lg:text-4xl font-extrabold text-center leading-10 text-gray-800 lg:w-5/12 md:w-9/12 pt-4">Gallery</div>
        </div>
    <div class="grid grid-cols-1 mx-2 md:px-2 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <!-- Blog Entry 1 -->
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="../../assets/img/proper/W1.jpg" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg">
              <div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h2 class="text-xl font-semibold">Dance Performance</h2>
                <div class="mt-1 flex flex-wrap gap-1 text-center">
                    <NuxtLink
                    to="/blog/dance"
                    class="block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                    Learn more
                    </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Blog Entry 2 -->
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="../../assets/img/ak_img/int_eent2.jpg" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg">
              <div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h2 class="text-xl font-semibold">International Events</h2>
                <div class="mt-1 flex flex-wrap gap-1 text-center">
                    <NuxtLink
                    to="/blog/intEvents"
                    class="block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                    Learn more
                    </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Blog Entry 3 -->
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="../../assets/img/ak_img/edu.jpg" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg">
              <div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h2 class="text-xl font-semibold">Training & Workshop</h2>
                <div class="mt-1 flex flex-wrap gap-1 text-center">
                    <NuxtLink
                    to="/blog/workshop"
                    class="block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                    Learn more
                    </NuxtLink>
                </div>
              </div>
            </div>

            <!-- Blog Entry 4 -->
            <div class="max-w-sm mx-auto relative shadow-md rounded-lg cursor-pointer">
              <img src="../../assets/img/ak_img/int_eent.jpg" alt="Img by Meriç Dağlı https://unsplash.com/@meric" class="w-full h-auto object-cover rounded-lg">
              <div class="absolute bottom-0 left-0 right-0 h-20 bg-black bg-opacity-50 backdrop-blur text-white p-4 rounded-b-lg">
                <h2 class="text-xl font-semibold">Acrobatics</h2>
                <div class="mt-1 flex flex-wrap gap-1 text-center">
                    <NuxtLink
                    to="/blog/acrobatics"
                    class="block w-full rounded bg-rose-600 px-2 py-1 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                    >
                    Learn more
                    </NuxtLink>
                </div>
              </div>
            </div>
        </div>
</section>
</div>
</template>