<template>
  <div>
    <div class="content__wrapper">
    <PreviewModal v-if="activeModal"></PreviewModal>
      <div class="content__inner">
        <div class="preview__content">
          <div class="preview__main">
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
              <div class="input-group">
                <div>
                  <input
                    type="button"
                    value="-"
                    class="button-minus"
                    data-field="quantity"
                  />
                  <input
                    type="number"
                    step="1"
                    max=""
                    value="0"
                    name="quantity"
                    class="quantity-field"
                  />
                  <input
                    type="button"
                    value="+"
                    class="button-plus"
                    data-field="quantity"
                  />
                </div>
                <button>
                  <span
                    ><svg
                      width="23"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                        fill="#69707D"
                        fill-rule="nonzero"
                      /></svg></span
                  >Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewModal from "../components/PreviewModal.vue"
export default {
  components: {
    PreviewModal
  },
  data() {
    return {
      activeModal: true
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/main.scss";
</style>