<!--suppress ALL -->
<template>
  <v-container fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md6 lg8>

        <v-alert type="error" :value="isError" class="mb-3">Your account was wrong.</v-alert>

        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>LOGIN</v-toolbar-title>
          </v-toolbar>
          <form class="pa-3" @submit.prevent="login()">
            <v-text-field v-model="email" label="type your email" />
            <v-text-field
              v-model="password"
              type="password"
              label="type your password"
            />
            <v-btn type="submit" large block color="primary" depressed>
              ENTER
            </v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      isError: false,
      users: [
        {
          id: 0,
          name: 'Bradford Hoffman',
          email: 'bradfordhoffman@wrapture.com',
          password: 'Hill'
        },
        {
          id: 1,
          name: 'Cleo Rivas',
          email: 'cleorivas@wrapture.com',
          password: 'Mccarty'
        },
        {
          id: 2,
          name: 'Monique Buckley',
          email: 'moniquebuckley@wrapture.com',
          password: 'Wall'
        },
        {
          id: 3,
          name: 'Jeanette Barlow',
          email: 'jeanettebarlow@wrapture.com',
          password: 'Roth'
        },
        {
          id: 4,
          name: 'Deidre Stokes',
          email: 'deidrestokes@wrapture.com',
          password: 'Clayton'
        },
        {
          id: 5,
          name: 'Skinner Bullock',
          email: 'skinnerbullock@wrapture.,zcom',
          password: 'Norman'
        }
      ]
    }
  },
  methods: {
    login() {
      const { email, password, users } = this
      const selectedUser = users.find(user => user.email === email)

      if (selectedUser && selectedUser.password === password) {
        this.isError = false
      } else {
        this.isError = true
      }

      console.log(this.isError)
    }
  }
}
</script>
