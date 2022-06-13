import { createI18n } from 'vue-i18n' //引入vue-i18n组件
import zh from './zh'
import ja from './ja'

const language = window.localStorage.getItem('language') ? window.localStorage.getItem('language') : "ja"
const i18n = createI18n({
  locale: language || "ja_JP",
  messages: {
    ja,
    zh
  },
  fallbackLocale: 'ch',
  globalInjection: true,
  legacy: false, // you must specify 'legacy: false' option
  fallbackWarn: false,
  missingWarn: false
});

export default i18n