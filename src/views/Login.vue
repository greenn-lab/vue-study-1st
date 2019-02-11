<template>
  <v-container fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12>
        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>LOGIN</v-toolbar-title>
          </v-toolbar>
          <div class="pa-3">
            <v-text-field v-model="email" label="type your email" />
            <v-text-field
              v-model="password"
              type="password"
              label="type your password"
            />
            <v-btn @click="login()" large block color="primary" depressed>
              ENTER
            </v-btn>
          </div>
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
          email: 'skinnerbullock@wrapture.com',
          password: 'Norman'
        }
      ]
    }
  },
  methods: {
    login() {
      // TODO find user by input email in users
      const { email, users } = this
      const selectedUser = users.find(user => user.email === email)

      // todo That user matches password
    }
  }
}
</script>
