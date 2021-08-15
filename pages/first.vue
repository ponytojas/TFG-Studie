<i18n>
{
  "en": {
    "Select": "Select an option",
    "Start": "Let's start!",
    "OptionA": "Option A",
    "OptionB": "Option B",
    "Button": "Next",
    "TextOk": "Add to cart",
    "TextBad": "I want it"
  },
  "es": {
    "Select": "Selecciona una opción",
    "OptionA": "Opción A",
    "OptionB": "Opción B",
    "Button": "Siguiente",
    "TextOk": "Añadir al carrito"
  }
}
</i18n>


<template>
  <div class="flex flex-col justify-around min-h-screen">
    <div class="flex flex-row justify-around mt-10">
      <div class="flex flex-col">
        <span class="text-4xl">{{ $t('OptionA') }}</span>
        <button
          class="mt-4 px-4 py-2 bg-gray-600 rounded-full shadow-lg text-white"
        >
          {{ $t('TextOk') }}
        </button>
      </div>
      <div class="flex flex-col">
        <span class="text-4xl">{{ $t('OptionB') }}</span>
        <button class="mt-4 px-4 py-2 bg-gray-600 9shadow-lg text-white">
          {{ $t('TextOk') }}
        </button>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col w-full">
        <div class="flex items-center justify-center w-full mb-4">
          <p class="ml-3 text-gray-700 font-medium">{{ $t('Select') }}</p>
        </div>
        <div class="flex items-center justify-center w-full mb-24">
          <label for="toogleA" class="flex items-center cursor-pointer">
            <span class="mr-4">{{ $t('OptionA') }}</span>
            <div class="relative">
              <input
                id="toogleA"
                type="checkbox"
                class="hidden"
                v-model="option"
              />
              <div
                class="
                  toggle__line
                  w-10
                  h-4
                  bg-gray-400
                  rounded-full
                  shadow-inner
                "
              ></div>
              <div
                class="
                  toggle__dot
                  absolute
                  w-6
                  h-6
                  bg-gray-300
                  rounded-full
                  shadow
                  inset-y-0
                  left-0
                "
              ></div>
            </div>
            <span class="ml-4">{{ $t('OptionB') }}</span>
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-row items-center mx-auto">
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
        @click="navigateNext"
      >
        {{ $t('Button') }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  transition: "home",
  data() {
    return {
      option: false,
    }
  },
  mounted() {
    this.$i18n.locale = this.$store.state.lang
  },

  methods: {
    navigateNext() {
      //send with axios the option selected
      let selected = this.option ? 'B' : 'A'
      this.$axios.post('/saveData', {
        "id": this.$store.state.uuid,
        "question": 'first',
        "response": selected,
      })
      this.$router.push('/second')
    },
  },
}
</script>


<style scoped>
.toggle__dot {
  top: -0.25rem;
  left: -0.25rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle__dot {
  transform: translateX(100%);
  background-color: #1b97ad;
}
input:checked ~ .toggle__line {
  background-color: #b2ddfd;
}

.toggle__line {
  background-color: #e4d0ff;
}

.toggle__dot {
  background-color: #6d287b;
}
</style>
