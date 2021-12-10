import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showModal: false,
        quantity: 0,
        quantityMin: 1,
        quantityMax: 5,
        incIsDisabled: false,
        decIsDisabled: false,
        stepIncr: 1,
        stepDecr: -1,
        isActiveCart: false,
        isActiveMenu: false,
        isCartNotEmpty: true,
        totalPrice: 0,
        itemPrice: 125.00,
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
        toggleMenu(state) {
            state.isActiveMenu = !state.isActiveMenu
        },
        addToCart(state, payload) {
            state.totalPrice = payload.value
        },
        isCartEmpty(state, payload) {
            state.isCartNotEmpty = payload.value

        }
    },
    actions: {
        increment({ commit, state }, payload) {
            commit('decrementDisabled', { value: false })
            const currQuantity = state.quantity =
                state.quantity === state.quantityMax ?
                state.quantityMax :
                state.quantity + payload.amount;
            commit('increment', currQuantity)
            const disableState = currQuantity === state.quantityMax ? true : false;
            commit('incrementDisabled', { value: disableState })
        },
        decrement({ commit, state }, payload) {
            commit('incrementDisabled', { value: false })
            const currQuantity = state.quantity =
                state.quantity === state.quantityMin ?
                state.quantityMin :
                state.quantity - payload.amount;
            commit('decrement', currQuantity)
            const disabledState = currQuantity === state.quantityMin ? true : false;
            commit('decrementDisabled', { value: disabledState })
        },
        addToCart({ commit, state }) {
            console.log('activated btn')
            const total = state.totalPrice += state.itemPrice * state.quantity
            commit('addToCart', { value: total })
            commit('isCartEmpty', { value: false })
                // state.isActiveCart = payload.value
            localStorage.setItem('product-quantity', state.quantity)
            localStorage.setItem('total-cart-price', state.totalPrice)
                // context.commit('addToCart', payload);
        },
        deleteCartItem({ commit }) {
            commit('isCartEmpty', { value: true })
            commit('addToCart', { value: 0 })
        }
    },
    getters: {
        showModal: state => state.showModal,
        isActiveCart: state => state.isActiveCart,
        totalPrice: state => state.totalPrice,
        isCartNotEmpty: state => state.isCartNotEmpty,
    },
});