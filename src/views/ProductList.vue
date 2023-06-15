<template>
  <h3>E-commerce Basket App</h3>
  <div v-if="isLoading" class="spinner">
    <div class="spinner__circle"></div>
  </div>
  <div  class="product-list">
    <product-card
        v-for="item in list"
        :key="item.id"
        :image-url="item.image"
        :name="item.name"
        :price="item.price"
        :currency="item.currency"
        @addToCart="addToCart({ ...item })"
    />
  </div>
</template>

<script setup>
import {onMounted, computed, ref} from "vue"
import {useProductStore} from "@/store"
import ProductCard from "@/components/ProductCard.vue";
import router from '@/router.js';



const isLoading = ref(true)

const list = computed(() => {
  const productList = useProductStore().productList;
  isLoading.value = false;
  return productList;
})

const addToCart = async (product)=> {
  await useProductStore().addToCart(product)
  await router.push('/order');
}
onMounted(async () => {
  await useProductStore().fetchList()
})
</script>

<style scoped>

</style>