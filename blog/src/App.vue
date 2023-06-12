<template>
  <v-app>
    <v-main>
      <router-view />
      <router-link to="/">Go to Home</router-link>
      <router-link to="/About">Go to About</router-link>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
