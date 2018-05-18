import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  de: {
    messages: {
      "headline": "SIWECOS Schnell-Check",
      "description": "<p><b>Hinweis:</b> Nur registrierte Webseiten können auf zusätzliche kritische Schwachstellen hin geprüft werden.</p><p>Die Registrierung und Nutzung von <b>SIWECOS ist kostenlos!</b><br/>Bitte <a href='/app/#/register'>registrieren Sie Ihre Webseite</a> um weitere Funktionen wie den <b>täglichen Sicherheitscheck</b>, <b>automatische Benachrichtigungen</b> beim Fund einer kritischen Schwachstelle und den <b>ausführlichen Sicherheitsbericht</b> für Ihre Webseite nutzen zu können.</p>",
      "field_domain": "Domain",
      "field_domain_placeholder": "Domain, bspw. https://www.example.org",
      "field_submit": "Scan starten",
      "could_not_start": "Starten des Scans fehlgeschlagen, bitte versuchen Sie es später erneut",
      "pleasewait": "Der Scan Ihrer Domain läuft, bitte warten...",
      "domainnotfound": "Die Domain ist nicht über HTTPS erreichbar",
      "registernowhead": "Stets auf der sicheren Seite sein:",
      "registernow": "Registrieren Sie sich jetzt für den kostenlosen Sicherheits-Check. SIWECOS scannt Ihre Webseite täglich und informiert Sie proaktiv, wenn Sicherheitslücken auftauchen. Nur durch eine Registrierung wird Ihre Seite dauerhaft und kostenlos überwacht und Sie können im Notfall schnell reagieren. SIWECOS bietet umfangreiche Hilfestellungen und Informationen, so schützen Sie sich und Ihre Kunden."
    }
  }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
  locale: 'de', // set locale
  messages // set locale messages
})

export default i18n
