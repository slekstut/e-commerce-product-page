<template>
  <div>
    <div class="content__wrapper">
    <PreviewModal></PreviewModal>
      <div class="content__inner">
        <div class="preview__content">
          <div class="preview__main" @click="openModal">
            <img src="../assets/img/image-product-1.jpg" alt="product-1" />
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
            <div>
              <div class="img-container">
                <img
                  src="../assets/img/image-product-2-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
            <div>
              <div class="img-container">
                <img
                  src="../assets/img/image-product-3-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
            <div class="img-container">
              <div>
                <img
                  src="../assets/img/image-product-4-thumbnail.jpg"
                  alt="product-1-thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="description__content">
          <div class="description__text">
            <div>
              <h3>Sneaker Company</h3>
              <h1>Fall Limited Edition Sneakers</h1>
              <p>
                These low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
              </p>
            </div>
          </div>
          <div class="description__options">
            <div>
              <div class="description__price">
                <h2>$125.00</h2>
                <p>50%</p>
              </div>
              <h4>$250.00</h4>
              <QuantityInput></QuantityInput>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewModal from "../components/PreviewModal.vue"
import QuantityInput from "../components/QuantityInput.vue"

export default {
  components: {
    PreviewModal,
    QuantityInput
  },
  data() {
    return {
    }
  },
  methods: {
    openModal() {
      this.$store.commit('toggleModal');
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/main.scss";
</style>