const MenuComponent = {

  template: `
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Hem</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/products">Produkter</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/register">Registrera dig</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/login">Logga in</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/logout">Logga ut</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">Admin</router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Categories</a>
        <div class="dropdown-menu">
          <router-link class="dropdown-item" to="/products">All</router-link>
          <category class="dropdown-item"
            v-for="item in categories"
            v-bind:item="item"
            v-bind:key="item._id">
          </category>
        </div>
      </li>
    </ul>
  `,
  data() {
    return {
      categories:[]
    };
  },
  async created(){

    // async await syntax
    let categories = await http.get('/rest/categories');
    if(categories.data){
      this.categories = categories.data;
    }

  }
}