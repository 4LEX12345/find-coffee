<template>
  <transition name="fade-scale">
    <div
      v-if="show"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    >
      <div class="bg-white rounded-3xl shadow-xl max-w-2xl w-full p-6 transform transition-transform overflow-auto max-h-[90vh]">
        
        <!-- Close Button -->
        <button
          @click="closeModal"
          class="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition text-xl font-bold"
        >
          ✕
        </button>

        <!-- Product Info -->
        <div class="flex flex-col md:flex-row gap-6">
          <!-- Image -->
          <img
            :src="defaultCoffee"
            :alt="product.name"
            class="w-full md:w-1/2 h-64 object-cover rounded-2xl"
          />

          <!-- Details -->
          <div class="flex-1 flex flex-col justify-between">
            <div>
              <h2 class="text-3xl font-bold mb-2 text-coffee-dark">{{ product.name }}</h2>
              <p class="text-gray-600 mb-2">{{ product.description }}</p>
              <p class="text-gray-500 text-sm mb-2">Category: {{ product.category }}</p>
              <p class="text-yellow-600 font-bold text-2xl mb-4">
                {{ formattedPrice }}
              </p>
            </div>

            <!-- Customization Options -->
            <div class="space-y-4">
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
                  <option value="small">Small (+0)</option>
                  <option value="medium">Medium (+₱20)</option>
                  <option value="large">Large (+₱40)</option>
                </select>
              </div>

              <!-- Extra Shots -->
              <div>
                <label class="font-medium text-gray-500">Shots:</label>
                <div class="flex gap-2 mt-2">
                  <button
                    v-for="shot in shots"
                    :key="shot"
                    @click="toggleShot(shot)"
                    :class="[
                      'px-3 py-1 border rounded-full text-sm',
                      selectedShots.includes(shot)
                        ? 'bg-yellow-500 text-white border-yellow-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-yellow-100'
                    ]"
                  >
                    {{ shot }}
                  </button>
                </div>
              </div>

              <!-- Milk -->
              <div>
                <label class="font-medium text-gray-500">Milk:</label>
                <select v-model="milk" class="text-gray-500 mt-1 px-3 py-2 border rounded-full w-full">
                  <option value="regular">Regular</option>
                  <option value="skim">Skim Milk</option>
                  <option value="soy">Soy</option>
                  <option value="oat">Oat</option>
                  <option value="almond">Almond</option>
                </select>
              </div>

              <!-- Syrups / Toppings -->
              <div>
                <label class="font-medium text-gray-500">Syrups / Toppings:</label>
                <div class="flex flex-wrap gap-2 mt-2">
                  <button
                    v-for="addon in addons"
                    :key="addon"
                    @click="toggleAddon(addon)"
                    :class="[
                      'px-3 py-1 border rounded-full text-sm',
                      selectedAddons.includes(addon)
                        ? 'bg-yellow-500 text-white border-yellow-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-yellow-100'
                    ]"
                  >
                    {{ addon }} - 15
                  </button>
                </div>
              </div>

              <!-- Ice / Hot -->
              <div>
                <label class="font-medium text-gray-500">Temperature:</label>
                <div class="flex gap-2 mt-2">
                  <button
                    v-for="temp in temperatures"
                    :key="temp"
                    @click="temperature = temp"
                    :class="[
                      'px-3 py-1 border rounded-full text-sm',
                      temperature === temp
                        ? 'bg-yellow-500 text-white border-yellow-500'
                        : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-yellow-100'
                    ]"
                  >
                    {{ temp }}
                  </button>
                </div>
              </div>

              <!-- Special Instructions -->
              <div>
                <label class="font-medium text-gray-500">Special Instructions:</label>
                <input
                  v-model="instructions"
                  type="text"
                  placeholder="e.g. Extra hot, no foam"
                  class="mt-1 px-3 py-2 border rounded-full w-full text-gray-500"
                />
              </div>
            </div>

            <!-- Add to Cart -->
            <button
              @click="addToCart"
              class="mt-6 w-full py-3 bg-coffee-dark text-white font-bold rounded-full  transition"
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
import { ref, computed, watch } from "vue"
import defaultCoffee from '../../public/default-coffee.png';
import { useCartStore } from "~/stores/cart"

const props = defineProps({
  show: Boolean,
  product: Object
})

const emit = defineEmits(["close"])

const cart = useCartStore()

// Quantity and size
const quantity = ref(1)
const size = ref("medium")
const milk = ref("regular")
const instructions = ref("")

// Options
const shots = ["Extra Shot", "Decaf"]
const selectedShots = ref([])

const addons = ["Vanilla Syrup", "Caramel", "Chocolate Drizzle", "Whipped Cream"]
const selectedAddons = ref([])

const temperatures = ["Hot", "Iced"]
const temperature = ref("Hot")

watch(() => props.product, () => {
  quantity.value = 1
  size.value = "small"
  milk.value = "regular"
  instructions.value = ""
  selectedShots.value = []
  selectedAddons.value = []
  temperature.value = "Hot"
})

const formattedPrice = computed(() => {
  if(!props.product) return ""
  let base = parseFloat(props.product.price.replace(/[^0-9.]/g, ""))
  // Size adjustment
  if(size.value === "medium") base += 20
  else if(size.value === "large") base += 40
  // Add-ons adjustment (optional, e.g. ₱15 per addon)
  base += (selectedShots.value.length + selectedAddons.value.length) * 15
  return `₱${base.toFixed(2)}`
})

function increase() { quantity.value++ }
function decrease() { if(quantity.value > 1) quantity.value-- }

function toggleAddon(addon) {
  if(selectedAddons.value.includes(addon)) {
    selectedAddons.value = selectedAddons.value.filter(a => a !== addon)
  } else {
    selectedAddons.value.push(addon)
  }
}

function toggleShot(shot) {
  if(selectedShots.value.includes(shot)) {
    selectedShots.value = selectedShots.value.filter(s => s !== shot)
  } else {
    selectedShots.value.push(shot)
  }
}

function addToCart() {

  cart.addToCart(
    props.product,
    quantity.value,
    size.value,
    milk.value,
    selectedShots.value,
    selectedAddons.value,
    temperature.value,
    instructions.value,
    parseFloat(formattedPrice.value.replace(/[^0-9.]/g, "")))

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
