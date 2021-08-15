export const state = () => ({
  lang: 'es',
  uuid: 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    let dt = new Date().getTime()
    let r = (dt + Math.random() * 16) % 16 | 0
    dt = Math.floor(dt / 16)
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16)
  }),
})

export const mutations = {
  setLang(state, lang) {
    state.lang = lang
  },
}
