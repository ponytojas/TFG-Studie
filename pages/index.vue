<i18n>
{
  "en": {
    "Choose": "Choose your language",
    "Start": "Let's start!"
  },
  "es": {
    "Choose": "Elige tu idioma",
    "Start": "¡Empecemos!"
  }
}
</i18n>


<template>
  <div
    class="
      relative
      flex flex-col
      justify-center
      min-h-screen
      items-center
      sm:pt-0
    "
  >
    <div class="flex flex-row mb-10">
      <p class="text-5xl font-thin">{{ $t('Choose') }}</p>
    </div>
    <div class="flex flex-row justify-evenly w-full">
      <div
        style="font-size: 152px"
        class="cursor-pointer"
        @click="changeLang('es')"
      >
        🇪🇸
      </div>
      <div
        style="font-size: 152px"
        class="cursor-pointer"
        @click="changeLang('en')"
      >
        🇬🇧
      </div>
    </div>
    <div class="flex flex-row">
      <nuxt-link to="/instructions">
        <button
          class="
            bg-green-400
            px-4
            py-2
            rounded-3xl
            shadow
            text-gray-800
            hover:bg-green-600
            hover:shadow-md
            hover:text-white
          "
        >
          {{ $t('Start') }}
        </button></nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  transition: 'home',
  data() {
    return {
      lang: this.$store.state.lang,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang
      this.$store.commit('setLang', lang)
    },
  },
  mounted() {
    this.$i18n.locale = this.lang
  },
}
</script>

<style>
.home-enter-active {
  transition: all 0.5s ease;
}
.home-leave-active {
  transform: translateX(-10px);
  opacity: 0;
}
.home-enter, .home-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>