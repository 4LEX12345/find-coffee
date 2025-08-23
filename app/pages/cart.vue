<template>
  <div>
    <h2>Cart</h2>
    <ul>
      <li v-for="(item, index) in cart.items" :key="index">
        {{ item.product.name }} - {{ item.size }} x {{ item.quantity }}
        <button @click="cart.removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <button @click="cart.clearCart">Clear Cart</button>
  </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const cart = useCartStore()
</script>
