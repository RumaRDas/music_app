<template>
  <v-card color="grey lighten-4" flat height="50px" tile>
    <v-toolbar dense>
      <v-toolbar-title>
        <span @click="navigateTo({name: 'root'})">Musuc App</span>
      </v-toolbar-title>
      <!-- <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat>
        Browse
      </v-btn>
      </v-toolbar-items>-->
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat @click="navigateTo({name: 'register'})">Sign Up</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
</style>
