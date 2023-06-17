<template>
  <div class="product-card">
    <img :src="imageUrl" alt="product-img" class="product-card__image" />
    <h3 class="product-card__title">{{ name }}</h3>
    <div class="product-card__action">
      <span class="price">{{ price }} {{ currency }}</span>
      <button class="btn add" @click="addToCart">Add Basket</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  imageUrl: String,
  name: String,
  price: String,
  currency: String,
});

const emit = defineEmits(["addToCart"]);

const addToCart = () => {
  const product = {
    imageUrl: props.imageUrl,
    name: props.name,
    price: props.price,
    currency: props.currency,
  };
  emit("addToCart", product);
};
</script>

<style scoped></style>
