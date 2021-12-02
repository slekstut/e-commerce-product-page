<template>
  <div>
    <div class="content__wrapper">
      <PreviewModal></PreviewModal>
      <div class="content__inner">
        <div class="preview__content">
          <div class="preview__main" @click="openModal">
            <img
              :src="require(`../assets/img/image-product-${mainPicture}.jpg`)"
              alt="`product-${mainPicture}`"
            />
          </div>
          <div class="preview__thumbnail">
            <div v-for="thumbnail in thumbnails" :key="thumbnail">
              <div :class="{ selected: thumbnail == activeThumbnail }">
                <div class="img-container" @click="showSelected(thumbnail)">
                  <img
                    :src="
                      require(`../assets/img/image-product-${thumbnail}-thumbnail.jpg`)
                    "
                    alt="`product-${thumbnail}-thumbnail`"
                  />
                </div>
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
            <div class="spaced-between">
              <div class="description__price">
                <h2>$125.00</h2>
                <p>50%</p>
              </div>
              <h4>$250.00</h4>
            </div>
              <QuantityInput></QuantityInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewModal from "../components/PreviewModal.vue";
import QuantityInput from "../components/QuantityInput.vue";

export default {
  components: {
    PreviewModal,
    QuantityInput,
  },
  data() {
    return {
      thumbnails: 4,
      activeThumbnail: 2,
      mainPicture: 1,
    };
  },
  methods: {
    openModal() {
      this.$store.commit("toggleModal");
    },
    showSelected(i) {
      this.activeThumbnail = i;
      this.mainPicture = i;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/main.scss";
</style>