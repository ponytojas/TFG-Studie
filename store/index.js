export const state = () => ({
    lang: "es"
  })
  
  export const mutations = {
    setLang(state, lang) {
      state.lang = lang;
    }
  }