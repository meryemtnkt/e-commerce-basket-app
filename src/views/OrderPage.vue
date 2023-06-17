<template>
  <div class="order-page">
    <h3 class="order-page__title">My cart ({{ uniqueProductCount }})</h3>
    <div class="order-page__list">
      <div v-if="orderMessage" class="message">
        {{ orderMessage }}
      </div>
      <div v-for="item in productItems" :key="item.id" class="order-card">
        <div class="order-card__button">
          <img :src="item.image" :alt="item.name" class="product-image" />
          <div class="quantity-container">
            <button
              class="btn decrement"
              :disabled="item.count === 1"
              @click="item.count--"
            >
              -
            </button>
            <input type="number" v-model.number="item.count" />
            <button class="btn increment" @click="item.count++">+</button>
          </div>
        </div>
        <div class="order-card__details">
          <h3>{{ item.name }}</h3>
          <p>{{ item.price }} {{ item.currency }}</p>
          <button class="btn remove" @click="handleRemoveItemClick(item)">
            Remove
          </button>
        </div>
      </div>
    </div>
    <div class="order-bottom-div">
      <button class="btn back" @click="handleGoBackClick">
        Continue Shopping
      </button>
      <button class="btn order-by" @click="handlePlaceOrderClick">
        Place order
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useProductStore } from "@/store";
import router from "@/router.js";

const orderMessage = computed(() => useProductStore().orderMessage);
const productItems = computed(() => useProductStore().productItems);
const uniqueProductCount = computed(
  () => useProductStore().productItems.length
);

const handleGoBackClick = () => {
  router.push("/");
};
const handlePlaceOrderClick = async () => {
  const orderItems = productItems.value.map((item) => {
    return { id: item.id, amount: item.count };
  });
  await useProductStore().placeOrder(orderItems);
};
const handleRemoveItemClick = async (item) => {
  if (orderMessage.value) {
    await useProductStore().clearOrderMessage();
  }
  const index = productItems.value.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    productItems.value.splice(index, 1);
  }
};
</script>

<style scoped></style>
