<template>
  <div class="max-w-6xl mx-auto p-6 md:mt-0 mt-[100px]">
    <h1 class="text-3xl font-extrabold text-gray-900 text-center mb-8">Checkout</h1>

    <div class="flex flex-col lg:flex-row gap-8">
      <!-- Left: Order Summary -->
      <section class="flex-1 bg-white p-6 rounded-xl shadow-lg">
        <h2 class="text-xl font-semibold text-gray-800 mb-4">Your Order</h2>
        <ul class="divide-y divide-gray-200">
          <li v-for="(item, index) in cart.items" :key="index" class="flex justify-between py-4 items-start">
            <div>
              <p class="font-medium text-gray-900">{{ item.product.name }} ({{ item.quantity }})</p>
              <p class="text-sm text-gray-500 mt-1">
                {{ [capitalizeFirst(item.size), capitalizeFirst(item.milk), item.shots > 0 ? item.shots + ' shot(s)' : null, item.addons.length ? item.addons.join(', ') : null, capitalizeFirst(item.temperature)].filter(Boolean).join(' • ') }}
              </p>
              <p class="text-sm text-gray-500 mt-1">
                Note: {{ capitalizeFirst(item.instructions) }}
              </p>
            </div>
            <p class="font-semibold text-gray-900">{{ formatPrice(item.price * item.quantity) }}</p>
          </li>
        </ul>

        <div class="flex justify-between mt-6 font-bold text-lg text-gray-900 border-t pt-4">
          <span>Total:</span>
          <span>{{ formatPrice(cartTotal) }}</span>
        </div>
      </section>

      <!-- Right: Customer Info & Payment -->
        <section class="flex-1 bg-white p-6 rounded-2xl shadow-xl space-y-6">
        <!-- Customer Information -->
        <h2 class="text-2xl font-bold text-gray-800">Customer Information</h2>
        <div class="grid grid-cols-1 gap-4">
            <input v-model="customer.name" type="text" placeholder="Full Name" class="modern-input" />
            <input v-model="customer.email" type="email" placeholder="Email Address" class="modern-input" />
            <input v-model="customer.phone" type="tel" placeholder="Phone Number" class="modern-input" />
            <input v-model="customer.address" type="text" placeholder="Delivery Address" class="modern-input" />
        </div>

        <!-- Payment Method -->
        <h2 class="text-2xl font-bold text-gray-800 mt-6">Payment Method</h2>
        <div class="flex md:flex-row flex-col gap-4 mt-2">
            <button
            @click="paymentMethod = 'cash'"
            :class="buttonClass('cash')"
            class="px-4 py-3 text-sm rounded-xl font-semibold shadow-md transition transform hover:scale-105 flex items-center gap-2">
            <Banknote class="w-5 h-5" /> Cash on Delivery
            </button>

            <button
            @click="paymentMethod = 'gcash'"
            :class="buttonClass('gcash')"
            class="px-4 py-3 text-sm rounded-xl font-semibold shadow-md transition transform hover:scale-105 flex items-center gap-2">
             <TabletSmartphone  class="w-5 h-5"/> GCash
            </button>

            <button
            @click="paymentMethod = 'card'"
            :class="buttonClass('card')"
            class="px-4 py-3 text-sm rounded-xl font-semibold shadow-md transition transform hover:scale-105 flex items-center gap-2">
            <CreditCard class="w-5 h-5" /> Credit Card
            </button>
        </div>

        <!-- Place Order Button -->
        <button
            @click="placeOrder"
            class="w-full bg-yellow-500 text-white px-8 py-3 rounded-2xl shadow-lg hover:scale-105 hover:bg-yellow-600 transition transform duration-200 font-bold mt-6">
            Place Order
        </button>
        </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '~/stores/cart'
import { Banknote, CreditCard , TabletSmartphone  } from 'lucide-vue-next';

const cart = useCartStore()

const customer = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
})

const paymentMethod = ref('cash')

const cartTotal = computed(() => {
  return cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
})

function capitalizeFirst(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}


function formatPrice(value) {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(value)
}

function placeOrder() {
  if (!customer.value.name || !customer.value.email || !customer.value.address) {
    alert('Please fill in all required fields')
    return
  }

  const orderData = {
    customer: customer.value,
    paymentMethod: paymentMethod.value,
    items: cart.items,
    total: cartTotal.value,
    createdAt: new Date(),
  }

  

  console.log('Order placed:', orderData)
  alert('Order placed successfully!')

  cart.clearCart()
}

function buttonClass(method) {
  return paymentMethod.value === method
    ? 'bg-coffee-light text-white'
    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
}
</script>

<style scoped>
.modern-input {
  @apply w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition;
}
</style>
