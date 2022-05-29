<template>
  <v-app>
    <Header />
    <HeaderMobile />
    <DrawerMobile />
    <v-main>
      <nuxt keep-alive />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped>
.imgCover {
  margin-top: 40px;
}

.v-main {
  padding: 0px 0px 0px !important;
}
</style>