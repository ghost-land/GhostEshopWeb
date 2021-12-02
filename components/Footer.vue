<template>
  <v-footer padless>
    <v-card
      flat
      tile
      color="black"
      class="lighten-1 white--text text-center footer"
    >
      <v-card-text>
        <v-btn
          class="mx-4 white--text"
          href="https://github.com/ghost-land"
          icon
        >
          <v-icon size="24px"> mdi-github </v-icon>
        </v-btn>
        <v-btn class="mx-4 white--text" href="https://discord.gg/a7vdfT6YPq" icon>
          <v-icon size="24px"> mdi-discord </v-icon>
        </v-btn>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ $t('footer.copyright') }}
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {}
</script>

<style scopped>
.footer {
  width: 100% !important;
}
</style>