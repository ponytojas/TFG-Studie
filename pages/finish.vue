<i18n>
{
  "en": {
    "Title": "🎉 And that's all! 🎉 ",
    "Thanks": "Thank you very much for participating and getting to this point"
  },
  "es": {
    "Title": "🎉 ¡Y eso es todo! 🎉",
    "Thanks": "Muchas gracias por participar y llegar hasta este punto"
  }
}
</i18n>


<template>
  <div
    class="flex flex-col justify-center items-center align-center min-h-screen mx-auto px-2"
  >
    <p class="text-4xl md:text-8xl font-thin mb-10 text-center">
      {{ $t('Title') }}
    </p>
    <p class="text-2xl md:text-4xl font-thin text-center">
        {{ $t('Thanks') }}
    </p>
  </div>
</template>


<script>
export default {
  transition: 'home',
  mounted() {
    this.$i18n.locale = this.$store.state.lang
  },
}
</script>