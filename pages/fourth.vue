<i18n>
{
  "en": {
    "Select": "Select an option",
    "Start": "Let's start!",
    "OptionA": "Option A",
    "OptionB": "Option B",
    "Button": "Next",
    "TitleCard": "Flat in Carrer de Jerónima Galés",
    "SubtitleCard": "Newly renovated apartment available to rent in an enviable area of Valencia",
    "Price": "600€ / month",
    "LastTextCard": "Minimum stay of 6 months",
    "ContactButton": "Contact"

  },
  "es": {
    "Select": "Selecciona una opción",
    "OptionA": "Opción A",
    "OptionB": "Opción B",
    "Button": "Siguiente",
    "TitleCard": " Piso en Carrer de Jerónima Galés",
    "SubtitleCard": "Piso recien reformado disponible para alquilar en una zona envidiable de Valencia",
    "Price": "600€ / mes",
    "LastTextCard": "Estancia mínima de 6 meses",
    "ContactButton": "Contactar"
  }
}
</i18n>


<template>
  <div class="flex flex-col justify-around md:min-h-screen">
    <div class="flex flex-row w-full flex-wrap h-auto justify-around mt-10">
      <div class="flex flex-col">
        <span class="mx-auto text-4xl">{{ $t('OptionA') }}</span>
        <div
          class="
            mt-4
            mb-4
            mx-auto
            h-auto
            md:h-56
            border
            rounded-lg
            flex flex-col
            md:flex-row
            card
          "
        >
          <div
            class="
              flex flex-row
              md:flex-col
              w-full
              md:w-3/12
              h-3/6
              md:h-full
              bg-gray-300
            "
          >
            <nuxt-img
              class="h-full rounded-lg md:rounded-r-none w-full"
              src="/images/flat.jpeg"
            />
          </div>
          <div class="flex flex-col w-full px-2 md:px-0 md:w-9/12">
            <div class="flex flex-row h-auto w-full">
              <div class="flex flex-row md:flex-col">
                <div class="flex flex-col md:flex-row w-full">
                  <p class="pt-4 pl-4 text-2xl font-semibold">
                    {{ $t('TitleCard') }}
                  </p>
                </div>
                <div
                  class="flex flex-col md:flex-row h-3/6 w-full pl-4 mb-4 pt-2"
                >
                  <p>
                    {{ $t('SubtitleCard') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-row h-full w-full">
              <div class="flex flex-col w-full">
                <div class="flex flex-row w-full">
                  <div class="flex flex-col w-6/12">
                    <div class="flex flex-row h-11/12 w-full">
                      <div class="pt-3 pl-3">
                        <p class="text-base">
                          <span class="text-lg">{{ $t('Price') }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-row h-full w-full">
                      <div class="pt-3 pl-3">
                        <p class="text-sm">{{ $t('LastTextCard') }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col w-6/12 h-full">
                    <div
                      class="
                        px-4
                        py-2
                        mx-auto
                        my-auto
                        bg-purple-600
                        w-8/12
                        sm:w-4/12
                        md:w-6/12
                        lg:w-10/12
                        cursor-pointer
                        text-white
                        rounded
                        hover:bg-purple-800
                      "
                    >
                      <p class="text-center w-full">{{ $t('ContactButton') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col mt-20 md:mt-0">
        <span class="text-4xl mx-auto">{{ $t('OptionB') }}</span>
<div
          class="
            mt-4
            mb-4
            mx-auto
            h-auto
            md:h-56
            border
            rounded-lg
            flex flex-col
            md:flex-row
            card
          "
        >
          <div
            class="
              flex flex-row
              md:flex-col
              w-full
              md:w-3/12
              h-3/6
              md:h-full
              bg-gray-300
            "
          >
            <nuxt-img
              class="h-full rounded-lg md:rounded-r-none w-full"
              src="/images/flat.jpeg"
            />
          </div>
          <div class="flex flex-col w-full px-2 md:px-0 md:w-9/12">
            <div class="flex flex-row h-auto w-full">
              <div class="flex flex-row md:flex-col">
                <div class="flex flex-col md:flex-row w-full">
                  <p class="pt-4 pl-4 text-2xl font-semibold">
                    {{ $t('TitleCard') }}
                  </p>
                </div>
                <div
                  class="flex flex-col md:flex-row h-3/6 w-full pl-4 mb-4 pt-2"
                >
                  <p>
                    {{ $t('SubtitleCard') }}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-row bg-gray-100 h-full w-full">
              <div class="flex flex-col w-full">
                <div class="flex flex-row w-full">
                  <div class="flex flex-col w-6/12">
                    <div class="flex flex-row h-11/12 w-full">
                      <div class="pt-3 pl-3">
                        <p class="text-base">
                          <span class="text-lg font-bold">{{ $t('Price') }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-row h-full w-full">
                      <div class="pt-3 pl-3">
                        <p class="text-sm">{{ $t('LastTextCard') }}</p>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col w-6/12 h-full">
                    <div
                      class="
                        px-4
                        py-2
                        mx-auto
                        my-auto
                        bg-purple-600
                        w-8/12
                        sm:w-4/12
                        md:w-6/12
                        lg:w-10/12
                        cursor-pointer
                        text-white
                        rounded
                        hover:bg-purple-800
                      "
                    >
                      <p class="text-center w-full">{{ $t('ContactButton') }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  transition: 'home',
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
        id: this.$store.state.uuid,
        question: 'fourth',
        response: selected,
      })
      this.$router.push('/fifth')
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

.card {
  background-color: #fff;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.card:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
