<template>
  <v-navigation-drawer
    v-if="$vuetify.breakpoint.mobile"
    v-model="drawerMobile"
    app
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Ghost Eshop </v-list-item-title>
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
        <v-list-item-content>
          <v-list-item-title>{{ $t('header.home') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item nuxt :to="localePath('/games')">
        <v-list-item-content>
          <v-list-item-title>{{ $t('header.games') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>Languages</v-list-item-title>
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
          name: 'French',
          lang: 'fr',
        },
        {
          name: 'English',
          lang: 'en',
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