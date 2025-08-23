<template>
  <transition name="fade-scale">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white rounded-3xl shadow-xl max-w-lg w-full p-6 relative transform transition-transform"
      >
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition"
        >
          ✕
        </button>

        <!-- Product Info -->
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Image -->
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full md:w-1/2 h-56 object-cover rounded-2xl"
          />

          <!-- Details -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h2 class="text-3xl font-bold mb-2 text-coffee-dark">{{ product.name }}</h2>
              <p class="text-coffee-light mb-4">{{ product.description }}</p>
              <span class="text-yellow-600 font-bold text-2xl">${{ product.price }}</span>
            </div>

            <!-- Options -->
            <div class="mt-4 flex flex-col gap-3">
              <!-- Quantity -->
              <div class="flex items-center gap-2">
                <label class="font-medium text-gray-500">Quantity:</label>
                <button @click="decrease" class="px-3 py-1 bg-gray-200 text-gray-500 rounded-full hover:bg-gray-300">-</button>
                <span class="px-2 text-gray-500">{{ quantity }}</span>
                <button @click="increase" class="px-3 py-1 bg-gray-200 rounded-full text-gray-500 hover:bg-gray-300">+</button>
              </div>

              <!-- Size -->
              <div>
                <label class="font-medium text-gray-500">Size:</label>
                <select v-model="size" class="text-gray-500 mt-1 px-3 py-2 border rounded-full w-full">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>

            <!-- Add to Cart -->
            <button
              @click="addToCart"
              class="mt-6 w-full py-3 bg-yellow-600 text-white font-bold rounded-full hover:bg-yellow-500 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue"
import { useCartStore } from "~/stores/cart"

const props = defineProps({
  show: Boolean,
  product: Object
})

const emit = defineEmits(["close"])

const quantity = ref(1)
const size = ref("medium")

const cart = useCartStore()

function increase() {
  quantity.value++
}

function decrease() {
  if (quantity.value > 1) quantity.value--
}

function addToCart() {
  cart.addToCart(props.product, quantity.value, size.value)
  emit("close")
}

function closeModal() {
  emit("close")
}
</script>

<style>
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
.fade-scale-enter-to,
.fade-scale-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>
