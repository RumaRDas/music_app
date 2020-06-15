<template>
<div class="container">
<v-layout coloumn>
  <v-flex xs6 offset-xs3>
    <div class="white elevation-2">
<v-toolbar flat dense class="cyan" dark>
<v-toolbar-title>Register</v-toolbar-title>
</v-toolbar>
<div class="pl-4 pr-2 pt-2 p-2">
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <br />
    <div v-html="error" class="error"></div>
      <v-btn class="cyan" @click="register">Register</v-btn>
</div>
    </div>
  </v-flex>
</v-layout>
</div>

</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
.error{
  color: red;
}
</style>
