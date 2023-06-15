import { defineStore } from 'pinia';
import { fetchListings, createOrder } from '@/services/index.js';

export const useProductStore = defineStore('product', {
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
            //kart ekleme kodlari
        },
    },
});
