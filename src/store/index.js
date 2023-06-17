import { defineStore } from "pinia";
import { fetchListings, createOrder } from "@/services/index.js";

export const useProductStore = defineStore("product", {
  state: () => ({
    productList: [],
    productItems: [],
    orderMessage: null,
  }),
  getters: {},
  actions: {
    async fetchList() {
      const response = await fetchListings();
      this.productList = response.data;
    },
    async addToCart(product) {
      this.orderMessage = null;
      const existingProduct = this.productItems.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.count += 1;
      } else {
        this.productItems.push({ ...product, count: 1 });
      }
    },
    async clearProduct() {
      this.productItems = [];
    },
    async clearOrderMessage() {
      this.orderMessage = null;
    },
    async placeOrder(orderItems) {
      try {
        await createOrder(orderItems);
        this.orderMessage = "Siparişiniz başarılı bir şekilde tamamlandı.";
        this.clearProduct();
      } catch (error) {
        if (error.response && error.response.status === 404) {
          this.orderMessage =
            "Üzgünüz, sepetinizdeki bazı ürünler stokta bulunmamaktadır.";
        } else {
          this.orderMessage =
            "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.";
        }
      }
    },
  },
});
