<template>
  <section class="container">
    <div class="main-wrapper">
      <div class="locale-switch">
        <nuxt-link class="locale-switch__Link"
              v-if="$i18n.locale === 'en'" :to="`/es` + $route.fullPath" active-class="none" exact>
            {{ $t('links.spanish') }}
        </nuxt-link>
        <nuxt-link class="locale-switch__Link"
              v-else :to="$route.fullPath.replace(/^\/[^\/]+/, '')" active-class="none" exact>
          {{ $t('links.english') }}
        </nuxt-link>
      </div>
      <CvHeader/>
      <personal/>
      <timeline title="Education" icon="ass" :list="School[locale]"/>
    </div>
  </section>
</template>

<script>
import CvHeader from '~components/cvHeader.vue'
import personal from '~components/personal.vue'
import timeline from '~components/timeline.vue'

export default {
  components: {
    CvHeader,
    personal,
    timeline
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
  data () {
    return {
      locale: 'en',
      School: {
        en: [
          {
            year: 2006,
            title: 'Technological bachelorship',
            detail: 'La Salle Gran Vía Zaragoza'
          },
          {
            year: 2006,
            title: 'Technological bachelorship',
            detail: 'La Salle Gran Vía Zaragoza'
          }
        ],
        es: [
          {
            year: 2006,
            title: 'Bachillerato Tecnológico',
            detail: 'La Salle Gran Vía Zaragoza'
          },
          {
            year: 2006,
            title: 'Bachillerato Tecnológico',
            detail: 'La Salle Gran Vía Zaragoza'
          }
        ]
      }
    }
  },
  methods: {
    path (url) {
      return (this.$i18n.locale === 'en' ? url : '/' + this.$i18n.locale + url)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.main-wrapper {
  text-align: left;
  margin: auto;
  max-width: 80vw;
  width: 100%;
}

.title {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 4em;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 2.7em;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
  margin-bottom: 0.5em;
}

hr {
  margin: 1em 0;
}

</style>
