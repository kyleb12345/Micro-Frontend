import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow';

console.log('container');

productsMount(document.querySelection('#my-products'));
cartMount(document.querySelection('#my-cart'));