const ProductPageComponent = {

  template: `
    <div class="row">
      <hello class="col-6"></hello>
      <cart class="col-6"></cart>
      <h1 class="col-12">Product page</h1>
      <!-- here be items -->
      <product class="col-3"
            v-for="item in filteredProducts"
            v-bind:item="item"
            v-bind:key="item._id">
      </product>
    </div>
  `,
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
      products: [],
      searchString: ''
    }
  },
  computed:{
    filteredProducts: function(){
      return this.products.filter((product)=>{
        if(!this.$route.params.category){
          return true; // if no category selected, do not filter
        }
        for(let category of product.categories){
          if(category.name == this.$route.params.category){
            return true; // found matching category
          }
        }
      });
    }
  }
}