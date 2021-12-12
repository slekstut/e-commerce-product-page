<template>
  <div>
    <div class="input__group">
      <div class="input__container">
        <input
          @click="decrementCounter()"
          type="button"
          value="-"
          :class="{ 'decrease-disabled': decIsDisabled }"
          class="split-equal"
          data-field="quantity"
        />
        <input
          @keypress="validateNumber"
          type="number"
          step="1"
          :min="1"
          :max="5"
          v-model="setCurrentQuantity"
          name="quantity"
          class="quantity-field split-equal"
          onkeydown="return false"
        />
        <input
          @click="incrementCounter()"
          type="button"
          value="+"
          :class="{ 'increase-disabled': incIsDisabled }"
          class="split-equal"
          data-field="quantity"
        />
      </div>
      <div @click="addItemsToCart">
      <submit-button class="add-to-cart">
        <span
          ><svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#69707D"
              fill-rule="nonzero"
            /></svg></span
        >Add to cart
      </submit-button>
      <div class="error" v-if="errors">{{errors}} error</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import SubmitButton from "../base/SubmitButton.vue";

export default {
  components: {
    SubmitButton,
  },
  data() {
    return {};
  },
  methods: {
    incrementCounter() {
      this.$store.dispatch("increment", { amount: 1 });
    },
    decrementCounter() {
      this.$store.dispatch("decrement", { amount: 1 });
    },
    validateNumber: (event) => {
      let keyCode = event.keyCode;
      if (keyCode < 48 || keyCode > 57) {
        event.preventDefault();
      }
    },
    addItemsToCart() {
      this.$store.dispatch('addToCart');
    }
  },
  computed: {
    ...mapState({
    incIsDisabled: (state) => state.incIsDisabled,
    decIsDisabled: (state) => state.decIsDisabled,
  }),
  ...mapGetters({
    errors: 'displayError',
    setCurrentQuantity: 'showQuantity'
  })
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/styles/quantityinput.scss";
</style>