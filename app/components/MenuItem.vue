<template>
  <div class="bg-white shadow-md rounded-lg overflow-hidden">
    <img :src="image" :alt="name" class="w-full h-48 object-cover">
    <div class="p-4">
      <h3 class="font-heading text-xl">{{ name }}</h3>
      <p class="text-gray-600">{{ description }}</p>
      <span class="block mt-2 font-bold text-coffee">${{ price }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  description: String,
  price: Number,
  image: String
})
</script>
