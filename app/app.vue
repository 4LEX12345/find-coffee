<template>
  <div class="font-body  text-gray-800">
    <header class="lg:fixed sticky w-full top-0 text-white px-4 py-6 z-50 md:bg-transparent bg-black/40 ">
      <nav class="md:px-10 mx-auto flex justify-between items-center ">
        <!-- Logo -->
        <NuxtLink to="/" class=" text-sm space-x-10 bg-black/40 px-10 py-2 rounded-full backdrop-blur-xl"
        data-aos="zoom-in"
        data-aos-delay="100"
        >Find.Coffee</NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10 bg-black/40 px-10 py-4 rounded-full backdrop-blur-xl"
        data-aos="zoom-in"
        data-aos-delay="200"
        >
          <NuxtLink to="/" class="hover:text-coffee-light text-sm">Home</NuxtLink>
          <NuxtLink to="/menu" class="hover:text-coffee-light text-sm">Products</NuxtLink>
          <NuxtLink to="/about" class="hover:text-coffee-light text-sm">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-coffee-light text-sm">Contact</NuxtLink>
        </div>

         <div class="hidden md:flex bg-black/40 px-5 py-2 rounded-full backdrop-blur-xl"
          data-aos="zoom-in"
          data-aos-delay="300">
          <NuxtLink to="/contact" class="hover:text-coffee-light text-sm"
          >My Cart</NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="isOpen = !isOpen"
          class="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <!-- Mobile Dropdown -->
      <transition name="slide-fade">
        <div
          v-if="isOpen"
          class="md:hidden bg-transparent px-4 py-4 space-y-4"
        >
          <NuxtLink to="/" class="block hover:text-coffee-light" @click="isOpen = false">Home</NuxtLink>
          <NuxtLink to="/menus" class="block hover:text-coffee-light" @click="isOpen = false">Menu</NuxtLink>
          <NuxtLink to="/about" class="block hover:text-coffee-light" @click="isOpen = false">About</NuxtLink>
          <NuxtLink to="/contact" class="block hover:text-coffee-light" @click="isOpen = false">Contact</NuxtLink>
        </div>
      </transition>
    </header>

    <!-- Page content -->
    <NuxtPage />

<footer class="bg-stone-900 text-stone-200 py-12">
  <div class="max-w-7xl mx-auto px-6 md:px-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      
      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold text-white">Find.Coffee</h2>
        <p class="mt-4 text-sm text-stone-400">
          Crafting rich flavors and cozy vibes, one cup at a time.
        </p>
      </div>

      <!-- Navigation -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Explore</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-amber-400 transition">Home</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Menu</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">About Us</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Contact</a></li>
        </ul>
      </div>

      <!-- Support -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Support</h3>
        <ul class="space-y-2 text-sm">
          <li><a href="#" class="hover:text-amber-400 transition">FAQs</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Privacy Policy</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Terms & Conditions</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Order Tracking</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="text-lg font-semibold text-white mb-4">Stay Updated</h3>
        <p class="text-sm text-stone-400 mb-4">Join our newsletter to get the latest brews & offers.</p>
        <form class="flex">
          <input type="email" placeholder="Your email" class="w-full px-3 py-2 rounded-l-lg focus:outline-none text-stone-900" />
          <button class="bg-amber-500 hover:bg-amber-600 px-4 py-2 rounded-r-lg text-white font-medium transition">
            Join
          </button>
        </form>
      </div>

    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 border-t border-stone-700 pt-6 flex flex-col md:flex-row items-center justify-between">
      <p class="text-sm text-stone-500">&copy; 2025 Find.Coffee. All rights reserved.</p>
      
      <!-- Social Icons -->
      <div class="flex space-x-5 mt-4 md:mt-0">
        <a href="#" class="hover:text-amber-400 transition">
          <i class="bi bi-facebook text-xl"></i>
        </a>
        <a href="#" class="hover:text-amber-400 transition">
          <i class="bi bi-instagram text-xl"></i>
        </a>
        <a href="#" class="hover:text-amber-400 transition">
          <i class="bi bi-twitter text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
