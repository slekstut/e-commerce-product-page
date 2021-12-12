<template>
  <div>
    <div class="content__wrapper">
      <PreviewModal></PreviewModal>
      <div class="content__inner">
        <div class="preview__content">
          <div class="preview__main" @click="openModal">
            <div v-for="pic in product.thumbnails" v-show="pic == active" :key="pic">
              <img
                class="main__image"
                :src="require(`../assets/img/image-product-${pic}.jpg`)"
              />
            </div>
            <div class="backwards" @click="move(-1)">
              <svg
                class="left-arrow"
                width="12"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11 1 3 9l8 8" fill-rule="evenodd" />
              </svg>
            </div>
            <div class="forwards" @click="move(1)">
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
            <div v-for="thumbnail in product.thumbnails" :key="thumbnail">
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
              <h3>{{ product.company }}</h3>
              <h1>{{ product.title }}</h1>
              <p>
                {{ product.description }}
              </p>
            </div>
          </div>
          <div class="description__options">
            <div class="spaced-between">
              <div class="description__price">
                <h2>$ {{ parseFloat(product.price).toFixed(2) }}</h2>
                <p>{{ product.discount }}%</p>
              </div>
              <h4>${{ parseFloat(product.priceBefore).toFixed(2) }}</h4>
            </div>
            <QuantityInput></QuantityInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PreviewModal from "../components/PreviewModal.vue";
import QuantityInput from "../components/QuantityInput.vue";

export default {
  components: {
    PreviewModal,
    QuantityInput,
  },
  data() {
    return {
      activeThumbnail: 1,
      active: 1,
      slides: 4,
    };
  },
  methods: {
    openModal() {
      this.$store.commit("toggleModal");
    },
    showSelected(i) {
      this.activeThumbnail = i;
      this.active = i;
    },
    move(amount) {
      let newActive;
      const newIndex = this.active + amount;
      if (newIndex > this.slides) newActive = 1;
      if (newIndex === 0) newActive = this.slides;
      this.active = newActive || newIndex;
    },
  },
  computed: {
    ...mapGetters({
      product: 'product'
    })
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/main.scss";
</style>