<template>
  <nav class="relative flex flex-wrap items-center justify-between ">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="w-full relative flex justify-between lg:w-auto  sm:px-0 lg:static lg:block lg:justify-start">
         
<logo />
        <button class="text-white cursor-pointer text-xl ml-10 leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" v-on:click="toggleNavbar()">
          <font-awesome-icon class="text-lg leading-lg text-white opacity-75" icon="fa-solid fa-bars" />
        </button>
      </div>
      <div v-bind:class="{'hidden': !showMenu, 'flex': showMenu}" class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <font-awesome-icon class="text-lg leading-lg text-white opacity-75" icon="fa-solid fa-user-secret" /><span class="ml-2">Share</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /><span class="ml-2">Tweet</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
              <i class="fab fa-pinterest text-lg leading-lg text-white opacity-75" /><span class="ml-2">Pin</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import logo from './logo.vue'
export default {
  name: "pink-navbar",
  components: {
logo
  },
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleNavbar: function(){
      this.showMenu = !this.showMenu;
    }
  }
}
</script>
