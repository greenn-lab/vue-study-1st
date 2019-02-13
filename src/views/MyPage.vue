<template>
  <div>
    <h1>Hello, {{ loginUser.name }} !</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['isLogin', 'loginUser'])
  }
}
</script>
