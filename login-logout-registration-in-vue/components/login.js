const LoginComponent = {
  template: `
    <div>
      <div v-if="user.email">
        <h1>Welcome {{user.email}}!</h1>
        <button v-on:click="logout" :disabled="loading">Logout</button>
      </div>
      <form v-else @submit.prevent="submit">
        <label>Email
          <input type="text" v-model="email" :disabled="loading" />
        </label>
        <label>Password
          <input type="password" v-model="password" :disabled="loading" />
        </label>
        <button type="submit" :disabled="loading">Login</button>
        <br/>
        <span v-if="message">{{message}}</span>
      </form>
    </div>
  `,
  data() {
    return {
      email: '',
      password: '',
      message: '',
      loading: false,
      user: {}
    };
  },
  created(){
    http.get('/rest/user').then(response => {
      console.log('response', response);
      this.user = response.data;
    }).catch(e => {
      console.error(e);
    });
  },
  methods: {
    submit() { // login
      this.loading = true;
      http.post('/rest/login', {
        email: this.email,
        password: this.password,
      }).then(response => {
        console.log(response);
        this.loading = false;
        if(response.data.user) {
          this.message = response.data.message;
          this.user = response.data.user;
        } else {
          this.message = 'Incorrect email/password';
        }
      }).catch(error => {
        this.loading = false;
        this.message = 'Already logged in';
      });
    },
    logout() {
      this.loading = true;
      http.post('/rest/logout').then(response => {
        console.log(response);
        this.loading = false;
        this.message = response.data.message;
        this.user = {};
      }).catch(error => {
        this.loading = false;
        this.message = 'Already logged out';
      });
    }
  },
  watch: {
    email() {
      this.message = '';
    },
    password() {
      this.message = '';
    }
  }
}


