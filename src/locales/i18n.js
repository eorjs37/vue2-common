import { createI18n } from 'vue-i18n'
import en from './en.json'
import ko from './ko.json'

function loadLocaleMessages () {
	const locales = [{ en: en }, { ko: ko }]
  const messages = {}
  locales.forEach(lang => {
    const key = Object.keys(lang)
    messages[key] = lang[key]
  })
  return messages
}
const i18n = createI18n({
	locale: 'ko',
	fallbackLocale: 'ko',
	messages: loadLocaleMessages()
})

export default i18n;