<template>
  <div class="font-body bg-coffee-dark  text-gray-800">
    <header class="bg-transparent sticky top-0 text-white px-4 py-6 z-50">
      <nav class="container mx-auto flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink to="/" class="font-heading text-2xl">Find.Coffee</NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10">
          <NuxtLink to="/" class="hover:text-coffee-light">Home</NuxtLink>
          <NuxtLink to="/menus" class="hover:text-coffee-light">Menu</NuxtLink>
          <NuxtLink to="/about" class="hover:text-coffee-light">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-coffee-light">Contact</NuxtLink>
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
          class="md:hidden bg-coffee-dark px-4 py-4 space-y-4"
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

    <!-- Footer -->
    <!-- <footer class="bg-coffee-dark text-white text-center p-4 mt-10">
      © {{ new Date().getFullYear() }} Coffee Haven. All rights reserved.
    </footer> -->
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
