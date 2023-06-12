<template>
  <v-container>
    <v-row no-gutters>
      <v-col v-for="n in this.numpost" :key="n">
        <BlogPost
          :title="this.titles[n - 1]"
          :date="this.dates[n - 1]"
          :contents="this.text[n - 1]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import BlogPost from "./BlogPost.vue";
export default {
  name: "BlogGridLoad",

  data: () => ({
    numpost: 0,
    titles: [],
    dates: [],
    text: [],
  }),
  methods: {},
  components: {
    BlogPost,
  },
  beforeCreate() {
    async function fetchData(ob) {
      try {
        let response = await fetch("http://localhost:3000/");
        if (response.status === 200) {
          let data = await response.json();
          console.log(data);
          console.log(data.length);
          ob.numpost = data.length;
          for (let i = 0; i < data.length; i++) {
            ob.titles.push(data[i].p_title);
            ob.dates.push(data[i].p_date);
            ob.text.push(data[i].p_content);
          }
        }
      } catch (err) {
        console.log("something wrong somewhere else");
        let container = document.querySelector(".v-container");
        container.innerHTML = "<h2>Backend Server Down</h2>";
      }
    }
    /*
    fetch("http://localhost:3000/")
      .then((response) => {
        this.titles[0] = response.status;
      })
      .catch((error) => {
        console.log(error);
        // handle the error
      });*/
    fetchData(this);
    console.log(this.titles);
  },
};
</script>
