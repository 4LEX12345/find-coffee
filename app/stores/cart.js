import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions: {
        addToCart(product, quantity = 1, size = 'medium') {
            this.items.push({ product, quantity, size })
        },
        removeFromCart(index) {
            this.items.splice(index, 1)
        },
        clearCart() {
            this.items = []
        },
    },
})
