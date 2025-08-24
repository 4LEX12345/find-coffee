import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [],
    }),
    actions: {
        addToCart(product, quantity = 1, size = 'medium', milk = 'regular', shots = [], addons = [], temperature = 'Hot', instructions = '', price = 0) {
            const existingIndex = this.items.findIndex(
                item =>
                    item.product.id === product.id &&
                    item.size === size &&
                    item.milk === milk &&
                    JSON.stringify(item.shots) === JSON.stringify(shots) &&
                    JSON.stringify(item.addons) === JSON.stringify(addons) &&
                    item.temperature === temperature &&
                    item.instructions === instructions
            )

            if (existingIndex > -1) {
                this.items[existingIndex].quantity += quantity
            } else {
                this.items.push({
                    product,
                    quantity,
                    size,
                    milk,
                    shots,
                    addons,
                    temperature,
                    instructions,
                    price
                })
            }
        },

        removeFromCart(index) {
            this.items.splice(index, 1)
        },

        clearCart() {
            this.items = []
        },

        updateQuantity(index, quantity) {
            if (this.items[index]) {
                this.items[index].quantity = quantity
            }
        }
    },
    getters: {
        totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) => state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
    }
})
