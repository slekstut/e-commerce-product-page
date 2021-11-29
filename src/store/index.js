import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showModal: false,
        quantity: 1,
        quantityMin: 1,
        quantityMax: 5,
        incIsDisabled: false,
        decIsDisabled: false,
        stepIncr: 1,
        stepDecr: -1,
    },
    mutations: {
        toggleModal(state) {
            state.showModal = !state.showModal
        },
        increment(state, payload) {
            state.decIsDisabled = false;
            state.quantity =
                state.quantity === 5 ?
                5 :
                state.quantity + payload.amount;
            state.incIsDisabled = state.quantity === 5 ? true : false;
            // return state.quantity = state.quantity + payload.amount
        },
        decrement(state, payload) {
            state.incIsDisabled = false;
            state.quantity =
                state.quantity === 1 ?
                1 :
                state.quantity - payload.amount;
            state.decIsDisabled = state.quantity === 1 ? true : false;
        },
    },
    actions: {
        increment(context, payload) {
            context.commit('increment', payload)
        },
        decrement(context, payload) {
            context.commit('decrement', payload)
        }
    },
    getters: {
        showModal: state => state.showModal
    },
});