<template>
  <div v-if="showModal">
    <div class="preview__modal">
      <div class="preview__wrapper">
        <div class="preview__container">
          <div class="preview__main">
          <transition-group tag="div" name="slide-fade" class="transition-group">
            <div v-for="pic in product.thumbnails" v-show="pic == active" :key="pic">
              <img
                class="main__image card"
                :src="require(`../assets/img/image-product-${pic}.jpg`)"
              />
            </div>
            </transition-group>
            <div class="preview__container-close" @click="closeModal">
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                  fill="#69707D"
                  fill-rule="evenodd"
                />
              </svg>
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
              <div :class="{ selected: thumbnail == active }">
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
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      active: 1,
      slides: 4,
    };
  },
  methods: {
    closeModal() {
      this.$store.commit("toggleModal");
    },
    move(amount) {
      let newActive;
      const newIndex = this.active + amount;
      if (newIndex > this.slides) newActive = 1;
      if (newIndex === 0) newActive = this.slides;
      this.active = newActive || newIndex;
    },
    showSelected(i) {
      this.active = i;
    },
  },
  computed: {
    ...mapGetters({
      product: 'product'
    }),
    showModal() {
      return this.$store.state.showModal;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@import "../assets/styles/previewmodal.scss";
</style>