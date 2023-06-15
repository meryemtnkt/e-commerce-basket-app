import axios from 'axios';
export function fetchListings() {
    return axios.get('https://nonchalant-fang.glitch.me/listing');
}
export function createOrder(data) {
    return axios.post('https://nonchalant-fang.glitch.me/order',data);
}