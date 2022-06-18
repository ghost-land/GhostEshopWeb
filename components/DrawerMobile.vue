<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mobile"
    v-model="drawerMobile"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Ghost eShop </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        nuxt
        :active-class="
          $route.fullPath === '/fr/games' || $route.fullPath === '/fr/games/'
            ? 'noActive'
            : ''
        "
        :to="localePath('/')"
      >
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('header.home') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item nuxt :to="localePath('/games')">
      <v-list-item-icon>
            <v-icon>mdi-gamepad-variant</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('header.games') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item nuxt href="https://forms.gle/oeExF7qWyDTjwSfe9">
        <v-list-item-icon>
            <v-icon>mdi-file-document-multiple</v-icon>
          </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('header.request') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group>
        <template #activator>
          <v-list-item-icon>
          <v-icon>mdi-flag</v-icon>
        </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Language</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="item in lang"
          :key="item.lang"
          :to="switchLocalePath(item.lang)"
          link
        >
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
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
  computed: {
    drawerMobile: {
      get() {
        return this.$store.getters.getDrawerMobile
      },
      set(value) {
        return this.$store.commit('setDrawerMobile', value)
      },
    },
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
