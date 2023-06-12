<template>
  <div class="home">
    <AppNav />
    <BlogHeading />
    <BlogGridLoad />
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import BlogHeading from "../components/BlogHeading.vue";
import AppNav from "../components/AppNav.vue";
//import BlogPost from "../components/BlogPost.vue";
import BlogGridLoad from "../components/BlogGridLoad.vue";

export default defineComponent({
  name: "HomeView",

  components: {
    AppNav,
    BlogHeading,
    BlogGridLoad,
  },
});
</script>
