<template>
  <v-app-bar v-if="!$vuetify.breakpoint.mobile" app color="white">
    <v-img src="/favicon.ico" max-width="32px" class="mr-1 mb-1"/>
    <v-toolbar-title class="font-weight-black">Ghost eShop</v-toolbar-title>

    <v-btn
      nuxt
      :active-class="
        $route.fullPath === '/fr/games' || $route.fullPath === '/fr/games/'
          ? 'noActive'
          : ''
      "
      :to="localePath('/')"
      text
      >{{ $t('header.home') }}</v-btn
    >
    <v-btn nuxt :to="localePath('/games')" text>{{ $t('header.games') }}</v-btn>
    <v-spacer></v-spacer>
    <v-menu left bottom>
      <template #activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-earth</v-icon>
        </v-btn>
      </template>

      <v-list v-model="listLang">
        <v-list-item
          v-for="item in lang"
          :key="item.lang"
          :to="switchLocalePath(item.lang)"
        >
          <v-list-item-title>{{ item.name }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      listLang: null,
      lang: [
        {
          name: this.$t('header.english'),
          lang: 'en',
        },
        {
          name: this.$t('header.french'),
          lang: 'fr',
        },
      ],
    }
  },
}
</script>

<style scopped>
.v-btn {
  margin-left: 10px;
}

.noActive::before {
  opacity: 0 !important;
}
</style>