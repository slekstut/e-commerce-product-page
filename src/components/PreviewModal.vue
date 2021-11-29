<template>
  <div v-if="showModal">
    <div class="preview__modal">
      <div class="preview__wrapper">
        <div class="preview__container">
          <div class="preview__main">
            <img src="../assets/img/image-product-1.jpg" alt="product-1" />
            <div
              class="preview__container-close"
              @click="closeModal"
            >
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
            </div>
            <div class="backwards">
              <svg
                class="left-arrow"
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 1 3 9l8 8" fill-rule="evenodd" />
              </svg>
            </div>
            <div class="forwards">
              <svg
                class="right-arrow"
                width="13"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m2 1 8 8-8 8" fill="none" fill-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="preview__thumbnail">
            <div class="selected">
              <div class="img-container">
                <img
                  src="../assets/img/image-product-1-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
            <div class="background-white">
              <div class="img-container">
                <img
                  src="../assets/img/image-product-2-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
            <div class="background-white">
              <div class="img-container">
                <img
                  src="../assets/img/image-product-3-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
            <div class="background-white">
              <div class="img-container">
                <img
                  src="../assets/img/image-product-4-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
      closeModal() {
          this.$store.commit('toggleModal');
      }
  },
  computed: {
      showModal() {
          return this.$store.state.showModal;
      }
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/previewmodal.scss";
</style>