<template>
  <div class="min-h-screen  text-white">
    <!-- Hero Section -->
    <section
      class="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
      style="background-image: url('/product.png')"
    >
      <div class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div class="relative z-10 text-center px-6 animate-fadeIn">
        <h1
          class="text-6xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg animate-slideUp"
        >
          Your Daily Brew,<br />Fresh & Handcrafted
        </h1>
        <p class="text-lg md:text-xl text-gray-200 mb-8 animate-slideUp delay-200">
          Explore artisan coffee and freshly baked delights.
        </p>
    
      </div>
    </section>

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
        <div class="p-6 flex flex-col justify-between h-48">
          <div>
            <h3 class="text-2xl font-semibold mb-1">{{ product.name }}</h3>
            <p class="text-gray-600 text-sm line-clamp-2">{{ product.description }}</p>
          </div>
          <div class="flex items-center justify-between mt-4">
            <span class="text-yellow-600 font-bold text-xl">${{ product.price }}</span>
            <button
              class="px-5 py-2 bg-gradient-to-r from-coffee-dark to-coffee-dark/80 text-white rounded-full text-sm hover:scale-110 hover:shadow-md transition-all duration-300"
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const products = ref([
  { id: 1, name: "Cappuccino", category: "Coffee", description: "Rich espresso topped with steamed milk foam.", price: 4.5, image: "https://picsum.photos/400/300?1" },
  { id: 2, name: "Caramel Latte", category: "Coffee", description: "Espresso with caramel and steamed milk.", price: 5.0, image: "https://picsum.photos/400/300?2" },
  { id: 3, name: "Blueberry Muffin", category: "Pastry", description: "Freshly baked muffin with sweet blueberries.", price: 2.8, image: "https://picsum.photos/400/300?3" },
  { id: 4, name: "Cold Brew", category: "Cold Drinks", description: "Smooth and refreshing cold brew coffee.", price: 4.2, image: "https://picsum.photos/400/300?4" },
]);

const search = ref("");
const category = ref("");
const categories = [...new Set(products.value.map(p => p.category))];

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
@keyframes fadeIn {
  from { opacity: 0 }
  to { opacity: 1 }
}
@keyframes slideUp {
  from { transform: translateY(30px); opacity: 0 }
  to { transform: translateY(0); opacity: 1 }
}
.animate-fadeIn {
  animation: fadeIn 1.2s ease-out forwards;
}
.animate-slideUp {
  animation: slideUp 1s ease-out forwards;
}
.delay-200 {
  animation-delay: 0.2s;
}
</style>
