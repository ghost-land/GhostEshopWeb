<template>
  <v-bottom-sheet id="loadingSheet" v-model="loading" fullscreen>
    <v-sheet class="text-center" color="primary" height="100%">
      <v-container fluid class="fill-height">
        <v-row justify="center" align="center">
          <v-col>
            <h1 class="titleText">Ghost eShop</h1>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  data: () => ({
    loading: false,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>

<style scoped>
#loadingSheet {
  background-color: '#ff6b6b';
  overflow: scroll;
}

.titleText {
  color: white;
  font-style: italic;
  font-size: 78px;
}
</style>
