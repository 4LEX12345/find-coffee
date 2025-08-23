<template>
  <div class="font-body text-gray-800">
    <header class="fixed w-full top-0 text-white px-4 py-6 z-50 md:bg-transparent bg-black/40">
      <nav class="md:px-10 mx-auto flex justify-between items-center">
        <div class="flex gap-2">
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
          <!-- Logo -->
          <NuxtLink to="/" class=" text-sm space-x-10 bg-black/40 px-10 py-2 rounded-full backdrop-blur-xl"
          data-aos="zoom-in"
          data-aos-delay="100"
          >Find.Coffee</NuxtLink>
          
        </div>

        

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10 bg-black/40 px-10 py-4 rounded-full backdrop-blur-xl">
          <NuxtLink to="/" class="hover:text-coffee-light text-sm">Home</NuxtLink>
          <NuxtLink to="/menu" class="hover:text-coffee-light text-sm">Products</NuxtLink>
          <NuxtLink to="/about" class="hover:text-coffee-light text-sm">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-coffee-light text-sm">Contact</NuxtLink>
        </div>

        <!-- Cart Button -->
        <div class="relative ">
          <button @click="showCart = true" class="relative p-2  hover:bg-black/20 transition bg-black/40 px-5 py-2 rounded-full backdrop-blur-xl">
            <ShoppingCart class="w-5 h-5 text-white"/>
            <span
              v-if="totalItems > 0"
              class="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
            >
              {{ totalItems }}
            </span>
          </button>
        </div>
      </nav>

       <!-- Mobile Dropdown -->
      <transition name="slide-fade">
        <div
          v-if="isOpen"
          class="md:hidden bg-transparent px-4 py-4 space-y-4"
        >
          <NuxtLink to="/" class="block hover:text-coffee-light" @click="isOpen = false">Home</NuxtLink>
          <NuxtLink to="/menu" class="block hover:text-coffee-light" @click="isOpen = false">Menu</NuxtLink>
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
    

    <!-- Cart Modal / Sidebar -->
    <transition name="fade">
      <div v-if="showCart" class="fixed inset-0 bg-black/40 z-50 flex justify-end">
        <div class="bg-white w-96 max-w-full h-full p-6 relative flex flex-col shadow-xl rounded-l-3xl overflow-y-auto">
          <!-- Close Button -->
          <button
            @click="showCart = false"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
          >
            &times;
          </button>

          <!-- Header -->
          <h2 class="text-2xl font-bold mb-6 text-gray-900">Your Cart</h2>

          <!-- Cart Items -->
          <ul class="flex-1 divide-y divide-gray-200 mb-6">
            <li v-for="(item, index) in cart.items" :key="index" class="py-4 flex justify-between items-start">
              <div class="flex items-start space-x-3">
                <img :src="item.product.image" alt="" class="w-10 h-10 rounded-lg object-cover" />
                <div>
                  <p class="font-medium text-sm text-gray-900 flex items-center gap-2">{{ item.product.name }} <span class="inline-flex items-start justify-center w-5 h-5 rounded-full bg-black/10  text-[9px] text-coffee-dark">
                    {{ item.quantity }}
                  </span></p>
                  <p class="font-medium text-[10px] text-gray-500 text-left mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda ut necessitatibus accusantium asperiores delectus eius at, harum neque minus quisquam</p>
                   <!-- <div class="flex gap-2 items-center justify-end"> 
                    <button @click="cart.removeFromCart(index)" class="text-red-500 hover:text-red-600 text-sm font-semibold">
                        <Trash class="h-4 w-4"/>
                    </button>
                  </div> -->
                </div>

                 <div class="flex gap-2 items-end justify-between flex-col h-full"> 
                   <p class="text-sm text-gray-600 mt-1"> {{  formatPrice(item.quantity * item.product.price)}}</p>
                    <button @click="cart.removeFromCart(index)" class=" text-sm font-semibold text-white">
                         <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-coffee-light hover:bg-coffee-dark text-[9px]">
                          <Trash class="h-3 w-3"/>
                        </span>
                    </button>
                </div>
              </div>
            </li>
          </ul>

          <!-- Footer / Actions -->
          <div class="mt-auto border-t border-gray-200 pt-4 flex flex-col space-y-3">
            <div class="flex justify-between items-center font-semibold text-gray-900">
              <span>Total:</span>
              <span>${{ totalPrice.toFixed(2) }}</span>
            </div>

            <div class="flex space-x-3">
              <button
                @click="cart.clearCart()"
                class="flex-1 bg-coffee-light text-white px-4 py-3 rounded-lg  transition"
              >
                Clear Cart
              </button>
              <NuxtLink
                to="/checkout"
                class="flex-1 bg-coffee-dark text-white px-4 py-3 rounded-lg  transition text-center"
              >
                Checkout
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </transition>

     
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ShoppingCart, Trash  } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const showCart = ref(false)
const isOpen = ref(false)


function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(value)
}

const totalItems = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity, 0)
)
const totalPrice = computed(() =>
  cart.items.reduce((sum, item) => sum + item.quantity * item.product.price, 0)
)
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>