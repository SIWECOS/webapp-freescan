import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  de: {
    messages: {
      'headline': 'Kostenfreier Sicherheitscheck',
      'description': 'Geben Sie die Adresse Ihrer Website an um einen kostenfreien Sicherheitscheck durch SIWECOS zu erhalten:',
      'field_domain': 'Domain',
      'field_submit': 'Scan starten',
      'could_not_start': 'Starten des Scans fehlgeschlagen, bitte versuchen Sie es später erneut',
      'pleasewait': 'Der Scan Ihrer Domain läuft, bitte warten...',
      'domainnotfound': 'Die Domain ist nicht über HTTPS erreichbar'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'de', // set locale
  messages // set locale messages
})

export default i18n
