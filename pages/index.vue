<template>
  <v-container :fluid="$vuetify.breakpoint.mobile">
    <v-row>
      <v-col v-if="!$vuetify.breakpoint.mobile" cols="5">
        <v-img src="/1.jpg" />
      </v-col>
      <v-col :cols="!$vuetify.breakpoint.mobile ? 7 : 0">
        <h1>{{ $t('home.title_1') }}</h1>
        <h3 class="font-weight-medium">{{ $t('home.paragraphe_1') }}</h3>
        <br />
        <h1>{{ $t('home.title_2') }}</h1>
        <h3 class="font-weight-medium">{{ $t('home.paragraphe_2') }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  asyncData() {
    return new Promise((resolve) => {
      // eslint-disable-next-line nuxt/no-timing-in-fetch-data
      setTimeout(function () {
        resolve({})
      }, 500)
    })
  },
}
</script>