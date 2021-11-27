import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        showModal: true
    },
    mutations: {
        closeModal(state) {
            state.showModal = !state.showModal
        }
    },
    actions: {},
    getters: {
        showModal: state => state.showModal
    },
});