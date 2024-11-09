<template>
  <div id="contact">
    <div class="grid w-full grid-cols-1 gap-8 py-16 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
      <div class="flex flex-col md:flex-row mx-2 bg-red-100 rounded justify-between">
        <!-- text starts -->
        <div class="md:w-1/2 space-y-2 mx-2 px-2">
          <h2 class="text-4xl font-bold leading-tight lg:text-5xl">
            Let's talk!
          </h2>
          <div class="dark:text-gray-600">
            We are at your service
          </div>
          <div class="space-y-4 pl-4">
            <p class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 mr-2 sm:mr-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>10 Otu Blohu Street, Dzorwulu, Accra</span>
            </p>
            <p class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5-V3z" />
              </svg>
              <span>+61 42 34 20 46 5</span>
            </p>
            <p class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-5 h-5 mr-2 sm:mr-6"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>aklowadrumz@gmail.com</span>
            </p>
          </div>
        <!-- Text ends -->
        </div>

        <!-- Image start -->
        <div class="md:w-1/2 ">
          <img
            src="../../assets/img/proper/contact.svg"
            alt=""
            class="p-6 h-auto md:h-96"
          >
        </div>
        <!-- Image ends -->
      </div>

      <form
        class="space-y-6 mx-5"
      >
        <div>
          <label
            for="name"
            class="text-sm"
          >Full name</label>
          <input
            id="name"
            type="text"
            placeholder=""
            class="w-full p-3 border border-black rounded dark:bg-gray-100"
          >
        </div>
        <div>
          <label
            for="email"
            class="text-sm"
          >Email</label>
          <input
            id="email"
            type="email"
            class="w-full p-3 rounded border border-black dark:bg-gray-100"
          >
        </div>
        <div>
          <label
            for="message"
            class="text-sm"
          >Message</label>
          <textarea
            id="message"
            rows="3"
            class="w-full p-3 rounded border border-black dark:bg-gray-100"
          />
        </div>
        <button
          type="submit"
          class="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-rose-600 dark:text-gray-50"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</template>
