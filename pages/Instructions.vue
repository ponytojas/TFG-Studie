<i18n>
{
  "en": {
    "Wellcome": "Thank you for participating in this survey",
    "First": "These first slides will be used to explain how it works.",
    "Second": "Two designs will be displayed on the page at the same time and you will have to choose the one that is more pleasing, better thought out, prettier or the one you prefer for whatever reason.",
    "Last": "Easy, isn't it?",
    "Button": "Here we go"
  },
  "es": {
    "Wellcome": "Gracias por participar en esta encuesta",
    "First": "Estas primeras diapositivas servirán para explicarte el funcionamiento de la misma.",
    "Second": "En la página se mostrarán dos diseños a la vez y tendrás que elegir el que más agradable, mejor pensado, más bonito o el que prefieres por cualquier motivo",
    "Last": "Es fácil, ¿verdad?",
    "Button": "Allá vamos"
  }
}
</i18n>

<template>
  <div class="container">
    <Hooper>
      <Slide class="slide">
        <div class="w-11/12 md:w-6/12">
          <p class="text-7xl font-thin mb-20 tracking-wide leading-none">
            {{ $t('Wellcome') }}
          </p>
          <p class="text-5xl font-thin mb-20 tracking-wide leading-snug">
            {{ $t('First') }}
          </p>
        </div>
      </Slide>
      <Slide class="slide">
        <div class="w-11/12 md:w-6/12">
          <p class="text-5xl font-thin mb-20 tracking-wide leading-snug">
            {{ $t('Second') }}
          </p>
        </div>
      </Slide>
      <Slide class="slide"
        ><div class="w-11/12 md:w-6/12">
          <p class="text-5xl font-thin mb-20 tracking-wide leading-snug">
            {{ $t('Last') }}
          </p>
          <nuxt-link to="/first">
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
              {{ $t('Button') }}
            </button></nuxt-link
          >
        </div>
      </Slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </Hooper>
  </div>
</template>

<script>
import { Slide, Hooper, Navigation as HooperNavigation } from 'hooper'
export default {
  components: {
    Slide,
    Hooper,
    HooperNavigation,
  },
  mounted() {
    this.$i18n.locale = this.$store.state.lang
  },
}
</script>

<style>
button.hooper-prev,
button.hooper-next {
  width: 56px !important;
  height: 56px !important;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hooper {
  height: 100vh;
}

.slide {
  min-width: 100vw;
  color: black;
  display: flex;
  flex: column;
  align-items: center;
  justify-content: center;
}
</style>