<template>
  <div class="product-card">
    <img :src="imageUrl" alt="product-img" class="product-card__image">
    <h3 class="product-card__title">{{ name }}</h3>
    <div class="product-card__action">
      <span class="price">{{ price }} {{ currency }}</span>
      <button  @click="emit('addToCart')">Add Basket</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const { emit } = defineEmits(['addToCart']);

const props = defineProps({
  imageUrl: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  currency: {
    type: String,
  },
});

</script>

<style scoped>
</style>
