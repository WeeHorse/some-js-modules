Vue.component('product', ProductComponent);
Vue.component('hello', HelloComponent);
Vue.component('registration', RegistrationComponent);
Vue.component('login', LoginComponent);
Vue.component('cart-item', CartItemComponent);
Vue.component('cart', CartComponent);

const http = axios; // using axios 3rd party XHR/REST lib

// the app
let app = new Vue({
  el: "#app",
  created(){
    // ladda in litta data
    http.get('/rest/products/').then(response => {
      console.log('products', response.data)
      this.products = response.data;
    }).catch(e => {
      console.error(e);
    });
  },
  data(){
    return {
      products: []
    }
  }
});
