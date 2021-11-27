import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        activeModal: false
    },
    mutations: {
        isActiveModal(state, payload) {
            state.activeModal = payload.activeModal
        }
    },
    actions: {},
    getters: {
        isActiveModal: state => state.activeModal
    },
});