<!--suppress ALL -->
<template>
  <v-container fill-height>
    <v-layout align-center justify-center row wrap>
      <v-flex xs12 md6 lg8>
        <v-alert type="error" :value="isLoginError" class="mb-3"
          >Your account was wrong.
        </v-alert>

        <v-card>
          <v-toolbar flat>
            <v-toolbar-title>LOGIN</v-toolbar-title>
          </v-toolbar>
          <form class="pa-3" @submit.prevent="login({ email, password })">
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
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  computed: {
    ...mapState(['isLogin', 'isLoginError'])
  },
  methods: {
    ...mapActions(['login'])
  }
}
</script>
