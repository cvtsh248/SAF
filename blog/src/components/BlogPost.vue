<template>
  <v-container>
    <v-card variant="outlined" width="300">
      <template v-slot:title> {{ title }} </template>
      <template v-slot:subtitle> {{ date }} </template>
      <template v-slot:text> {{ contents }} </template>
      <v-card-actions>
        <v-btn variant="outlined" @click="dialog = true"> Expand </v-btn>
      </v-card-actions>
      <v-dialog variant="outlined" v-model="dialog" width="auto">
        <v-card>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-text>
            {{ contents }}
          </v-card-text>
          <v-card-actions>
            <v-row align="center" justify="center">
              <v-btn variant="outlined" @click="dialog = false">Back</v-btn>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "BlogPost",

  data: () => ({
    dialog: false,
  }),

  props: ["title", "date", "contents"],
  methods: {
    getData() {
      console.log("chicken");
    },
  },
  mounted() {},
};
</script>
