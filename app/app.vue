<template>
  <div class="font-body text-gray-800">
    <header class="fixed w-full top-0 text-white px-4 py-6 z-50 md:bg-transparent bg-black/40">
      <nav class="md:px-10 mx-auto flex justify-between items-center">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-sm space-x-10 bg-black/40 px-10 py-2 rounded-full backdrop-blur-xl"
        >
          Find.Coffee
        </NuxtLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-10 bg-black/40 px-10 py-4 rounded-full backdrop-blur-xl">
          <NuxtLink to="/" class="hover:text-coffee-light text-sm">Home</NuxtLink>
          <NuxtLink to="/menu" class="hover:text-coffee-light text-sm">Products</NuxtLink>
          <NuxtLink to="/about" class="hover:text-coffee-light text-sm">About</NuxtLink>
          <NuxtLink to="/contact" class="hover:text-coffee-light text-sm">Contact</NuxtLink>
        </div>

        <!-- Cart Button -->
        <div class="relative">
          <button @click="showCart = true" class="relative p-2 rounded-full hover:bg-black/20 transition">
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
    </header>

    <!-- Page content -->
    <NuxtPage />

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
            <li v-for="(item, index) in cart.items" :key="index" class="py-4 flex justify-between items-center">
              <div class="flex items-center space-x-3">
                <img :src="item.product.image" alt="" class="w-16 h-16 rounded-lg object-cover" />
                <div>
                  <p class="font-medium text-gray-900">{{ item.product.name }}</p>
                  <p class="text-sm text-gray-500">{{ item.size }} x {{ item.quantity }}</p>
                </div>
              </div>
              <button @click="cart.removeFromCart(index)" class="text-red-500 hover:text-red-600 text-sm font-semibold">
                Remove
              </button>
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
                class="flex-1 bg-red-500 text-white px-4 py-3 rounded-lg hover:bg-red-600 transition"
              >
                Clear Cart
              </button>
              <NuxtLink
                to="/checkout"
                class="flex-1 bg-yellow-500 text-black px-4 py-3 rounded-lg hover:bg-yellow-600 transition text-center"
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
import { ShoppingCart } from 'lucide-vue-next'
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
const showCart = ref(false)

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
