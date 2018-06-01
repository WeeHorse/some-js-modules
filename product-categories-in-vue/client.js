// page components (whole views)
Vue.component('product-page', ProductPageComponent);

// "normal" components (partials)
Vue.component('nav-menu', MenuComponent);
Vue.component('product', ProductComponent);
Vue.component('category', CategoryComponent);

const http = axios; // using axios 3rd party XHR/REST lib

// Configure the router:
// about the VueRouter: https://www.liquidlight.co.uk/blog/article/building-a-vue-v2-js-app-using-vue-router/
const router = new VueRouter({
  mode: 'history', // html5 popstate, alternatively: 'hash'
  base: '/', // set the correct base
  routes: [ // our frontend routes
    { path: '/', component: ProductPageComponent },
    { path: '/products/:category?', component: ProductPageComponent }
  ]
});

// the app
let app = new Vue({
  el: "#app",
  router // add the router to the app
});
