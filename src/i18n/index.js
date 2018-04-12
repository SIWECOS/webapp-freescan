import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  de: {
    messages: {
      'headline': 'SIWECOS Schnell-Check',
      'description': 'Hier können Sie einen Test-Check Ihrer Seite starten. Tragen Sie dafür einfach die Web-Adresse in das Feld ein.',
      'field_domain': 'Domain',
      'field_domain_placeholder': 'Domain, bspw. https://www.example.org',
      'field_submit': 'Scan starten',
      'could_not_start': 'Starten des Scans fehlgeschlagen, bitte versuchen Sie es später erneut',
      'pleasewait': 'Der Scan Ihrer Domain läuft, bitte warten...',
      'domainnotfound': 'Die Domain ist nicht über HTTPS erreichbar',
      'registernowhead': 'Stets auf der sicheren Seite sein:',
      'registernow': 'Registrieren Sie sich jetzt für den kostenlosen Sicherheits-Check. SIWECOS scannt Ihre Webseite täglich und informiert Sie proaktiv, wenn Sicherheitslücken auftauchen. Nur durch eine Registrierung wird Ihre Seite dauerhaft und kostenlos überwacht und Sie können im Notfall schnell reagieren. SIWECOS bietet umfangreiche Hilfestellungen und Informationen, so schützen Sie sich und Ihre Kunden.'
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'de', // set locale
  messages // set locale messages
})

export default i18n
