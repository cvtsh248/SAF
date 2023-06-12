<template>
  <v-toolbar border title="My Blog">
    <v-btn variant="outlined" @click="dialog = true">Add Post</v-btn>
    <v-dialog variant="outlined" v-model="dialog" width="800" height="auto">
      <v-card>
        <v-spacer></v-spacer>
        <v-card-title>Create a new blog post</v-card-title>
        <v-text-field
          v-model="title_in"
          label="Title"
          variant="outlined"
          style="margin-left: auto; margin-right: auto; width: 70%"
        ></v-text-field>
        <v-textarea
          v-model="text_in"
          label="Text"
          variant="outlined"
          rows="12"
          style="margin-left: auto; margin-right: auto; width: 70%"
        ></v-textarea>
        <v-card-actions>
          <v-row align="center" justify="center">
            <v-btn variant="outlined" @click="dialog = false">Back</v-btn>
            <v-btn variant="outlined" @click="PublishPost()">Publish</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
import axios from "axios";

export default {
  name: "AppNav",
  data: () => ({
    dialog: false,
    title_in: "",
    text_in: "",
    numpost: 0,
  }),
  methods: {
    PublishPost() {
      console.log("Publishing: " + this.title_in);
      this.dialog = false;
      this.postData(this);
      //this.title_in = "";
      //this.text_in = "";
    },
    async postData(ob) {
      /*const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          id: "egg",
          title: "egg",
          date: "egg",
          text: "egg",
        }),
      };*/
      // Fetching info
      try {
        let response = await fetch("http://localhost:3000/");
        if (response.status === 200) {
          let data = await response.json();
          ob.numpost = data.length;
        }
      } catch (err) {
        console.log("something wrong somewhere else");
        let container = document.querySelector(".v-container");
        container.innerHTML = "<h2>Backend Server Down</h2>";
      }

      //posting
      try {
        let response = await axios.post("http://localhost:3000/", {
          id: ob.numpost + 1,
          title: ob.title_in,
          date: new Date().toISOString().split("T")[0],
          text: ob.text_in,
        });
        if (response.status === 200) {
          let data = await response.json();
          data;
        }
      } catch (err) {
        console.log("something wrong somewhere else");
        let container = document.querySelector(".v-container");
        container.innerHTML = "<h2>Backend Server Down</h2>";
      }
    },
  },
};
</script>

<style scoped></style>
