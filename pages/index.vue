<template>
  <div>
    <v-img class="imgCover" src="/banner-site.webp" height="90vh">
      <v-container fluid class="fill-height align-end">
        <v-row>
          <v-col class="text-center">
            <h1
              color="white"
              class="button font-weight-black white--text"
              style="shadow: 2px 2px 2px"
            >
              BETTER THAN EVER
            </h1>
            <v-btn
              color="primary"
              href="https://cdn.ghosteshop.com/Homebrew/GhostEshop.cia"
              >{{ $t('download') }} !</v-btn
            >
          </v-col>
        </v-row>
      </v-container>
    </v-img>
    <v-container :fluid="$vuetify.breakpoint.mobile">
      <v-row>
        <v-col v-if="!$vuetify.breakpoint.mobile" cols="5">
          <v-img src="/1.webp" />
        </v-col>
        <v-col :cols="!$vuetify.breakpoint.mobile ? 7 : 0">
          <h1>{{ $t('home.faq') }}</h1>
          <v-card>
            <v-card-title>{{ $t('home.title_1') }}</v-card-title>
            <v-card-text>{{ $t('home.paragraphe_1') }}</v-card-text>
          </v-card>
          <br />
          <v-card>
            <v-card-title>{{ $t('home.title_2') }}</v-card-title>
            <v-card-text
              >{{ $t('home.paragraphe_2') }}<br />{{ $t('home.paragraphe_2_1')
              }}<br />{{ $t('home.paragraphe_2_2') }}<br />{{
                $t('home.paragraphe_2_3')
              }}</v-card-text
            >
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon href="https://3ds.hacks.guide/"><v-icon>mdi-web</v-icon></v-btn>
              <v-btn icon href="https://cdn.ghosteshop.com/Homebrew/GhostEshop.cia"><v-icon>mdi-download</v-icon></v-btn>
            </v-card-actions>
          </v-card>
          <br>
          <v-card>
            <v-card-title>{{ $t('home.title_3') }}</v-card-title>
            <v-card-text>{{ $t('home.paragraphe_3') }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon href="https://discord.gg/a7vdfT6YPq"><v-icon>mdi-discord</v-icon></v-btn>
            </v-card-actions>
          </v-card>
          <br>
          <v-card>
            <v-card-title>{{ $t('home.title_4') }}</v-card-title>
            <v-card-text>{{ $t('home.paragraphe_4') }}</v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon :href="localePath('/games')"><v-icon>mdi-gamepad-variant</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
