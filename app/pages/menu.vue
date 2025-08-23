<template>
  <div class="min-h-screen text-white">
    <!-- Hero Section -->
    <section
      class="relative md:h-[70vh] h-[50vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('/product.png')"
    >
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="relative z-10 text-center md:px-6 px-4 animate-fadeIn">
        <h1
          class="md:text-6xl text-4xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-slideUp"
        >
          Your Daily Brew,<br />Fresh & Handcrafted
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8 animate-slideUp delay-200">
          Explore artisan coffee and freshly baked delights.
        </p>
      </div>
    </section>

    <!-- Search & Filter -->
    <div class="max-w-7xl mx-auto px-6 pt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
      <!-- Search -->
      <div class="relative w-full md:w-1/3">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Search />
        </span>
        <input 
          v-model="search" 
          type="text" 
          placeholder="Search coffee..." 
          class="pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 text-gray-900 w-full shadow-sm hover:shadow-md transition"
        />
      </div>

      <!-- Category Filter -->
      <div class="relative w-full md:w-1/4">
        <span class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <Folder class="w-5 h-5" />
        </span>
        <select 
          v-model="category" 
          class="pl-12 pr-10 py-3 rounded-full border border-gray-200 bg-white text-gray-900 
                focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 
                w-full appearance-none shadow-sm hover:shadow-md transition cursor-pointer"
        >
          <option value="">All Categories</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
      </div>
    </div>

    <!-- Products Grid -->
    <section
      class="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="group bg-white text-gray-900 rounded-3xl shadow-lg overflow-hidden transform hover:-translate-y-3 hover:scale-[1.03] transition-all duration-500 relative"
      >
        <!-- Favorite Icon -->
        <button
          class="absolute top-4 right-4 bg-white/70 backdrop-blur-md rounded-full p-2 shadow hover:scale-110 transition"
        >
          ❤️
        </button>

        <!-- Image -->
        <div class="relative overflow-hidden">
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <span
            class="absolute top-3 left-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow"
          >
            {{ product.category }}
          </span>
        </div>

        <!-- Content -->
        <div class="p-6 flex flex-col justify-between">
          <div>
            <h3 class="text-2xl font-semibold mb-1">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm line-clamp-2">{{ product.description }}</p>
          </div>
          <div class="flex items-center justify-between mt-4">
            <span class="text-yellow-600 font-bold text-xl">${{ product.price }}</span>
            <button
              @click="openModal(product)"
              class="px-5 py-2 bg-gradient-to-r from-coffee-dark to-coffee-dark/80 text-white rounded-full text-sm hover:scale-110 hover:shadow-md transition-all duration-300"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Modal -->
    <ProductModal
      :show="showModal"
      :product="selectedProduct"
      @close="showModal = false"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Search, Folder } from 'lucide-vue-next';
import ProductModal from "../components/ProductModal.vue";

const products = ref([
  { id: 1, name: "Cappuccino", category: "Coffee", description: "Rich espresso topped with steamed milk foam.", price: 4.5, image: "https://picsum.photos/400/300?1" },
  { id: 2, name: "Caramel Latte", category: "Coffee", description: "Espresso with caramel and steamed milk.", price: 5.0, image: "https://picsum.photos/400/300?2" },
  { id: 3, name: "Blueberry Muffin", category: "Pastry", description: "Freshly baked muffin with sweet blueberries.", price: 2.8, image: "https://picsum.photos/400/300?3" },
  { id: 4, name: "Cold Brew", category: "Cold Drinks", description: "Smooth and refreshing cold brew coffee.", price: 4.2, image: "https://picsum.photos/400/300?4" },
]);

const search = ref("");
const category = ref("");
const categories = [...new Set(products.value.map(p => p.category))];

// Modal state
const showModal = ref(false);
const selectedProduct = ref(null);

function openModal(product) {
  selectedProduct.value = product;
  showModal.value = true;
}

function handleAddToCart({ product, quantity, size }) {
  console.log("Add to cart:", product.name, quantity, size);
  // Here you can push to a cart array or Vuex/store
}

const filteredProducts = computed(() => {
  return products.value.filter((p) => {
    return (
      (!search.value || p.name.toLowerCase().includes(search.value.toLowerCase())) &&
      (!category.value || p.category === category.value)
    );
  });
});
</script>

<style>
/* Simple animations */
@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
@keyframes slideUp { from { transform: translateY(30px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }
.animate-fadeIn { animation: fadeIn 1.2s ease-out forwards; }
.animate-slideUp { animation: slideUp 1s ease-out forwards; }
.delay-200 { animation-delay: 0.2s; }
</style>
