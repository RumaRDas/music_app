<template>
 <v-container>
<v-row  class="mb-6" justify="center" no-gutters>
   <v-card class="elevation-16 mx-auto" width="40%">
 <v-flex >
    <div class="white elevation-2">
<v-toolbar  dense color="cyan" dark>
<v-toolbar-title>Register</v-toolbar-title>
</v-toolbar>
<div class="pl-4 pr-4 pt-2 pb-2">
  <v-text-field label="Email" v-model="email" ></v-text-field>
    <br />
     <v-text-field label="Password" v-model="password" ></v-text-field>
    <br />
    <div v-html="error" class="error"></div>
      <v-btn  dark class="cyan"  @click="register">Register</v-btn>
</div>
    </div>
  </v-flex>
  </v-card>
</v-row>
 </v-container>

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

.testPadding{
  padding-top: 14px;
}

</style>
