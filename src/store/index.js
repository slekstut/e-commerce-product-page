import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        product: {
            company: "Sneaker Company",
            title: "Fall Limited Edition Sneakers",
            description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
            price: 125.00,
            discount: 50,
            priceBefore: 250.00,
            stock: 5,
            thumbnails: 4,

        },
        showModal: false,
        incIsDisabled: false,
        decIsDisabled: false,
        isActiveCart: false,
        isActiveMenu: false,
        quantity: 1,
        quantityMin: 1,
        stock: 5,
        isCartNotEmpty: true,
        totalPrice: 0,
        itemPrice: 125.00,
        cartItemQuantity: 0,
        error: ''
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal
        },
        increment(state, currQuantity) {
            state.quantity = currQuantity
        },
        incrementDisabled(state, payload) {
            state.incIsDisabled = payload.value
        },
        decrement(state, currQuantity) {
            state.quantity = currQuantity
        },
        decrementDisabled(state, payload) {
            state.decIsDisabled = payload.value
        },
        toggleCart(state) {
            state.isActiveCart = !state.isActiveCart;
        },
        hideOnClickAway(state, payload) {
            state.isActiveCart = payload.value;
        },
        toggleMenu(state) {
            state.isActiveMenu = !state.isActiveMenu
        },
        addToCart(state, payload) {
            state.totalPrice = payload.value
        },
        isCartEmpty(state, payload) {
            state.isCartNotEmpty = payload.value
        },
        cartItemQuantity(state, payload) {
            state.cartItemQuantity = payload.value
        },
        displayError(state, payload) {
            state.error = payload.value
        },
        currQuantityValue(state, payload) {
            state.quantity = payload.quantity
        },
        stockCount(state, stockQuantity) {
            state.stock = stockQuantity.value
        }
    },
    actions: {
        increment({ commit, state }, payload) {
            commit('decrementDisabled', { value: false })
            if (state.stock > 0) {
                const currQuantity = state.quantity =
                    state.quantity === state.stock ?
                    state.stock :
                    state.quantity + payload.amount;
                commit('increment', currQuantity)
                const disableState = currQuantity === state.stock ? true : false;
                commit('incrementDisabled', { value: disableState })
            }

        },
        decrement({ commit, state }, payload) {
            commit('incrementDisabled', { value: false })
            if (state.stock <= state.stock) {
                const currQuantity = state.quantity =
                    state.quantity === state.quantityMin ?
                    state.quantityMin :
                    state.quantity - payload.amount;
                commit('decrement', currQuantity)
                const disabledState = currQuantity === state.quantityMin ? true : false;
                commit('decrementDisabled', { value: disabledState })
            }

        },
        addToCart({ commit, state }) {
            if (state.stock > 0) {
                const totalItemsInCart = state.cartItemQuantity += state.quantity;
                state.stock = state.stock - state.quantity;
                commit('cartItemQuantity', { value: totalItemsInCart })
                commit('currQuantityValue', { quantity: 1 })
            } else {
                commit('currQuantityValue', { quantity: 0 })
                commit('decrementDisabled', { value: true })
                console.log(`Out Of Stock, max available ${state.stock}`)
                return commit('displayError', { value: `Out Of Stock, max available ${state.stock}`, quantity: 0 });
            }
            let total = 0;
            total = state.itemPrice * state.cartItemQuantity;
            commit('addToCart', { value: total })
            commit('isCartEmpty', { value: false })
        },
        deleteCartItem({ commit }) {
            commit('isCartEmpty', { value: true })
            commit('cartItemQuantity', { value: 0 })
            commit('displayError', { value: '' });
            commit('incrementDisabled', { value: false })
            commit('stockCount', { value: 5 })
            commit('addToCart', { value: 0 })
            commit('currQuantityValue', { quantity: 1 })
        }
    },
    getters: {
        product: state => state.product,
        showModal: state => state.showModal,
        isActiveCart: state => state.isActiveCart,
        isActiveMenu: state => state.isActiveMenu,
        totalPrice: state => state.totalPrice,
        isCartNotEmpty: state => state.isCartNotEmpty,
        cartItemQuantity: state => state.cartItemQuantity,
        displayError: state => state.error,
        showQuantity: state => state.quantity,
        incIsDisabled: (state) => state.incIsDisabled,
        decIsDisabled: (state) => state.decIsDisabled,
    },
});